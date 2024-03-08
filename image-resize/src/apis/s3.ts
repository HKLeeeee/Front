type ImageUploadResponseDto = {
    "image": string
}

const getList = async (): Promise<string[]> => {
    console.log('getList')
    return ['dummy']
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