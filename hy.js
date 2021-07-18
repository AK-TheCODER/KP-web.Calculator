

try{
var lab="";
var labb="";
var icon=1;
var iconic=0;
var curr=document.getElementById('label');




function cc(){
  
  var curr=document.getElementById('label');

  lab="";labb=""
  curr.textContent=lab;
}
function delc(){
  
  var curr=document.getElementById('label');
  if(icon==2){

  lab=lab.substring(0,lab.length-1)
  labb=labb.substring(0,labb.length-1)
  icon=1;
  
  }
  else{
  lab=lab.substring(0,lab.length-1)
  labb=labb.substring(0,labb.length-1)
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}














function onec(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab=""
  labb=""
  lab+='1'
  labb+="1"
  icon=1;
  
  }
  else{
  lab+='1';
  labb+="1";
  }
  
  
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
  
  
  
}


function twoc(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='2';labb+='2'
  icon=1;
  
  }
  else{
  lab+='2'
  labb+='2'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

function threec(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='3';labb+='3'
  icon=1;
  
  }
  else{
  lab+='3'
  labb+='3'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}


function fourc(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='4';labb+='4'
  icon=1;
  
  }
  else{
  lab+='4'
  labb+='4'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}


function fivec(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='5';labb+='5'
  icon=1;
  
  }
  else{
  lab+='5'
  labb+='5'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

function sixc(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='6';labb+='6'
  icon=1;
  
  }
  else{
  lab+='6'
  labb+='6'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

function sevenc(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='7';labb+='7'
  icon=1;
  
  }
  else{
  lab+='7'
  labb+='7'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}


function eightc(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='8';labb+='8'
  icon=1;
  
  }
  else{
  lab+='8'
  labb+='8'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

function ninec(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='9';labb+='9'
  icon=1;
  
  }
  else{
  lab+='9'
  labb+='9'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}


function zeroc(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='0';labb+='0'
  icon=1;
  
  }
  else{
  lab+='0'
  labb+='0'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

function dotc(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+='.';labb+='.'
  icon=1;
  
  }
  else{
  lab+='.'
  labb+='.'
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}


function pic(){
  
  var curr=document.getElementById('label');
  if(icon==2){
  lab="";labb="";lab+=String(Math.PI);labb+=String(Math.PI)
  icon=1;
  
  }
  else{
  lab+=String(Math.PI)
  labb+=String(Math.PI)
  }
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}




//plus function
function plusc(){
  var curr=document.getElementById('label');
  
if(iconic==2){
    
    labb+=')'
    
  }
  
  lab+='+'
  labb+='+'
  
  
  
  icon=1;
  iconic=0;
  
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
  
}


function minusc(){
  var curr=document.getElementById('label');
  
  
  if(iconic==2){
    
    labb+=')'
    
  }
  
  lab+='-'
  labb+='-'
  
  icon=1;
  iconic=0;
  
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
  
}


function multiplyc(){
  var curr=document.getElementById('label');
  
    
  if(iconic==2){
    
    labb+=')'
    
  }
  
  
  
  lab+='×'
  labb+='*'
  iconic=0;
  icon=1;
  
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

function divisionc(){
  var curr=document.getElementById('label');
  
          
  if(iconic==2){
    
    labb+=')'
    
  }
  
  
  lab+='÷'
  labb+='/'
  
  icon=1;
  iconic=0;
  
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
  
}

function moduloc(){
  var curr=document.getElementById('label');
  
  
  if(iconic==2){
    
    labb+=')'
    
  }
  
  lab+='%'
  labb+='%'
  iconic=0
  
  icon=1;
  
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
  
}


function raisec(){
  var curr=document.getElementById('label');
 
  if(iconic==2){
    
    labb+=')'
    
  }
 
  lab+='^'
  labb+='**'
  
  icon=1;
  iconic=0;
  
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
  
}







function rootc(){
  var curr=document.getElementById('label');
  
   if(iconic==2)
   {labb+=')'}
   
  lab+='√'
  labb+='Math.sqrt('
  iconic=2;
  icon=1;
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

   // curr.textContent=lab.slice(lab.length-18,lab.length); 



function sinec(){
  var curr=document.getElementById('label');
  
   if(iconic==2)
   {labb+=')'}
   
  lab+='sin'
  labb+='Math.sin((Math.PI/180)*'
  iconic=2;
  
  icon=1;
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}


function cosinec(){
  var curr=document.getElementById('label');
  
   if(iconic==2)
   {labb+=')'}
   
  lab+='cos'
  labb+='Math.cos((Math.PI/180)*'
  iconic=2;
  
  icon=1;
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}

function tangentc(){
  var curr=document.getElementById('label');
  
   if(iconic==2)
   {labb+=')'}
   
  lab+='tan'
  labb+='Math.tan((Math.PI/180)*'
  iconic=2;
  
  icon=1;
  if(lab.length<18){
  curr.textContent=lab;}
  else{
    curr.textContent=lab.slice(lab.length-18,lab.length); }
}






// Equal to function and it contain icon =2 

function equalc(){
  var curr=document.getElementById('label');
  
  
  if(iconic==2){
    
    labb+=')'
    
  }
  iconic=0;
  
  res=eval(labb);
  lab=String(res);
  labb=String(res)
  res=String(res);
  icon=2;
  
  if(res.length>30){
    
  var hyva=res.slice(0,res.length-16)+res.slice(res.length-4,res.length);
  
curr.textContent=hyva;
  
  }
  else if(res.length>25){
var hyva=res.slice(0,res.length-12)+res.slice(res.length-4,res.length);
  
curr.textContent=hyva;
  }
  else if(res.length>22){
    var hyva=res.slice(0,res.length-12)+res.slice(res.length-4,res.length);
curr.textContent=hyva;
  }
 /* else if(res.include('e')==true){
    if(res.length>18){
    var hyva=res.slice(0,6)+res.slice(res.length-5,res.length);
      curr.textContent=hyva;
    }
    
  }*/
  
  
  
  else{
    curr.textContent=res;
  }
  
}

}catch{
  var curr=document.getElementById("label");
  curr.textContent="SyntaxError"
}






