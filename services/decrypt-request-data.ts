import NodeRSA from 'node-rsa'

export function decryptRequestData(raw: string) {
  try {
    // @ts-ignore
    const key = new NodeRSA(process.env.SIGN_PRIVATE_KEY)
    const decryptedData = key.decrypt(Buffer.from(raw, 'base64'), 'utf-8')
    return JSON.parse(decryptedData)
  } catch (ex) {
    throw new Error("Request Invalid")
  }
}