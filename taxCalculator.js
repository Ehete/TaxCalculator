exports.printMsg = function() {
    console.log("This is a message from the Tax Calculator package");
  }
let grossSalary = document.getElementById('grossSalary');  

function calculateTax(salary,totalYear) {
   if(salary<=0 ){
    document.getElementById('tax').innerHTML = "Please insert a valid salary";
    return 0;
   }
   else if(totalYear <=0){
    document.getElementById('tax').innerHTML = "Please insert a valid year of Experience";
    return 0;
   }
  else{
    var tax = 0;
    if (salary > 10900){
        tax = (salary * 0.35) - 955;  
    } 
    else if ((salary > 7801) && (salary <= 10900)){
        tax = (salary * 0.3) - 955;  
    } 
    else if ((salary > 5251) && (salary <= 7800)){
        tax = (salary * 0.25) - 565; 
    }
       
    else if ((salary > 3201) && (salary <= 5250)){
        tax = (salary * 0.2) - 302.50; 
    } 
    else if((salary > 1651) && (salary <= 3200)){
        tax = (salary * 0.15) - 142.50; 
    }
        
    else if ((salary > 601) && ( salary <= 1650)){
        tax = ( salary * 0.1) - 60; 
    }
        
    else if ((salary > 0) && (salary <= 600)) {
        tax = 0;
    }  
    document.getElementById('tax').innerHTML = "Your Total Tax Contribution is " +(tax *totalYear);
return  (tax*totalYear);
  }
    
} 