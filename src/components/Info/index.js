import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Callout, Card, Typography, Spacer, Spinner
} from '@telus-uds/ds-allium'
import { NextSeo } from 'next-seo'
import seoConfig from './seo.config'
import { FlexGrid } from '@telus-uds/ds-allium'
import { Box } from '@telus-uds/ds-allium'
import {StackView} from '@telus-uds/ds-allium'
// import axios from 'axios'

// const PARTNER_API_PATH = 'http://localhost:3000/api/partner'

const Info = () => {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const pathParameters = router?.query
  // console.log('########## pathParameters=', pathParameters, ' router=', router)
  const { id } = pathParameters
  // const [partners, setPartners] = useState([])
  // const [loading, setLoading] = useState(false)

  // useEffect(async () => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     const result = await axios(
  //       PARTNERS_API_PATH
  //     )
  //     setPartners(result.data)
  //     setLoading(false)
  //   }

  //   fetchData()
  // },[])
  return (
  <>
    <NextSeo {...seoConfig} />
    <main>
        <Callout rounded>
          <Card>
            {/* <Spinner label="Fetching partners" show={loading}> */}
              <FlexGrid>
              <FlexGrid.Row>
                <FlexGrid.Col xs={4}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                      <Typography>ID: </Typography>
                      <Typography>1234</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={8}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    
                    </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
              <FlexGrid.Row>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>Name: </Typography>
                    </StackView>

                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>Ivan Gabrovsky </Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
              <FlexGrid.Row>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                  <StackView>
                    <Typography>Unique name:</Typography>
                  </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                  <StackView>
                    <Typography>Ivan</Typography>
                  </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
              <FlexGrid.Row>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>Partner status:</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>On-boarding with Settlement</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
              <FlexGrid.Row>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>Partner agreement start:</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>June 18, 2022</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
              <FlexGrid.Row>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>Partner agreement end:</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={3}>
                  <Box variant={{ background: 'light' }} space={2}>
                    <StackView>
                    <Typography>June 18, 2026</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
            </FlexGrid>

            {/* </Spinner> */}
        </Card>
      </Callout>
    </main>
  </>
  )
}

export default Info
