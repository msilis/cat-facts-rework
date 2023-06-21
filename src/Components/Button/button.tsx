import style from "./button.module.css";
import { getCatFact } from "../../Utilities/getCatFact";
import { CatButtonProps } from "../../Interfaces/catButtonProps";

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
