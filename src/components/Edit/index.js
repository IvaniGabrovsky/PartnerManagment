import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Callout, Card, Typography, Spacer, Spinner, FlexGrid, Box, StackView, TextInput, DatePicker, TextArea
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

  const [name, setName] = useState('')
  const [uniqueName, setUniqueName] = useState('')
  const [startTs, setStartTs] = useState('')
  const [endTs, setEndTs] = useState('')
  const [partnerStatusDescTxt, setPartnerStatusDescTxt] = useState('')
  const [contactTelNumber, setContactTelNumber] = useState('')
  const [municipalityName, setMunicipalityName] = useState('')
  const [streetName, setStreetName] = useState('')
  const [addressMatchingStatCd, setAddressMatchingStatCd] = useState('')
  const [postalZipCdTxt, setPostalZipCdTxt] = useState('')
  const [countryCd, setCountryCd] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [pcPurposeTypeTxt, setPcPurposeTypeTxt] = useState('')
  const [orgWebsiteUrl, setOrgWebsiteUrl] = useState('')

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
        setName(result.data.name)
        setUniqueName(result.data.uniqueName)
        setStartTs(result.data.startTs)
        setEndTs(result.data.endTs)
        setPartnerStatusDescTxt(result.data.partnerStatusDescTxt)
        setContactTelNumber(result.data.contactTelNumber)
        setMunicipalityName(result.data.municipalityName)
        setStreetName(result.data.streetName)
        setAddressMatchingStatCd(result.data.addressMatchingStatCd)
        setPostalZipCdTxt(result.data.postalZipCdTxt)
        setCountryCd(result.data.countryCd)
        setContactEmail(result.data.contactEmail)
        setPcPurposeTypeTxt(result.data.pcPurposeTypeTxt)
        setOrgWebsiteUrl(result.data.orgWebsiteUrl)
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
            <Spacer space={2} />
            <Spinner label={`Fetching partner with id: ${id}`} show={loading}>
              <FlexGrid>
              <FlexGrid.Row>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">        
                      <Typography variant={{ background: 'light', bold: true }}>ID: </Typography>
                      <Typography>{partner.id}</Typography>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={5}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                      <TextInput
                        label="Name:"
                        value={partner?.name}
                        onChange={changeField}
                        />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={4}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="Unique name:"
                        value={partner?.uniqueName}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
              </FlexGrid.Row>
              <FlexGrid.Row>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <DatePicker label="Partner agreement start:"
                    value={new Date(partner?.startTs).toLocaleDateString(locale, options)}
                    onChange={changeField}/>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <DatePicker label="Partner agreement end:"
                    value={new Date(partner?.endTs).toLocaleDateString(locale, options)}
                    onChange={changeField}/>
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="Partner status:"
                        value={partner?.partnerStatusDescTxt}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="Phone number:"
                        value={partner?.contactTelNumber}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="Street:"
                        value={partner?.streetName}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="City:"
                        value={partner?.municipalityName}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="State:"
                        value={partner?.addressMatchingStatCd}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="Zip code:"
                        value={partner?.postalZipCdTxt}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="Country code:"
                        value={partner?.countryCd}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={6} direction="row">
                    <TextInput
                        label="Email:"
                        value={partner?.contactEmail}
                        onChange={changeField}
                    />
                    </StackView>
                  </Box>
                </FlexGrid.Col>
                <FlexGrid.Col xs={12} md={3}>
                  <Box space={2}>
                    <StackView space={3} direction="row">
                    <TextInput
                        label="Website:"
                        value={partner?.orgWebsiteUrl}
                        onChange={changeField}
                    />
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

export default Edit
