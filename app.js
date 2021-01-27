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

function clearAll()
{
   a = "";
   b = "";
   op = "";
   flag = 1;
   display.textContent = "";
}

function deleter()
{
   if(flag == 1)
   {
      a = a.slice(0,a.length-1);
      display.textContent = a;
   }
   if(flag == 0)
   {
      b = b.slice(0,b.length-1);
      display.textContent = b;
   }
}



const operations = document.querySelectorAll(".operation");
operations.forEach(operation => operation.addEventListener("click",getSign));

const buttons = document.querySelectorAll(".numbers");
buttons.forEach((button)=>button.addEventListener("click",feeder));

const display = document.querySelector("p");

const clear = document.querySelector("#clear");
clear.addEventListener("click",clearAll);

const del = document.querySelector("#del");
del.addEventListener("click",deleter);


