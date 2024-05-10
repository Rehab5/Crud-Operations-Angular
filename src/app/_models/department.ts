export class Department {
    constructor(public id:number, public name:string){}

    set Id(id:number){
        this.id=id;
    }
    get Id(){
        return this.id;
    }

    set Name(name:string){
        this.name=name;
    }
    get Name(){
        return this.name;
    }

}