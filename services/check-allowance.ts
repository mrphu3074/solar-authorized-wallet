import Web3 from 'web3'

export type CheckAllowanceParams = {
  from: string;
  token: string;
  amount: string;
}

export function checkAllowance(params: CheckAllowanceParams) {
  const amountInWei = Web3.utils.toWei(params.amount);

}