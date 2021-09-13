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


var emp = function() {

    var employee = {
        'nam': 'John',
        age: 40,
        salary: 6000,

        getAge: function() { return this.age },
        getSalary: function() { return this.salary },
        getName: function() { return this.nam },
        setAge: function(newAge) { age = newAge; },
        setSalary: function(newSalary) { salary = newSalary },
        setName: function(newName) { nam = newName },
        increaseSalary: function(percentage) { return this.getSalary() + this.getSalary() * percentage },
        incrementAge: function() { return this.getAge() + 10 }
    }

    function setName(name) {
        return employee.setName(name);

    }

    function setSalary() {
        return employee.setSalary();

    }

    function setAge(age) {
        return employee.setAge(age);

    }

    function increaseSalary(p) {
        return employee.increaseSalary(p);

    }

    function incrementAge() {
        return employee.incrementAge();

    }
    return {
        setName: function(n) { return setName(n) },
        setSalary: function(s) { return setSalary(s) },
        setAge: function(a) { return setAge(a) },
        increaseSalary: function(n) { return increaseSalary(n) },
        incrementAge: function() { return incrementAge() },
    }

}();

// console.log(emp.increaseSalary(2));
// console.log(emp.incrementAge());