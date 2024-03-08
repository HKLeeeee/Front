const myS3 = require("./myS3");
const { ListObjectsCommand } = require("@aws-sdk/client-s3");
require("dotenv").config();

const s3Service = {
  getList: async () => {
    const params = {
      Bucket: process.env.BUCKET,
      Prefix: "images",
    };
    try {
      const command = new ListObjectsCommand(params);
      const result = await myS3.send(command);
      const data = result.Contents;
      if (!data) {
        console.log("No Images on S3");
        return [];
      }
      const urls = data.map((item) => {
        return `https://${this.bucketName}.s3.amazonaws.com/${item.Key}`;
      });
      return urls;
    } catch (e) {
      console.error("Error occurred reading from s3");
      return e;
    }
  },
  getThumbnail: async () => {
    const params = {
      Bucket: process.env.BUCKET,
      Prefix: "thumbnails",
    };
    try {
      const command = new ListObjectsCommand(params);
      const result = await myS3.send(command);
      const data = result.Contents;
      if (!data) {
        console.log("No Images on S3");
        return [];
      }
      const urls = data.map((item) => {
        return `https://${this.bucketName}.s3.amazonaws.com/${item.Key}`;
      });
      return urls;
    } catch (e) {
      console.error("Error occurred reading from s3");
      return e;
    }
  },
};

module.exports = s3Service;
