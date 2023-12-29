import { RootState } from "..";
import { LandsDataId } from "../../types/landData";
import { NameSpace } from "../../utils/const";

export const getLands = (state: Pick<RootState, NameSpace.Lands>): LandsDataId[] => state[NameSpace.Lands].lands;
