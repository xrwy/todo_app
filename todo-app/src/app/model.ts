import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];

    constructor(){
        this.name = 'Hacker';
        this.items = [
            {description:'Waking up Early in the Morning', action:true},
            {description:'Having Breakfast', action:false},
            {description:'Sitting at the Computer', action:true},
            {description:'Watching TV', action:false},
            {description:'Dinner', action:true},
            {description:'Go to Bed Early', action:false}
        ]
    }
}