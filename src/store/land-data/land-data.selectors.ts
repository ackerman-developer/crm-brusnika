import { RootState } from "..";
import { LandsDataId } from "../../types/landData";
import { NameSpace } from "../../utils/const";

export const getLands = (state: RootState): LandsDataId[] => {
  return state[NameSpace.Lands].lands;
}
