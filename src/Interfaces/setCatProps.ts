import { Dispatch, SetStateAction } from "react";

export interface SetCatProps {
  setGetCatFact: Dispatch<SetStateAction<string>>;
}
