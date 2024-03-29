import { getList, getThumbNails } from "../apis/s3.ts";
import ImageEach from "./ImageEach.tsx";
import ImageUpload from "./ImageUpload.tsx";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../context/MyContext";

function ImageContainer() {
  const { isThumbnail } = useContext(MyContext);

  const [image_src, setImageSrc] = useState<string[]>([]);

  useEffect(() => {
    if (isThumbnail) {
      getThumbNails().then((res) => setImageSrc(res));
    } else {
      getList().then((res) => setImageSrc(res));
    }
  }, [isThumbnail]);

  const image_components = image_src.map((s, idx) => {
    return <ImageEach src={s} key={idx} />;
  });

  return (
    <div className="m-5 pt-3 grid grid-cols-4 gap-4">
      <ImageUpload setImageSrc={setImageSrc} />
      {image_components}
    </div>
  );
}

export default ImageContainer;
