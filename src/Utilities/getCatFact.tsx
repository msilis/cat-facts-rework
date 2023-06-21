import { Dispatch, SetStateAction } from "react";

interface SetCatProps {
  setGetCatFact: Dispatch<SetStateAction<string>>;
}

export async function getCatFact(props: SetCatProps): Promise<void> {
  console.log("fetch called");
  try {
    const response = await fetch("https://catfact.ninja/fact?max_length=64");
    const fact = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch fact.");
    }

    props.setGetCatFact(fact.fact);
    return fact;
  } catch (err) {
    console.log(err);
  }
}
