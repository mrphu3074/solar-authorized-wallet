# Solar Authorized Wallet

## Setup Instructions

------
#### Step 1: Export wallet Private Key with Metamask
...

#### Step 2: Generate RSA Private Key and Public key
- Go to https://cryptotools.net/rsagen 
- Select Key Length: 2048
- Click Generate Key Pair

#### Step 3: Deploy your service with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmrphu3074%2Fsolar-authorized-wallet&env=WALLET_PRIVATE_KEY,SIGN_PRIVATE_KEY,SIGN_PUBLIC_KEY)

Key in Environment Variables:
- WALLET_PRIVATE_KEY: private key that exported from step 1
- SIGN_PRIVATE_KEY: private key generated from step 2
- SIGN_PUBLIC_KEY: private key generated from step 2

