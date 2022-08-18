import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Callout, Card, Typography, Spacer, Spinner, FlexGrid, Box, StackView
} from '@telus-uds/ds-allium'
import { NextSeo } from 'next-seo'
import seoConfig from './seo.config'
import axios from 'axios'

const PARTNER_API_PATH = 'http://localhost:3000/api/partner'

const Info = () => {
  const [partner, setPartner] = useState({})
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const pathParameters = router?.query
  const { id } = pathParameters

  useEffect(async () => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios(
          `${PARTNER_API_PATH}/${id}`
        )
        setPartner(result.data)
        console.log('########## result.data=', result.data)
      } catch (e) {
        console.log('Error:', e)
      }
      setLoading(false)
    }

    if (id) fetchData()
  },[id])
  return (
  <>
    <NextSeo {...seoConfig} />
    <main>
        <Callout rounded>
          <Card>
            <Typography variant={{ size: 'h1' }}>Partners Information</Typography>
            <Spacer space={6} />
            <Spinner label={`Fetching partner with id: ${id}`} show={loading}>
              <FlexGrid>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={3}>
                    <Box space={2}>
                      <StackView space={3} direction="row">
                        <Typography variant={{ background: 'light' }}>ID: </Typography>
                        <Typography>{partner.id}</Typography>
                      </StackView>
                    </Box>
                  </FlexGrid.Col>
                  <FlexGrid.Col xs={5}>
                    <Box space={2}>
                      <StackView space={3} direction="row">
                        <Typography variant={{ background: 'light' }}>Name:</Typography>
                        <Typography>Ivan Gabrovsky</Typography>
                      </StackView>
                    </Box>
                  </FlexGrid.Col>
                  <FlexGrid.Col xs={4}>
                    <Box space={2}>
                      <StackView space={3} direction="row">
                        <Typography variant={{ background: 'light' }}>Unique name:</Typography>
                        <Typography>Ivan</Typography>
                      </StackView>
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={6}>
                    <Box space={2}>
                      <StackView space={3} direction="row">
                      <Typography variant={{ background: 'light' }}>Partner agreement start:</Typography>
                      <Typography>June 18, 2022</Typography>
                      </StackView>
                    </Box>
                  </FlexGrid.Col>
                  <FlexGrid.Col xs={6}>
                    <Box space={2}>
                      <StackView space={3} direction="row">
                      <Typography variant={{ background: 'light' }}>Partner agreement end:</Typography>
                      <Typography>June 18, 2026</Typography>
                      </StackView>
                    </Box>
                  </FlexGrid.Col>
                  <FlexGrid.Col xs={6}>
                    <Box space={2}>
                      <StackView space={3} direction="row">
                      <Typography variant={{ background: 'light' }}>Partner status:</Typography>
                      <Typography>On-boarding with Settlement</Typography>
                      </StackView>
                    </Box>
                    <Box space={2}>
                      <StackView space={3} direction="row">
                      <Typography variant={{ background: 'light' }}>Phone number:</Typography>
                      <Typography>6487658396</Typography>
                      </StackView>
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              </FlexGrid>
            </Spinner>
        </Card>
      </Callout>
    </main>
  </>
  )
}

export default Info
