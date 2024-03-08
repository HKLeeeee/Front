import axios from "axios";

type ImageUploadResponseDto = {
    "image": string
}
const host = import.meta.env.PROD? "remoteserver" : "http://localhost:3000";
console.log(host)
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
    console.log('getThumbNails')
    return ['dummy']
}

const upload = async (file: File): Promise<ImageUploadResponseDto> => {
    console.log('upload')
    return {"image": file.name}
}

export {getList, getThumbNails, upload}