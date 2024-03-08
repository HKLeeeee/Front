import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: import.meta.env.VITE_ACCESSKEY,
    secretAccessKey: import.meta.env.VITE_SECRETKEY,
    region: 'ap-northeast-2'
});

const myS3 = new AWS.S3();

export default myS3;
