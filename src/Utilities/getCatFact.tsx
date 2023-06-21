import { SetCatProps } from "../Interfaces/setCatProps";

export async function getCatFact(props: SetCatProps): Promise<void> {
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
