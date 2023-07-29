import { Deck } from "./deck"

describe('Testing Deck generic',()=>{


    it('can initialize a shuffled deck',()=>{
        const numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
        let deck = new Deck<number>(numbers)

        expect(deck).toBeTruthy()
        expect(deck.count).toBe(10)
        expect(deck.empty).toBeFalse()
        if(numbers==deck.deck){
            deck.shufle()
        }
        expect(deck.deck).not.toEqual(numbers)
    })
    it('can initialize an empty deck',()=>{
        
        const numbers:number[] = []
        let deck = new Deck<number>(numbers)

        expect(deck).toBeTruthy()
        expect(deck.count).toBe(0)
        expect(deck.empty).toBeTrue()

    })
    it('can take a card',()=>{
        const numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
        let deck = new Deck<number>(numbers)
        let card :number= deck.drawOne()

        expect(deck).toBeTruthy()
        expect(deck.count).toBe(9)
        expect(deck.empty).toBeFalse()
        expect(card in deck.deck).toBeFalse()

    })
    it('can take a lot of cards',()=>{
        const numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
        let deck = new Deck<number>(numbers)
        let cards :number[]= deck.draw(2)

        expect(deck).toBeTruthy()
        expect(deck.count).toBe(8)
        expect(deck.empty).toBeFalse()
        expect(cards[0] in deck.deck).toBeFalse()
        expect(cards[1] in deck.deck).toBeFalse()
        expect(cards.length).toBe(2)
    })
})