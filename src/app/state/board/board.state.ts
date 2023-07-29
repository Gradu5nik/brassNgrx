import { DeckState } from "./Deck/deck.state"
import { MapState } from "./Map/map.state"
import { MarketState } from "./Market/market.state"

export interface BoardState{
    map:MapState
    deck:DeckState
    markets:{
        coal:MarketState
        iron:MarketState
    }
    
}