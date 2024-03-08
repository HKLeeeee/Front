type image_each_props = {
  src: string;
};
function ImageEach(props: image_each_props) {
  return (
    <div className="h-60 w-full flex justify-center items-center">
      <img src={props.src} className="rounded h-full imageContainer"></img>
    </div>
  );
}

export default ImageEach;
