/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function convertToEnv(object) {
  let envFile = '';
  for (const key of Object.keys(object)) {
    envFile += `${key}=${object[key]}\n`;
  }
  return envFile;
}

function setDefaultEnv(object) {
  return {
    ...object,
    APOLLO_HTTP_LINK: process.env.APOLLO_HTTP_LINK,
  };
}

(() => {
  try {
    const envFilePath = path.resolve(__dirname, '../.env.production');
    const envExampleFilePath = path.resolve(__dirname, '../env.example');
    if (fs.existsSync(envFilePath)) {
      fs.unlinkSync(envFilePath);
    }

    const envExampleConfig = dotenv.parse(fs.readFileSync(envExampleFilePath));
    const envConfig = setDefaultEnv(envExampleConfig);

    fs.writeFileSync(envFilePath, convertToEnv(envConfig));
  } catch (err) {
    console.error(err);
  }
})();
