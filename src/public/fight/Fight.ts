export default async function fight(fighter:any, improvedFighter:any, ...points:number[]) {


    console.log(fighter);
    console.log(improvedFighter);
    let container = document.getElementById("buttle-log");
    container.innerHTML='';
    let fighterInfo = document.createElement('p');
    let impFighterInfo = document.createElement('p');
    impFighterInfo.setAttribute('id', 'last-info');

    let result = document.createElement('p');


    container.appendChild(fighterInfo);
    container.appendChild(impFighterInfo);

    fighterInfo.innerHTML = `Fighter stats. Name: ${fighter.name}, health: ${fighter.health}, power: ${fighter.power}.`;
    impFighterInfo.innerHTML = `Improved fighter stats. Name: ${improvedFighter.name}, health: ${improvedFighter.health}, power: ${improvedFighter.power}.`;


    for (let point of points) {
        while (fighter.health > 0 && improvedFighter.health > 0) {
            fighter.hit(improvedFighter, point);
            if (improvedFighter.health <= 0) break;
            improvedFighter.doubleHit(fighter, point);
        }
    }
    if (fighter.health > 0) {
        await fighter.knockout(improvedFighter);
        console.log(fighter.name + " has won");
        container.appendChild(result);
        result.innerHTML =`${fighter.name} has won`;

    } else {
        await improvedFighter.knockout(fighter);
        console.log(improvedFighter.name + " has won");
        container.appendChild(result);
        result.innerHTML =`${improvedFighter.name} has won`;
    }

}