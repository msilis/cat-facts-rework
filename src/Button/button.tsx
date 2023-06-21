import { Dispatch, SetStateAction } from "react";
import style from "./button.module.css";
import { getCatFact } from "../Utilities/getCatFact";

interface CatButtonProps {
  setGetCatFact: Dispatch<SetStateAction<string>>;
  catState: string;
}

export default function Button(props: CatButtonProps): JSX.Element {
  const handleButtonClick = () => {
    getCatFact(props);
  };
  const buttonText: string = props.catState
    ? "I need more facts!"
    : "Get me some cat facts!";

  return (
    <div className={style.buttonContainer} onClick={handleButtonClick}>
      <span className={style.button}>{buttonText}</span>
    </div>
  );
}
