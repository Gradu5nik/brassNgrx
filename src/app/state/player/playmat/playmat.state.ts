import { IndustryState } from "./Industry/Industry.state"
import { NetworkStack } from "./Nerwork/networkStack"

export interface PlayerMatState{
    networkTiles:NetworkStack
    industries:{
        //Maybe make industry state generic?
        coal:IndustryState,
        iron:IndustryState,
        beer:IndustryState,
        boxes:IndustryState,
        cotton:IndustryState,
        pottery:IndustryState
    }
}