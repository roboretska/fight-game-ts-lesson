import {Fighter, IFighter} from './Fighter';

export default class ImprovedFighter extends Fighter implements IFighter{
    constructor(name : string, health: number, power:number){
        super(name, health, power);
    }
    doubleHit(enemy: any, point: number){
        super.hit(enemy, 2* point);
    }
}