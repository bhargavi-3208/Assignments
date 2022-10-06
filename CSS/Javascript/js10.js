//create class
class Product{
    prodid;
    name;
    MRP;

    //constructor
    constructor(pid,pname,pmrp){
        //to initialise object
        this.empno=pid;
        this.name=pname;
        this.MRP=pmrp;

       
    }
}

//create object
let prod1 = new Product(100,'Wonderchef Nutripot',5000);
let prod2 = new Product(200,'Symphony Air Cooler',7000);
let prod3 = new Product(300,'Google smart speaker',4000);
let prod4 = new Product(400,'UBON wireless speaker',3000);
let prod5 = new Product(500,'Mi Band 3',2000);
//calculating prices for products
p1=4500;
p2=6300;
p3=3600;
p4=2700;
p5=1800;

console.log(prod1,'price:',p1);
console.log(prod2,'price:',p2);
console.log(prod3,'price:',p3);
console.log(prod4,'price:',p4);
console.log(prod5,'price:',p5);