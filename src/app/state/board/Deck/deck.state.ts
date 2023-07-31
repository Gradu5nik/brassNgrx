import { brassCard } from "src/models/brass/brassCard";
import { Deck } from "src/models/generics/deck";

export interface DeckState {
    deck: Deck<brassCard>[] // TODO write a game library with Deck interface
}