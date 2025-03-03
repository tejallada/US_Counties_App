//Input and Output Variable
var stateOutput = "";
//Gets relevant date from "Air Quality Index by US County" and adds it to the respective list
var stateList = getColumn("Air Quality Index by US County", "State");
var countyList = getColumn("Air Quality Index by US County", "County");

//This onEvent function gets the information needed for the output and updates the screen 
onEvent("updateButton", "click", function( ) {
  traversingList(getText("stateDropdown"));
  stateOutput = "";
});

//This function traverses the list based on the state selected to take all the counties in the list countyList[] and add them to an updated variable by concatinating them. 
function traversingList(state) {
  for (var i = 0; i < countyList.length; i++) {
    if (state == stateList[i]) {
      if (stateOutput == "") {
        stateOutput = countyList[i];
      } else {
      stateOutput = (stateOutput + "\n") + countyList[i];
      }
    }
    setText("textOutput", stateOutput);
  }
}