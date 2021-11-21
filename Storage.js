import { NFTStorage, File } from 'nft.storage'
require('dotenv').config();

const apiKey = process.env.API_KEY
const client = new NFTStorage({ token: apiKey })

const metadata = await client.store({
  name: 'Benin Bronze Head',
  description: 'The ancestral bronze head of the Benin Kingdom of West Africa.',
  image: new File(['./assets/benin.jpg'], 'benin.jpg', { type: 'image/jpg' })
})
console.log(metadata.url)
// ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json