import { ethers } from 'ethers'

const web3_connect_wallet = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  console.log(provider)
  await provider.send("eth_requestAccounts", [])
  const signer = await provider.getSigner()
  console.log(await signer.getAddress())
}

export { web3_connect_wallet }
