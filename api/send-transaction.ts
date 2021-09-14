import { VercelRequest, VercelResponse } from '@vercel/node';
import { getWeb3Provider } from '../lib/web3-provider';
import { decryptRequestData } from '../services/decrypt-request-data';
const { Web3Wrapper } = require("@0x/web3-wrapper");

export default async (request: VercelRequest, response: VercelResponse) => {
  const provider = getWeb3Provider()
  try {
    if (!request.body) {
      throw new Error("Request Invalid")
    }
    const data = decryptRequestData(request.body)
    const web3Wrapper = new Web3Wrapper(provider);
    provider.start()
    const tx = await web3Wrapper.sendTransactionAsync(data);
    response.json({
      status: true,
      data: tx
    })
  } catch (ex) {
    response.status(400).json({
      status: false,
      error: ex.message
    })
  } finally {
    provider.stop()
  }
};