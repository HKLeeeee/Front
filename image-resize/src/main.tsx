import ReactDOM from "react-dom/client";
import ImageContainer from "./components/ImageContainer.tsx";
import "./styles/index.css";
import Header from "./components/Header.tsx";
import { MyContext } from "./context/MyContext.ts";
import { useState } from "react";

const App = () => {
  const [isThumbnail, setThumbnail] = useState(true);

  return (
    <div>
      <MyContext.Provider value={{ isThumbnail, setThumbnail }}>
        <Header />
        <ImageContainer />
      </MyContext.Provider>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
