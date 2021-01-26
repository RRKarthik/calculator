let value = "";
function calc(string)
{
   /*switch(sign){
       case '+': return a + b;
                  break;
        case '-': return a - b;
                  break;
        case '*': return a * b;
                  break;
        case '/': return a / b;
                   break;
        default: 
                 break;                                         
   }*/
   
}



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
   }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>button.addEventListener("click",feeder));

const display = document.querySelector("p");
