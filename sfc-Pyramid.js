var nSFC = function(n){
  var message = "";
  var counter = 0;

while(counter < n){
  message = message + "SFC ";
  counter = counter + 1;
}
  return message;
};

var sfcPyramid = function(n){
var output;
var row = 1;

while (row <= n){
  output = nSFC(row);
  row = row + 1;
   }
  return output;
  console.log(output)
}

sfcPyramid(5);