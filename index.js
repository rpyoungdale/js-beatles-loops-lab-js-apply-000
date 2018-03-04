var arrayNames = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var arrayInstr = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(arrayNames, arrayInstr) {
  var arr = [];
  for(var i=0; i<arrayNames.length; i++){
    arr+= arrayNames + " plays " + arrayInstr;
  }
  return arr;
}