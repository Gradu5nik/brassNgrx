import { PlayerColour } from "src/models/brass/playerColour.enum"
import { VictoryPointCounter } from "./VictoryPoints/VictoryPointCounter"
import { PlayerMatState } from "./playmat/playmat.state"
import { WalletState } from "./wallet/Wallet.state"

export interface PlayerState{

    color:PlayerColour
    wallet:WalletState
    playMat:PlayerMatState
    Vp:VictoryPointCounter

}