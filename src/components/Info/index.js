// import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Callout, Card, Typography, Spacer
} from '@telus-uds/ds-allium'
import { NextSeo } from 'next-seo'
import seoConfig from './seo.config'
// import axios from 'axios'

// const PARTNER_API_PATH = 'http://localhost:3000/api/partner'

const Info = () => {
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
            <Typography variant={{ size: 'h1' }}>Partner Id: {id}</Typography>
            <Spacer space={2} />
            {/* <Spinner label="Fetching partners" show={loading}>
            </Spinner> */}
        </Card>
      </Callout>
    </main>
  </>
  )
}

export default Info
