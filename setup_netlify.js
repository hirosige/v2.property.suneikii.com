require('dotenv').config();
const fs = require('fs');

const dirPath = `${process.env.HOME}/.netlify`;
const filePath = `${dirPath}/config`;

function writeFile(path, data) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      throw err;
    }
  });
}

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const credentials = {
  access_token: process.env.NETLIFY_ACCESS_TOKEN,
  github_user: process.env.GITHUB_USER,
  github_token: process.env.GITHUB_TOKEN,
};

writeFile(filePath, JSON.stringify(credentials));
