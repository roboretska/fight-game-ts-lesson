import  Fight from './fight/Fight';
import {Fighter, IFighter} from './fight/Fighter';
import ImprovedFighter from './fight/ImprovedFighter';

export default class Main{
    constructor(){
        let fighter = new Fighter("Johnny");
        let improvedFighter = new ImprovedFighter("Tony");
        const app =  Fight(fighter, improvedFighter, 4, 10, 5, 7);
    }
}

const start = new Main();