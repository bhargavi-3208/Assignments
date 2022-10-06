//get buttons
let bigbtn=document.querySelector("#big");
let largebtn=document.querySelector("#large");
let evenbtn=document.querySelector("#even");
//add event listener to button
bigbtn.addEventListener('click',function(){
    let inp1=document.querySelector("#n1");
    let num1=inp1.value;

    let inp2=document.querySelector("#n2");
    let num2=inp2.value;

    let ans=Math.max(num1, num2);

    let result=document.querySelector(".result");
    result.textContent=ans;
})

largebtn.addEventListener('click',function(){
    let inp1=document.querySelector("#a");
    let x=inp1.value;

    let inp2=document.querySelector("#b");
    let y=inp2.value;

    let inp3=document.querySelector("#c");
    let z=inp3.value;

    let sol=Math.max(x, y,z);

    let answer=document.querySelector(".answer");
    answer.textContent=sol;
})


evenbtn.addEventListener('click',function(){
    let inp1=document.querySelector("#x1");
    let n1=inp1.value;

    let inp2=document.querySelector("#x2");
    let n2=inp2.value;
    
    function Even(a,b) {
        for (let i = a; i <= b; i++) {
            if(i%2==0) {
                console.log(i)
            }
            
        }
    
    }
    let res=Even(n1,n2);

   let finalresult=document.querySelector(".result");
   finalresult.textContent=res;   

})

