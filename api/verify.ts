import { VercelRequest, VercelResponse } from '@vercel/node';
import { decryptRequestData } from '../services/decrypt-request-data'

export default (request: VercelRequest, response: VercelResponse) => {
  try {
    if (!request.body) return response.status(400).send('')
    const data = decryptRequestData(request.body)
    response.status(200).json(data)
  } catch (ex) {
    response.status(400).send({
      error: ex.message
    })
  }
};