let value = "";
let a ="";
let b= "";
let op = "";
let flag = 1;
function calc(a,b,sign)
{
   switch(sign){
       case '+': return +a + +b;
                  break;
        case '-': return a - b;
                  break;
        case '*': return a * b;
                  break;
        case '/': return a / b;
                   break;
        default: 
                 break;                                         
   }
   
}

function getSign(e)
{
   if(flag == 0)
   {
      
      a = calc(a,b,op);
      display.textContent = a;
      b="";
   }
  op = e.target.getAttribute("data-digit");

  flag = 0;
}

function feeder(e)
{  
  let temp = e.target.getAttribute("data-digit") ;
   
   if(temp != "=" && flag == 1)
   {
      a = a + temp;
      display.textContent = a;
   }
   if(temp != "=" && flag == 0)
   {
      b = b + temp;
      display.textContent = b;
   }
   if(temp == "=")
   {
      display.textContent = (calc(a,b,op));
   }

   
}

const operations = document.querySelectorAll(".operation");
operations.forEach(operation => operation.addEventListener("click",getSign));

const buttons = document.querySelectorAll(".numbers");
buttons.forEach((button)=>button.addEventListener("click",feeder));

const display = document.querySelector("p");





/*
function feeder(e)
{  
  let temp = e.target.getAttribute("data-digit");
   
   if(temp != "=")
   { 
    value = value +  temp;
    display.textContent = value;
   }  
   if(temp == "=")
   {
       console.log(value);
       if(value.includes("+")){
          display.textContent = (calc(value.split("+")[0],value.split("+")[1],"+"));
       }else if(value.includes("-")){
        display.textContent =(calc(value.split("-")[0],value.split("-")[1],"-"));
     }else if(value.includes("*")){
        display.textContent =(calc(value.split("*")[0],value.split("*")[1],"*"));
     }else{
        display.textContent =(calc(value.split("/")[0],value.split("/")[1],"/"));  
     }
   }
}
*/