export class cardData {
    public id: number;
    public title! : string;
    public timeframes!:timeframes;
    constructor(id:number,title:string){
        this.id = id;
        this.title=title;
    }
}

export class timeframes{
    public daily!: time;
    public weekly!: time;
    public monthly!: time;
    constructor(){      
    }
    }

export class time{
    public current:number;
    public previous:number;
    constructor(current:number,previous:number){
        this.current = current;
        this.previous= previous;
    }
}

// export class weekly{
//     public current:number;
//     public previous:number;
//     constructor(current:number,previous:number){
//         this.current = current;
//         this.previous= previous;
//     }
// }
// export class monthly{
//     public current:number;
//     public previous:number;
//     constructor(current:number,previous:number){
//         this.current = current;
//         this.previous= previous;
//     }
// }