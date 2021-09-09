//var add = (function() {
//    var count = {
//        counter: 0,
//        add: function() {
//            return this.counter += 1;
//        },
//        reset: function() { return this.counter = 0; },
//    }
//    return count;

//})()
//console.log(add.add());
//console.log(add.add());
//console.log(add.reset());
//var add = function(inc) {
//    var counter = 0;

//    {
//        return function makeadder() {
//            return counter += inc;
//        };

//    }

//};
//var add5 = add(5);

var company = (function() {
    var employee = {
        name: 'Nhatty',
        age: '26',
        salary: 130000,
        setName: function(newName) { this.name = newName; },
        setAge: function(newAge) { this.age = newAge },
        getName: function() { return this.name },
        getAge: function() { return this.age },
        getSalary: function() { return this.salary },

        increaseSalary: function(percentage) { return this.salary = this.getSalary() + this.getSalary() * (percentage / 100) },
        setSalary: function(newSalary) { this.salary = newSalary },
        incrementAge: function(percentage) { return this.salary += 1 }
    }


    return {
        setName: employee.setName,
        setAge: employee.setAge,
        setSalary: employee.setSalary,
        increaseSalary: employee.increaseSalary,
        incrementAge: employee.incrementAge,
        getSalary: employee.getSalary,

    }


}())
var hr = company;
company.setAge(22);
company.setSalary(220);
console.log(company.getSalary());
console.log(company.increaseSalary(20));