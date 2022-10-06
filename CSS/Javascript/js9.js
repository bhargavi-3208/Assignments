//create class
class Emp{
    empno;
    name;
    basic;

    //constructor
    constructor(eno,ename,ebasic){
        //to initialise object
        this.empno=eno;
        this.name=ename;
        this.basic=ebasic;

       
    }
}

//create object
let emp1 = new Emp(100,'ravi',15000);
let emp2 = new Emp(200,'ram',17000);
let emp3 = new Emp(300,'ramya',14000);
let emp4 = new Emp(400,'kiran',13000);
let emp5 = new Emp(500,'suresh',12000);
//calculating salaries (salary = basic + 50%(basic) + 10%(basic))
s1=15000 + 7500 + 1500;
s2=17000 + 8500 + 1700;
s3=14000 + 7000 + 1400;
s4=13000 + 6500 + 1300;
s5=12000 + 6000 + 1200;

console.log(emp1,'salary:',s1);
console.log(emp2,'salary:',s2);
console.log(emp3,'salary:',s3);
console.log(emp4,'salary:',s4);
console.log(emp5,'salary:',s5);