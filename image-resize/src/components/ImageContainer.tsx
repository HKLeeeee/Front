import ImageEach from "./ImageEach.tsx";
import ImageUpload from "./ImageUploade.tsx";

function ImageContainer() {
    const image_src = [
        "https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG",
        "https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg",
        "https://img.freepik.com/free-photo/cute-puppy-sitting-in-grass-enjoying-nature-playful-beauty-generated-by-artificial-intelligence_188544-84973.jpg",
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        "https://img.freepik.com/free-photo/cute-puppy-sitting-in-grass-enjoying-nature-playful-beauty-generated-by-artificial-intelligence_188544-84973.jpg",
    ]

    const image_components = image_src.map(s => {
        return <ImageEach src={s}/>
    })
    return (
        <div className="m-5 pt-3 grid grid-cols-4 gap-4">
            <ImageUpload />
            {image_components}
        </div>
    )
}

export default ImageContainer
