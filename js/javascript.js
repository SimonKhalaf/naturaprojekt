//sets a random absolute position to a html element; receives the html element 
function moveElmRand(elm){ 
    elm.style.position ='absolute'; 
    elm.style.top = Math.floor(Math.random()*10+5)+'%'; 
    elm.style.left = Math.floor(Math.random()*50+5)+'%'; 
   } 
    
   //get the #btn_test 
   var btn_test = document.querySelector('#btn_test'); 
    
   //register to call moveElmRand() on mouseenter event to #btn_test 
   btn_test.addEventListener('mouseenter', function(e){ moveElmRand(e.target);}); 
    
   //register click to #btn_test 
   btn_test.addEventListener('click', function(e){ prompt('You are Good.');});
