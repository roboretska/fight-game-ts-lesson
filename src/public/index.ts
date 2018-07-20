import  Fight from './fight/Fight';
import {Fighter, IFighter} from './fight/Fighter';
import ImprovedFighter from './fight/ImprovedFighter';

export default class Main{
    constructor(){
        const setParametersButton : HTMLElement= document.getElementById("fighter-submit");
        setParametersButton.onclick =function () {
            const fighterName = (<HTMLInputElement>document.getElementById("fighter-name")).value;
            const fighterHealth = (<HTMLInputElement>document.getElementById("fighter-health")).value;
            const fighterPower = (<HTMLInputElement>document.getElementById("fighter-power")).value;

            const impFighterName = (<HTMLInputElement>document.getElementById("imp-fighter-name")).value;
            const impFighterHealth =  (<HTMLInputElement>document.getElementById("imp-fighter-health")).value;
            const impFighterPower = (<HTMLInputElement>document.getElementById("imp-fighter-power")).value;

            let fighter = new Fighter(<string>fighterName, <number>parseInt(fighterHealth), <number>parseInt(fighterPower));
            let improvedFighter = new ImprovedFighter(<string>impFighterName, <number>parseInt(impFighterHealth), <number>parseInt(impFighterPower));
            const app =  Fight(fighter, improvedFighter, 4, 10, 5, 7);
        };


    }
}

const start = new Main();