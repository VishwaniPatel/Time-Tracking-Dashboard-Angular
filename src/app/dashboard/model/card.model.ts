export class cardData {
    public id: number;
    public title! : string;
    public timeframes?:timeframes;
    constructor(id:number,title:string){
        this.id = id;
        this.title=title;
    }
}

export class timeframes{
    public daily?: daily;
    public weekly?: weekly;
    public monthly?: monthly;
    constructor(){      
    }
    }

export class daily{
    public current:number;
    public previous:number;
    constructor(current:number,previous:number){
        this.current = current;
        this.previous= previous;
    }
}

export class weekly{
    public current:number;
    public previous:number;
    constructor(current:number,previous:number){
        this.current = current;
        this.previous= previous;
    }
}
export class monthly{
    public current:number;
    public previous:number;
    constructor(current:number,previous:number){
        this.current = current;
        this.previous= previous;
    }
}