

let h1 = document.querySelector('h1');
let second= document.querySelector('#sec');
let minute= document.querySelector('#min');
let hour= document.querySelector('#hour');
let startBtn = document.querySelector('#startBtn');

let hours = 0 ;

let min = 0 ;

let sec =0;

let startInterval;

function stratWatch(){

    startBtn.disabled = true;
    
    startInterval =  setInterval(function(){
sec +=  1;
second.innerHTML = sec;

if(sec===60 ){
    min += 1;
    minute.innerHTML = min;     
sec =0;
}
if(min===60){
    hour.innerHTML = hours;
    hours += 1;
    min = 0;
}
if(min===60){
    hour.innerHTML = hours;
    hours += 1;
min = 0;
}




if(sec<10){
    second.innerHTML = '0'+sec;
}
if(min < 10 ){
    minute.innerHTML = '0'+ min; 
}

if(hours < 10){
    hour.innerHTML = '0'+hours
}



},1000)
}

function stopWatch(){

    
    clearInterval(startInterval);
    startBtn.disabled = false;
    
}


function reset(){
   sec = 0;
   min = 0;
   hours = 0;
   second.innerHTML = sec;
   minute.innerHTML = min;
   hour.innerHTML = hours;
   
  startBtn.disabled = false;

    clearInterval(startInterval);

}


    

































// let num =10;
// num +=10;
// console.log(num);