import { NFTStorage, File } from 'nft.storage'

const client = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY })

async function pin_test() {
  const metadata = await client.store({
    name: 'Pinpie',
    description: 'Pin is not delicious beef!',
    image: new File(
      [], 'pinpi.jpg', { type: 'image/jpg' }
    ),
  })
  console.log(metadata.url)
}

export { pin_test }
