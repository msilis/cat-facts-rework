import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import CatFact from "./Components/CatFact/catFact";
import Button from "./Components/Button/button";
import Footer from "./Components/Footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {
  const [getCatFact, setGetCatFact] = useState<string>("");

  return (
    <div className="App">
      <Header />
      <CatFact getCatFact={getCatFact} />
      <Button setGetCatFact={setGetCatFact} catState={getCatFact} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
