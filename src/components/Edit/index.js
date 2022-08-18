import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Callout, Card, Typography, Spacer, Spinner, FlexGrid, Box, StackView, TextInput
} from '@telus-uds/ds-allium'
import { NextSeo } from 'next-seo'
import seoConfig from './seo.config'
import axios from 'axios'

const PARTNER_API_PATH = 'http://localhost:3000/api/partner'
const locale = 'en-CA'
const options = { year: 'numeric', month: 'short', day: 'numeric' }

const Edit = () => {
  const [partner, setPartner] = useState({ name: ''})
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

  const changeField = (e) => {
    console.log(e)
}
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
                      <Typography variant={{ background: 'light', bold: true }}>ID: </Typography>
                      <Typography>{partner.id}</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={5}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                      <Typography variant={{ background: 'light', bold: true }}>Name:</Typography>
                      <TextInput
                        label="Name:"
                        value={partner?.name}
                        onChange={changeField}
                        />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={4}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                      <Typography variant={{ background: 'light', bold: true }}>Unique name:</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
              <FlexGrid.Row>
                <FlexGrid.Col xs={6}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    {/* <TextInput
                        label="Unique name:"
                        value={new Date(partner?.status?.timePeriod?.startTs).toLocaleDateString(locale, options)}
                    /> */}
                    <Typography variant={{ background: 'light', bold: true }}>Partner agreement start:</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={6}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    {/* <TextInput
                        label="Unique name:"
                        value={new Date(partner?.status?.timePeriod?.endTs).toLocaleDateString(locale, options)}
                    /> */}
                    <Typography variant={{ background: 'light', bold: true }}>Partner agreement end:</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={6}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <Typography variant={{ background: 'light', bold: true }}>Partner status:</Typography>
                    <Typography>{partner?.status?.partnerStatusDescTxt}</Typography>
                    </StackView>
                  </Box>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <Typography variant={{ background: 'light', bold: true }}>Phone number:</Typography>
                    <Typography>{partner?.organizationContactAddress?.organizationContact[0]?.contactTelNumber}</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <Typography variant={{ background: 'light', bold: true }}>Address:</Typography>
                    <Typography>{partner?.organizationContactAddress?.contactAddressCharacteristic?.streetName}, {partner?.organizationContactAddress?.contactAddressCharacteristic?.countryCd}</Typography>
                    </StackView>
                  </Box>
                  <Box space={2}>
                    <StackView space={6} direction="row">
                    <Typography variant={{ background: 'light', bold: true }}>Email:</Typography>
                    <Typography>{partner?.organizationContactAddress?.organizationContact[0]?.contactEmail}</Typography>
                    </StackView>
                  </Box>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <Typography variant={{ background: 'light', bold: true }}>Purpose:</Typography>
                    <Typography>{partner?.organizationContactAddress?.organizationContact[0]?.contactPurpose?.pcPurposeTypeTxt}</Typography>
                    </StackView>
                  </Box>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <Typography variant={{ background: 'light', bold: true }}>Website:</Typography>
                    <Typography>{partner?.partyCharacteristic?.orgWebsiteUrl}</Typography>
                    </StackView>
                  </Box>
              </FlexGrid.Row>
            </FlexGrid>
            </Spinner>
        </Card>
      </Callout>
    </main>
  </>
  )
}

export default Edit
