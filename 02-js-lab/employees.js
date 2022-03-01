function Employee(name, experienceInYears, qualifications) {
    this.name = name;
    this.experienceInYears = experienceInYears;
    this.qualifications = qualifications;
    
}

Employee.prototype.toString = function() {
    return "I am " + this.name + " and have " + this.experienceInYears.toString() + " of experience in " + this.qualifications.join(', ');
}

let employee1 = new Employee('John', 10, ["HTML", "CSS", "JS"]);
let employee2 = new Employee('Bob', 10, ["C#", "CSS", "TS"]);

console.log(employee1.toString());
