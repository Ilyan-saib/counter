let counter = 0 
 
let counter_result = document.getElementById('counter')

const timer = setInterval( () => { 
    
    console.log(counter);
    counter++;
    counter_result.innerHTML = counter;
    
    if (counter === 9) {
        clearInterval(timer)}
    {
}  } , 1000 )
  

