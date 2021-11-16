require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const inquirer = require('inquirer');
const { KMS } = require('aws-sdk');
const { utils } = require("ethers");

const DEFAULT_CLIENT_CONFIGURATION = {
  apiVersion: '2014-11-01',
  region: 'us-east-1',
};

const kms = new KMS(DEFAULT_CLIENT_CONFIGURATION);

const encrypt = async (stringToEncrypt) => {
  const data = await kms
    .encrypt({
      KeyId: process.env.KMS_KEY_ID,
      Plaintext: Buffer.from(stringToEncrypt),
    })
    .promise();
  return data.CiphertextBlob.toString('base64');
};

const decrypt = (encryptedString) => {
  let decryptedInfo = undefined;
  let kill = false;
  kms.decrypt(
    {
      CiphertextBlob: Buffer.from(encryptedString, 'base64'),
    },
    (error, data) => {
      if (error) {
        console.log('MKS:decryptSync error:');
        console.log(error);
        kill = true;
      } else {
        decryptedInfo = data;
      }
    }
  );

  while (decryptedInfo === undefined && !kill) {
    require('deasync').sleep(25);
  }
  if (!decryptedInfo) return encryptedString;
  return decryptedInfo.Plaintext.toString();
};

task("encrypt", "Encrypts credentials")
  .setAction(async () => {
    const answer = await inquirer.prompt([
      {
        type: 'password',
        message: 'Enter private key',
        name: 'privateKey',
        mask: '*',
      }
    ]);
    const encryptedPrivateKey = await encrypt(answer.privateKey)
    console.log('Encrypted credential, save this into your .env file:')
    console.log(`PRIVATE_KEY=${encryptedPrivateKey}`);
  });

module.exports = {
  networks: {
    hardhat: {
      accounts: (!!process.env.PRIVATE_KEY && process.env.PRIVATE_KEY != '') ? [{ privateKey: decrypt(process.env.PRIVATE_KEY), balance: utils.parseEther('1').toString() }] : []
    }
  },
  solidity: "0.7.3"
};
