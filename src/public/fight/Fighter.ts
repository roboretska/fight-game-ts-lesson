export interface IFighter {
    name: string;
    health: number;
    power: number;
    setDamage(damage:number) : void;
    hit(enemy: any, points:number) : void;
    knockout(enemy:any):Promise<string>;
}

export  class Fighter implements IFighter{
    name : string;
    health : number;
    power: number;

    constructor(name : string, health: number=200, power:number=10){
        this.__SetParams(name, health, power);
    }

    setDamage(damage:number):any{
        this.health-=damage;
        if(this.health<0){
            this.health=0
        }
        let conteiner = document.getElementById("buttle-log");
        let log = document.createElement('p');
        conteiner.appendChild(log);
        log.innerHTML = `${this.name}: left ${this.health} HP`;
        console.log(`${this.name}: left ${this.health} HP`);
    };
    hit(enemy: any, points:number) :any{
        enemy.setDamage(this.power*points);
    };
    knockout(enemy:any):Promise<string>{
        return new Promise<string>((resolve)=>{
            let container = document.getElementById("buttle-log");
            let log = document.createElement('p');
            log.setAttribute('id', 'results-block');
            container.appendChild(log);
            log.innerHTML = `${enemy.name} has been knockout by ${this.name}`;
            console.log(`${enemy.name} has been knockout by ${this.name}`)
            setTimeout(()=>{
                let timeover = document.createElement('p');
                container.appendChild(timeover);
                timeover.innerHTML='Time is over';
                console.log("Time is over");
                resolve();
            }, 500)
        });
    };
    private __SetParams(name : string, health: number, power:number){
        this.name = name;
        this.health = health;
        this.power = power;
    }
}