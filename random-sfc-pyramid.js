var randomSFCPyramid = function(n){
var n = Math.random() * 100
var message = "";
var counter = 0;

while(counter < n){
  message = message + "SFC ";
  counter = counter + 1;
  console.log(message);
  }
};

randomSFCPyramid();