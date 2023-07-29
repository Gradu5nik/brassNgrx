import { BoardState } from "./board/board.state"
import { PlayerState } from "./player/player.state"

export interface GameState{
    players:PlayerState[]
    board:BoardState
    
}