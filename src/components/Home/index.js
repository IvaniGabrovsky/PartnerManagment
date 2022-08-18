import { useState, useEffect } from 'react'
import {
  Callout, Card, Icon, Table, StackView, Spinner, Typography, Spacer, Link
} from '@telus-uds/ds-allium'
import { NextSeo } from 'next-seo'
import seoConfig from './seo.config'
import { Document, Clipboard, Delete } from '@telus-uds/palette-allium/build/rn/icons'
import axios from 'axios'

const PARTNERS_API_PATH = 'http://localhost:3000/api/partners'
const locale = 'en-CA'
const options = { year: 'numeric', month: 'short', day: 'numeric' }

const Home = () => {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios(
        PARTNERS_API_PATH
      )
      setPartners(result.data)
      setLoading(false)
    }

    fetchData()
  },[])
  return (
  <>
    <NextSeo {...seoConfig} />
    <main>
        <Callout rounded>
          <Card>
            <Typography variant={{ size: 'h1' }}>Partners</Typography>
            <Spacer space={6} />
            <Spinner label="Fetching partners" show={loading}>
              <Table>
                <Table.Header>
                  <Table.Cell>Id</Table.Cell>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>Unique name</Table.Cell>
                  <Table.Cell>Partner status</Table.Cell>
                  <Table.Cell>Partner agreement start</Table.Cell>
                  <Table.Cell>Partner agreement end</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Header>
                <Table.Body>
                  {partners && partners.length > 0 && partners.map((partner) => {
                    return (<Table.Row key={partner?.id}>
                      <Table.Cell>{partner?.id}</Table.Cell>
                      <Table.Cell>{partner?.name}</Table.Cell>
                      <Table.Cell>{partner?.adjustmentCharacteristics?.settlementAlias?.uniqueName}</Table.Cell>
                      <Table.Cell>{partner?.status?.partnerStatusDescTxt}</Table.Cell>
                      <Table.Cell>{new Date(partner?.status?.timePeriod?.startTs).toLocaleDateString(locale, options)}</Table.Cell>
                      <Table.Cell>{new Date(partner?.status?.timePeriod?.endTs).toLocaleDateString(locale, options)}</Table.Cell>
                      <Table.Cell>
                        <StackView space={3} divider direction="row">
                          <Link
                            icon={Document}
                            href={`/info/${partner?.id}`}
                            variant={{ alternative: true }}
                          ></Link>
                          {/* <Icon icon={Document} accessibilityLabel="More Info" /> */}
                          <Icon icon={Clipboard} accessibilityLabel="Edit" />
                          <Icon icon={Delete} accessibilityLabel="Delete" />
                        </StackView>
                      </Table.Cell>
                    </Table.Row>)
                  })}
                </Table.Body>
              </Table>
            </Spinner>
        </Card>
      </Callout>
    </main>
  </>
  )
}

export default Home
