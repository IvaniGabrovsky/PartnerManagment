import { useState, useEffect } from 'react'
import { Callout, Card } from '@telus-uds/ds-allium'
import { NextSeo } from 'next-seo'
import seoConfig from './seo.config'
import { Table, StackView } from '@telus-uds/ds-allium'
import { Button } from '@telus-uds/ds-allium'
import { Icon } from '@telus-uds/ds-allium'
import { Document,  Clipboard, Delete } from '@telus-uds/palette-allium/build/rn/icons'
import axios from 'axios'

const PARTNERS_API_PATH = 'http://localhost:3000/api/partners'

const Home = () => { 
  const [partners, setPartners] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        PARTNERS_API_PATH,
      );
      console.log(result.data.length);
      // console.log(result.data);
      setPartners(result.data);
      console.log(partners);
    };

    fetchData();
  },[]);
  return (
  <>
    <NextSeo {...seoConfig} />
    <main>
      <Callout rounded>
        <Card>
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
                <Table.Row>
                  <Table.Cell>1234</Table.Cell>
                  <Table.Cell>Ivan Gabrovsky</Table.Cell>
                  <Table.Cell>Ivan</Table.Cell>
                  <Table.Cell>On-boarding with Settlement</Table.Cell>
                  <Table.Cell>June 12 2022</Table.Cell>
                  <Table.Cell>June 12 2027</Table.Cell>
                  <Table.Cell>
                    <StackView space={3} divider direction="row">
                      <Icon icon={Document}  accessibilityLabel="More Info"/>
                      <Icon icon={Clipboard} accessibilityLabel="Edit"/>
                      <Icon icon={Delete} accessibilityLabel="Delete"/>
                    </StackView>
                  </Table.Cell>
                </Table.Row>
               {partners && partners.length > 0 && partners.map((partner) => {
                return ( <Table.Row>
                  <Table.Cell>{partner.id}</Table.Cell>
                  <Table.Cell>Ivan Gabrovsky</Table.Cell>
                  <Table.Cell>Ivan</Table.Cell>
                  <Table.Cell>On-boarding with Settlement</Table.Cell>
                  <Table.Cell>June 12 2022</Table.Cell>
                  <Table.Cell>June 12 2027</Table.Cell>
                  <Table.Cell>
                    <StackView space={3} divider direction="row">
                      <Icon icon={Document}  accessibilityLabel="More Info"/>
                      <Icon icon={Clipboard} accessibilityLabel="Edit"/>
                      <Icon icon={Delete} accessibilityLabel="Delete"/>
                    </StackView>
                  </Table.Cell>
                </Table.Row>)
               })}
              </Table.Body>
            </Table>
        </Card>
      </Callout>
    </main>
  </>
)}

export default Home
