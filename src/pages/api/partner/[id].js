import path from 'path'
import fs from 'fs'
// import { promises as fs } from 'fs'

export const filePathBuilder = () => path.join(process.cwd(), 'json', 'partnerDetails.json')

export const extractData = (filePath) => {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
  return data
}

export default async function handler (req, res) {
  const { id } = req.query
  console.log('id: ', id)
  const filePath = filePathBuilder()
  const data = extractData(filePath)
  setTimeout(() => {
    res.status(200).json(data.find((p) => (p.id == id)))
  }, 1000)
}
