# ------------------------------------------------
# Declare global build args
# Derermine what step the final stage is built from
ARG BUILD_STEP=app
ARG APP_BASE=base

# ------------------------------------------------
# Configure builder image:
# https://catalog.redhat.com/software/containers/ubi9/nodejs-16/61a60604c17162a20c1c6a2e
#
# $APP_ROOT = /opt/app-root
# $HOME = /opt/app-root/src
FROM registry.access.redhat.com/ubi8/nodejs-16 AS builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR $APP_ROOT

RUN echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > $APP_ROOT/.npmrc

COPY --chown=1001:0 \
  ./package.json \
  ./package-lock.json \
  ./next.config.mjs \
  $APP_ROOT/

COPY --chown=1001:0 ./public/ $APP_ROOT/public/
COPY --chown=1001:0 ./src/ $APP_ROOT/src/

USER 1001

RUN mkdir -p $APP_ROOT/.next

ENV NODE_ENV=production

ARG NPM_TOKEN
RUN npm ci --no-progress --production

# ------------------------------------------------
# Configure minimal base image:
# https://catalog.redhat.com/software/containers/ubi9/nodejs-16-minimal/61a6059abfd4a5234d59621f
FROM registry.access.redhat.com/ubi8/nodejs-16-minimal AS base

WORKDIR $APP_ROOT
COPY --from=builder $APP_ROOT $APP_ROOT

# ------------------------------------------------
# Prepare app image
FROM ${APP_BASE} as app

ARG ENV_FILE=.env.production

COPY --chown=1001:0 ./$ENV_FILE $APP_ROOT/.env.production.local

USER 1001

RUN node_modules/.bin/next build --no-lint

# ------------------------------------------------
# Build and run app image
FROM ${BUILD_STEP} AS final

ENV PORT=4000

USER 1001

RUN chmod -R g+rw $APP_ROOT/.next

EXPOSE ${PORT}

ENTRYPOINT ["node_modules/.bin/next"]
CMD ["start"]
