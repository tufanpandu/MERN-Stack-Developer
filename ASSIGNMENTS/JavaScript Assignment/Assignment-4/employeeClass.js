class Employee{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    //Method
    getSalary(){
        return this.salary;
    }
}

//Instation of Employee Class
const employeeSalary = new Employee("Tufan Chandra Pandu" , "Full Stack Developer" , 80000);
//call the method
console.log(employeeSalary.getSalary() + "K Doller");