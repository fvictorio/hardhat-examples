# AWS encrypted credentials

This repository shows how you have encrypted environment credentials. Code on `hardhat.config.js` can be much cleaner, but its for demonstration purpose. 

Main idea here is to avoid having unencrypted private key on environment files: Avoid leaking credentials on github, npm, or while showing something on a video call.

## Steps
1. Copy example environment file:
```bash
cp .env.example . env`
```
2. Set up your `KMS_KEY_ID` on your `.env`
```bash
nano .env
```
3. Run task to encrypt your private key
```bash
npx hardhat encrypt
```
4. Copy output of encrypted private key into the `.env` file

