import { SetCatProps } from "../Interfaces/setCatProps";
import { CatFactResponse } from "../Interfaces/catFactResponse";
import { showToast } from "./toastUtils";

export async function getCatFact(props: SetCatProps): Promise<void> {
  try {
    const response = await fetch("https://catfact.ninja/fact?max_length=64");
    const fact: CatFactResponse = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch fact.");
    }

    props.setGetCatFact(fact.fact);
  } catch (err) {
    showToast("There was an error getting your fact.");
    console.log(err);
  }
}
