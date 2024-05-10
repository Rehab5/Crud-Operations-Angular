export class Student {
    constructor(public id:number, public name:string, public age:number){}

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

    set Age(age:number){
        this.age=age;
    }
    get Age(){
        return this.age;
    }
}

// let s:Student = new Student(2,"Rehab",25);
// s.Id=5;
// s.Name="Ahmed";
// s.Age=23;

// console.log(s.Name);