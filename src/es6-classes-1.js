

class Person {
    constructor(name = "anonymous",age = 0) {  
        //this.name = name || 'test';
        this.name = name;
        this.age=age; //inside of class methods 'this' refers to the class instance
    } 
    getGreeting(){
        //return 'hi , i am ' + this.name +'!';
        return `hi , i am  ${this.name}`; //template string (use back ticks(``))
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;

    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
         description+=`the major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting()
    {
        let greeting=super.getGreeting();
        if(this.hasLocation()){
            greeting+=`i am visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}
//const me = new Person('neha jain',24);//instance of Person using new keyword
const me = new Student('neha jain',24,'IT');
console.log(me.getDescription());
//console.log(me.getGreeting());
//console.log(me);
//console.log(me.hasMajor());


//const other = new Person();
const other = new Student();
//console.log(other.getGreeting());
console.log(other.getDescription());
//console.log(other);
//console.log(other.hasMajor());

const me1 = new Traveller('neha jain',24,'supaul');
console.log(me1.getGreeting());

const other1 = new Traveller();
console.log(other1.getGreeting());