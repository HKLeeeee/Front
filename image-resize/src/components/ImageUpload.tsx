import React from "react";
import { upload } from "../apis/s3";

type uploadProps = {
  setImageSrc: React.Dispatch<React.SetStateAction<string[]>>;
};
function ImageUpload({ setImageSrc }: uploadProps) {
  const handelFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target);
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const result = await upload(file);
      setImageSrc((prev) => [...prev, result.image]);
    }
  };

  return (
    <div className="h-full w-full flex flex-col gap-2 justify-center items-center">
      <div>
        <label className="inputLabel bold text-white" htmlFor="ex_file">
          Image Upload
        </label>
        <input type="file" id="ex_file" onChange={handelFileChange} />
      </div>
    </div>
  );
}

export default ImageUpload;
