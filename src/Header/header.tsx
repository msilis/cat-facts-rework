import style from "./header.module.css";
import catFactLogo from "../assets/Cat.png";

export default function Header(): JSX.Element {
  return (
    <header className={style.headerContainer}>
      <img src={catFactLogo} id={style.catFactLogo} alt="cat fact logo" />
    </header>
  );
}
