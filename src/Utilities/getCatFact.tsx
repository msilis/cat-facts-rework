import { SetCatProps } from "../Interfaces/setCatProps";
import { CatFactResponse } from "../Interfaces/catFactResponse";
import { toast } from "react-toastify";

export async function getCatFact(props: SetCatProps): Promise<void> {
  try {
    const response = await fetch("https://catfact.ninja/fact?max_length=64");
    const fact: CatFactResponse = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch fact.");
    }

    props.setGetCatFact(fact.fact);
  } catch (err) {
    toast.error("There was an error getting your fact.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(err);
  }
}
