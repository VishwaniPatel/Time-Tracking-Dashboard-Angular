export class profileData{
    public id: number;
    public userName! : string;
    public profileImage: any;
    public profilePath: any;
    public imageName: any;
    constructor(id:number,userName:string,profileImage: any,profilePath: any, imageName: any){
        this.id = id;
        this.userName = userName;
        this.profileImage=profileImage;
       this.profilePath = profilePath;
       this.imageName = imageName;

    }
}