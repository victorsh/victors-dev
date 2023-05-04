import nacl from 'tweetnacl'

// Utility function to convert between Uint8Array and hex string
function toHexString(byteArray) {
  return Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}

function fromHexString(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

export default async function handler(req, res) {
  console.log(req.body)
  if (Object.keys(req.body).includes("message")) {
    console.log(req.body['message'])
  }
  // Generate a key pair
  const keyPair = nacl.sign.keyPair();
  // Sign a message
  const message = 'This is a message to sign';
  const messageBytes = new TextEncoder().encode(message);
  const signature = nacl.sign.detached(messageBytes, keyPair.secretKey);

  // Verify a signature
  const isValidSignature = nacl.sign.detached.verify(messageBytes, signature, keyPair.publicKey);

  // console.log('Public key:', toHexString(keyPair.publicKey), keyPair.publicKey);
  // console.log('Private key:', toHexString(keyPair.secretKey), keyPair.secretKey);
  // console.log('Message:', message);
  // console.log('Signature:', toHexString(signature));
  // console.log(fromHexString(message))
  // console.log('Signature is valid:', isValidSignature);
  res.json({ public: toHexString(keyPair.publicKey), private: toHexString(keyPair.secretKey)})
}
