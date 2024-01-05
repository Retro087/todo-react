import { useContext } from "react";
import { StoreContext } from "../store/context";

export default function useServices() {
  return useContext(StoreContext);
}
