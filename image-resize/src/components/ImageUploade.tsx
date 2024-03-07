import {handelFileChange} from "../apis/handelFileChange.ts";

function ImageUpload() {
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
