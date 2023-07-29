import { IndustryType } from "src/models/brass/industryType.enum"

export interface IndustryState{
    //make an enum for industry type
    type:IndustryType,
    tiles:IndustryTile[]
}