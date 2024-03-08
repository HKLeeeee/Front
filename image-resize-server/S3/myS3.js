const { S3Client } = require("@aws-sdk/client-s3");
require("dotenv").config();

const myS3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
  },
  region: "ap-northeast-2",
});

module.exports = myS3;
