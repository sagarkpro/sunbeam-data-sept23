var pi = 3.14;
var sayHi = function (){ console.log("Hi")};

class Person {
    constructor(no, name, address)
    {
        this.No = no;
        this.Name = name;
        this.Address = address;
    }

    Print(){
        console.log(`No = ${this.No},Name = ${this.Name}, Address = ${this.Address}`);
    }
}

module.exports = {
                    pi,
                    sayHi,
                    Person
                  }
