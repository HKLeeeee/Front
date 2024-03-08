import axios from "axios";

type ImageUploadResponseDto = {
    "image": string
}
const host = import.meta.env.PROD? "http://ec2-3-35-26-126.ap-northeast-2.compute.amazonaws.com:3000" : "http://localhost:3000";

const getList = async (): Promise<string[]> => {
    try {
        const result = await axios.get(`${host}/s3/getList`)
        if (result.status === 200) {
            return result.data;
        } else {
            console.error("fail to get Image List")
            return []
        }
    } catch (e) {
        console.error(e)
        return []
    }
}

const getThumbNails = async (): Promise<string[]>  => {
    try {
        const result = await axios.get(`${host}/s3/getThumbnails`)
        console.log(result.status)
        if (result.status === 200) {
            return result.data;
        } else {
            console.error("fail to get Image List")
            return []
        }
    } catch (e) {
        console.error(e)
        return []
    }
}

const upload = async (file: File): Promise<ImageUploadResponseDto | null> => {
    console.log('upload')
    const formData = new FormData();
    formData.append("image", file)

    try {
        const response = await axios.post(
            `${host}/s3/upload`, formData, {
                headers: {
                    "Content-Type" : "multipart/form-data",
                }
            }
        )
        if (response.status === 200){
            return response.data
        } else {
            console.log("Fail to upload image")
            return null
        }
    } catch (e) {
        console.log(e);
        return null
    }
}

export {getList, getThumbNails, upload}