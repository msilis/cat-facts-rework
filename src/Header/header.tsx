import style from "./header.module.css";
import catFactLogo from "../assets/Cat.svg";

export default function Header(): JSX.Element {
  return (
    <header className={style.headerContainer}>
      <img
        src={catFactLogo}
        className={style.catFactLogo}
        alt="cat fact logo"
      />
    </header>
  );
}
