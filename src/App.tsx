import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import CatFact from "./Components/CatFact/catFact";
import Button from "./Components/Button/button";
import Footer from "./Components/Footer/footer";

function App(): JSX.Element {
  const [getCatFact, setGetCatFact] = useState<string>("");

  return (
    <div className="App">
      <Header />
      <CatFact getCatFact={getCatFact} />
      <Button setGetCatFact={setGetCatFact} catState={getCatFact} />
      <Footer />
    </div>
  );
}

export default App;
