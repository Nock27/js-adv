function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    }
    
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email)
            this.subject = subject;
        }
    }

    return {
    Person,
    Teacher
    }
   }
class Person{
    constructor(name,email){

    }
}

class Teacher{
    constructor(name,email,subject){

    }
}