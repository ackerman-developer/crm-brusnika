import { RootState } from "..";
import { LandsDataId } from "../../types/landData";
import { NameSpace } from "../../utils/const";

export const getLands = (state: RootState): LandsDataId[] => {
  const lands = state[NameSpace.Lands].lands;
  console.log('Lands from selector:', lands);
  return lands;
};
