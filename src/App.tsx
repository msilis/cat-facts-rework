import { useState } from "react";
import "./App.css";
import Header from "./Header/header";
import CatFact from "./CatFact/catFact";
import Button from "./Button/button";
import Footer from "./Footer/footer";

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
