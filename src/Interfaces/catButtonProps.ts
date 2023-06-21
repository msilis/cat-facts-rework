import { Dispatch, SetStateAction } from "react";

export interface CatButtonProps {
  setGetCatFact: Dispatch<SetStateAction<string>>;
  catState: string;
}
