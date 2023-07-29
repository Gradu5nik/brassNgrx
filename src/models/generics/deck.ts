import { catchError } from "rxjs";

export class Deck<T> {
    
    deck:T[]
    

    constructor(cards:T[]){
        this.deck=cards
    }

    shufle(){
        for (let i = this.deck.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; 
          }
    }

    drawOne():T{
        if(this.empty) throw Error("deck is empty")
        const card = this.deck.pop() as T
        return card
    }
    draw(n:number):T[]{
        let cards:T[] = []
        for (let index = 0; index < n; index++) {
            try{
                cards.push(this.drawOne())
            }
            catch {
                console.log("returning only "+cards.length+ " cards, the deck is empty")
                return cards
            }
        }
        return cards
    }
    get count():number{
        return this.deck.length
    }
    get empty():boolean{
        return this.count==0?true:false
    }

}