import React from "react";
import AWS from "aws-sdk";

const handelFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0]
        AWS.config.update({
            accessKeyId: import.meta.env.VITE_ACCESSKEY,
            secretAccessKey: import.meta.env.VITE_SECRETKEY,
            region: 'ap-northeast-2'
        });

        const s3 = new AWS.S3();
        const fileName = file.name;
        const fileKey = 'images/' + fileName; // S3에 저장될 경로

        const params = {
            Bucket: import.meta.env.VITE_BUCKET,
            Key: fileKey,
            Body: file,
            ACL: 'public-read',
            ContentType: file.type
        };

        s3.upload(params, function (err: Error, data: any) {
            if (err) {
                console.error('S3 업로드 오류:', err);
                return;
            }
            console.log('S3에 이미지 업로드 완료:', data.Location);
        });
    }
}

export {handelFileChange};
