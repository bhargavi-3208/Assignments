class Product{
    constructor(private pno:number,private productname:string,private MRP:number,private discount:number){}

    getProductData():void{
        console.log("Pno:",this.pno);
        console.log("Pname:",this.productname);
        console.log("MRP:",this.MRP);
    }
    getDiscountedPrice():void(){
        
       console.log(x1 = (this.price)*(10/100));
       console.log(x2 = (this.price)*(10/100));
       console.log(x3 = (this.price)*(10/100));

    }
}

let productOne=new Product(100,"TV",300000,10);
let productTwo=new Product(100,"Laptop",75000,10);
let productThree=new Product(100,"Mobile Phone",50000,10);


productOne.getProductData();
productTwo.getProductData();
productThree.getProductData();

