import algosdk from "algosdk"

const algod_mainnet = 'https://mainnet-api.algonode.cloud'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const algod_client = new algosdk.Algodv2('', algod_mainnet, '')

export default async function handler(req, res) {
  const acct = await algosdk.generateAccount()
  const acct_mnemonic = await algosdk.secretKeyToMnemonic(acct.sk)
  console.log(acct.addr, acct_mnemonic)
  res.status(200).json({ name: 'Juave Mente', algoaddr: acct.addr })
}
