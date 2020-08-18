$(document).ready(function() {
 $("#count").submit(function(event) {
   event.preventDefault();
 const inputOne = parseInt($("#countTo").val());
 const inputTwo = parseInt($("#countBy").val());
//  if (inputOne > inputTwo && inputOne >= 1 && inputTwo >=1) { // it works too
 for (let i = 0; i <= inputOne; i =  i + inputTwo ) {
   alert(i)
}

//  }
 
  });
});


