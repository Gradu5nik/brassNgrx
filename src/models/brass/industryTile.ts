import { IndustryType } from "./industryType.enum";
import { PlayerColour } from "./playerColour.enum";

export interface IndustryTile{
    id:number
    colour:PlayerColour,
    industry:IndustryType,
    level:number,
    cost:number,
    cost_coal:number,
    cost_iron:number,
    income_gain:number,
    point_gain:number,
    network_points:number,
    canal_onlu:boolean,
    
    sell_cost:number|null
    coal_provided:number|null,
    iron_provided:number|null

}