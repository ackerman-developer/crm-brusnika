import { RootState } from "..";
import { LandeDataId } from "../../types/landData";
import { Namespace } from "../../utils/const";

export const getLands = (state: RootState): LandeDataId[] => {
  return state[Namespace.Lands].lands;
}
