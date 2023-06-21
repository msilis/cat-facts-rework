import style from "./catFact.module.css";

interface catProps {
  getCatFact: string;
}

export default function CatFact(props: catProps): JSX.Element {
  return (
    <div className={style.catFactContainer}>
      <div className={style.catFactText}>
        <p className={style.fadeText}>{props.getCatFact}</p>
      </div>
    </div>
  );
}
