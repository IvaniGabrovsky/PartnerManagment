## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page will auto-update as you edit the file.

## Testing

### Unit

[Jest](https://jestjs.io/docs) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing

```
$ npm run test
```

### E2E

[Cypress](https://github.com/cypress-io/cypress) for integration testing

To open the cypress GUI while developing:

```
$ npm run cypress open
```

To run e2e tests in headless mode:

```
$ npm run test:e2e
```

In order run headless e2e tests locally, you will need an `NPM_TOKEN` env var containing an up to date TELUS NPM token.

Run the following to add the latest NPM token to your env:

```
export NPM_TOKEN=$(shippy get secret npm --common --field=token)
```

## Next Steps

Not sure what to do next? Check out our [Next Steps Guide](https://github.com/telus/platform-web/blob/main/docs/QUICKSTART.md#next-steps).
