import { ImageLoader } from "@teokamali/react-image-loader";
function App() {
  return (
    <div>
      <ImageLoader
        width={200}
        height={200}
        alt=""
        src="https://fastly.picsum.photos/id/931/536/354.jpg?"
        placeholder={"blur"}
        loadingPlaceholder="https://placehold.co/600x400"
        onError={(err, setImage) => {
          setImage("https://placehold.co/600");
        }}
        apiConfig={{}}
      />
    </div>
  );
}

export default App;
