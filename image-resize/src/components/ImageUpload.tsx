import React from "react";
// import myS3 from "../apis/myS3.ts"
// import AWS from "aws-sdk";

type uploadProps = {
    setImageSrc : React.Dispatch<React.SetStateAction<string[]>>
}
function ImageUpload(props: uploadProps) {

    const handelFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target)
        props.setImageSrc(["hello"])
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0]
            const fileName = file.name;
            const fileKey = 'images/' + fileName; // S3에 저장될 경로

            const params = {
                Bucket: import.meta.env.VITE_BUCKET,
                Key: fileKey,
                Body: file,
                ACL: 'public-read',
                ContentType: file.type
            };

            myS3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
                if (err) {
                    console.error('S3 업로드 오류:', err);
                    return;
                }
                console.log('S3에 이미지 업로드 완료:', data.Location);
                props.setImageSrc(prev => [...prev, data.Location]);
            });
        }
    }


    return (
        <div className="h-full w-full flex flex-col gap-2 justify-center items-center">
            <div>
                <label className="inputLabel bold text-white" htmlFor="ex_file">Image Upload</label>
                <input type="file" id="ex_file" onChange={handelFileChange}/>
            </div>
        </div>
    )
}

export default ImageUpload;
