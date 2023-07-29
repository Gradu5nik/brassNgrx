import { VictoryPointCounter } from "./VictoryPoints/VictoryPointCounter"
import { PlayerMatState } from "./playmat/playmat.state"
import { WalletState } from "./wallet/Wallet.state"

export interface PlayerState{

    color:"Red"|"Yellow"|"Blue"|"Purple"
    wallet:WalletState
    playMat:PlayerMatState
    Vp:VictoryPointCounter

}