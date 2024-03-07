import ImageEach from "./ImageEach.tsx";
import ImageUpload from "./ImageUploade.tsx";
import {useEffect, useState} from "react";
import S3 from "../apis/myS3.ts";

const bucketName = import.meta.env.VITE_BUCKET;
function ImageContainer() {
    // const prev = [
    //     "https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG",
    //     "https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg",
    //     "https://img.freepik.com/free-photo/cute-puppy-sitting-in-grass-enjoying-nature-playful-beauty-generated-by-artificial-intelligence_188544-84973.jpg",
    //     "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    //     "https://img.freepik.com/free-photo/cute-puppy-sitting-in-grass-enjoying-nature-playful-beauty-generated-by-artificial-intelligence_188544-84973.jpg",
    // ]
    const [image_src, setImageSrc] = useState<string[]>([]);

    useEffect(() => {
        const params = {
            Bucket: bucketName,
            Prefix: 'images' // 폴더가 있다면 지정
        };

        S3.listObjectsV2(params)
            .promise()
            .then(result => {
                const data = result.Contents
                if (!data) return console.log("No Images on S3");
                const urls = data.map(item => {
                    console.log(item.Key)
                    return `https://${bucketName}.s3.amazonaws.com/${item.Key}`;
                });
                setImageSrc(urls)
            })
            .catch(() => {
                console.error("Error occurred reading from s3")
            })
    }, [])

    const image_components = image_src.map((s, idx) => {
        return <ImageEach src={s} key={idx}/>
    })

    return (
        <div className="m-5 pt-3 grid grid-cols-4 gap-4">
            <ImageUpload setImageSrc={setImageSrc} />
            {image_components}
        </div>
    )
}

export default ImageContainer
