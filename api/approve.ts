import { VercelRequest, VercelResponse } from '@vercel/node';
import Web3 from 'web3'
import { getWeb3Provider } from '../lib/web3-provider';
import { decryptRequestData } from '../services/decrypt-request-data';

/**
 * request.body
 *  + from
 *  + sellToken
 *  + spender
 *  + amount
 */
export default async (request: VercelRequest, response: VercelResponse) => {
  const provider = getWeb3Provider()
  try {
    const { from, contractAddress, amountInWei, spender } = decryptRequestData(request.body)
    const abi = JSON.parse(
      `[{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}, {"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]`
    );
    const web3 = new Web3(provider)
    provider.start()
    var tokenContract = new web3.eth.Contract(abi, contractAddress);
    await tokenContract.methods.approve(spender, amountInWei).send({
      from
    });
    response.json({
      status: true,
    })
  } catch (ex) {
    return response.status(400).json({
      status: false,
      error: ex.message
    })
  } finally {
    provider.stop()
  }
};