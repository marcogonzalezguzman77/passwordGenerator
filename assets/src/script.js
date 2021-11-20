// Lowercase Array
var lowercase = ["a", "b", "c","d","e","f", "g","h","i","j","k","l","m", "n","o","p","q","r","s", "t","u","v","w","x","y","z"];
// Numeric Array
var numeric = ["1","2","3","4","5","6","7","8","9","0"];

//Special characters Array --> !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var specialCharacters = ["\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", 
"\u002A", "\u002B", "\u002C","\u002D", "\u002E", "\u002F","\u003A", "\u003B", "\u003C","\u003D", "\u003E", "\u003F",
"\u0040", "\u005B", "\u005C","\u005D", "\u005E", "\u005F","\u0060", "\u007B", "\u007C","\u007D", "\u007E"];

var characters = {
    abc: ["a", "b", "c","d","e","f", "g","h","i","j","k","l","m", "n","o","p","q","r","s", "t","u","v","w","x","y","z"],
    numeric: ["1","2","3","4","5","6","7","8","9","0"],
    specialCharacters: ["\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", 
    "\u002A", "\u002B", "\u002C","\u002D", "\u002E", "\u002F","\u003A", "\u003B", "\u003C","\u003D", "\u003E", "\u003F",
    "\u0040", "\u005B", "\u005C","\u005D", "\u005E", "\u005F","\u0060", "\u007B", "\u007C","\u007D", "\u007E"]
};



//flags used for inputs validating
var flagGeneral = 0;
var flagLowerCase = "";
var flagUperCase = "";
var flagNumeric = "";
var flagSpecialCh = "";

//Answer variables
var ansLowerCase = "";
var ansUperCase = "";
var ansNumeric = "";
var ansSpecialCh = "";

//Password variable
var passWord = "";

//function for generating password
var generatePassword = function (){
    // Ask user for Password Length
  var lengthPasw = window.prompt("Enter passworwd length (from 8 to 128 characters):");
  
  // If user pressed Cancel, immediately end function
  if (!lengthPasw) {
    return;
  } else {
    
    var noEsUnNumero = isNaN(lengthPasw);
    //console.log('Is not a numbber ',noEsUnNumero);
    if (noEsUnNumero){
        alert("is not a number");
        return;
    }
    // If length is less than 8 ask again
    if ((lengthPasw < 8)||(lengthPasw > 128)){
        alert("length out of range");
        return;
        //lengthPasw = window.prompt("Enter passworwd length (from 8 to 128 characters):");
    } else{ //If the length is correct
        do {
            ansLowerCase = window.prompt("Include lowercase? (Y or N):");
            ansUperCase = window.prompt("Include uperCase? (Y or N):");
            ansNumeric = window.prompt("Include numeric? (Y or N):");
            ansSpecialCh = window.prompt("Include special characters? (Y or N):");

            ansLowerCase = ansLowerCase.toUpperCase();
            ansUperCase  = ansUperCase.toUpperCase();
            ansNumeric = ansNumeric.toUpperCase();
            ansSpecialCh = ansSpecialCh.toUpperCase();

            //console.log('ansLowerCase ',ansLowerCase);
            //console.log('ansUperCase ',ansUperCase);
            //console.log('ansNumeric ',ansNumeric);
            //console.log('ansSpecialCh ',ansSpecialCh);

            //validate LowerCase input
            //if lowerCase is different empty and equal to y or n the value is valid
            if ((ansLowerCase.length !=0) && ((ansLowerCase == "Y") || (ansLowerCase == "N"))){
                flagLowerCase = "valid";
            }else {
                flagLowerCase = "invalid";
            }

            //validate UperCase input
            //if ansUperCase is different empty and equal to y or n the value is valid
            if ((ansUperCase.length !=0) &&((ansUperCase == "Y") || (ansUperCase == "N"))){
                flagUperCase = "valid";
            }else {
                flagUperCase = "invalid";
            }

            //validate Numeric input
            //if ansNumeric is different empty and equal to y or n the value is valid
            if ((ansNumeric.length !=0) &&((ansNumeric == "Y") || (ansNumeric == "N"))){
                flagNumeric = "valid";
            }else {
                flagNumeric = "invalid";
            }

            //validate SpecialCh input
            //if specialCh is different empty and equal to y or n the value is valid
            if ((ansSpecialCh.length !=0) &&((ansSpecialCh == "Y") || (ansSpecialCh == "N"))){
                flagSpecialCh = "valid";
            }else {
                flagSpecialCh = "invalid";
            }

            //validate all the flags as valid, if SOME flags are invalid repeat de question with while loop
            if ((flagLowerCase == "invalid") || (flagUperCase == "invalid") || (flagNumeric == "invalid") || (flagSpecialCh == "invalid")){
                flagGeneral = 1; //if flagGeneral is equal to 1, it means to repeat the questions again
                alert("You need the review your questions some are wrong");
            } else {
                //if all the answera all valid, now we have to validate that some has "Y" 
                //If all the answers are N we have to repeat the questions --> flagGeneral=1
                if ((ansLowerCase == "N") && (ansUperCase == "N") && (ansNumeric == "N") && (ansSpecialCh == "N")){
                    flagGeneral = 1; //if flagGeneral is equal to 1, it means to repeat the questions again
                    alert("You have to put 'Y' at least on one character type");
                } else { flagGeneral=0 };
            };

            
            //console.log('flag value ',flagGeneral);

            //repeat the questions while flagGeneral = 1 it means some inputs are invalids
        }while (flagGeneral != 0);        
        //console.log('Out of while');
        
        //Begin to create the password

        //Variables empleadas para generar archivos random y seleccionar un caracter del objeto character
        var tombola = "";
        var index = "";
        var ranLowerCase = "";
        var ranUpperCase = "";
        var ranNumeric = "";
        var ranSpecialCh = "";

        //variables empleadas para ver la longitud de caracteres y utilizarlas como modulo
        var lengthAbc = characters.abc.length;
        var lengthNumeric = characters.numeric.length;
        var lengthSpecialCh = characters.specialCharacters.length;

        //console.log(lengthAbc," ",lengthNumeric," ",lengthSpecialCh);

        for (let i = 0; i < lengthPasw; i++) {
            tombola ="";
                        
            if (ansLowerCase=="Y"){
                index = Math.floor(Math.random() * lengthPasw);
                index = index%lengthAbc;
                ranLowerCase = characters.abc[index]; 
                tombola += ranLowerCase;
            }
            if (ansUperCase=="Y"){
                index = Math.floor(Math.random() * lengthPasw);
                index = index%lengthNumeric;
                ranLowerCase = characters.abc[index];
                ranUpperCase = ranLowerCase.toUpperCase();
                tombola += ranUpperCase;
            }
            if (ansNumeric=="Y"){
                index = Math.floor(Math.random() * lengthPasw);
                index = index%lengthSpecialCh;
                ranNumeric = characters.numeric[index]; 
                tombola += ranNumeric;
            }
            if (ansSpecialCh=="Y"){
                index = Math.floor(Math.random() * lengthPasw);
                ranSpecialCh = characters.specialCharacters[index]; 
                tombola += ranSpecialCh;
            }
            
            //console.log("tombola ",tombola );
            indexTombola = Math.floor(Math.random() * tombola.length);
            //console.log('indexTombola ',indexTombola);
            characterSelected = tombola.substr(indexTombola,1);
            //console.log("Character selected ",characterSelected);
            
            passWord += characterSelected;
            //console.log("tombola length",tombola.length);
            //text += cars[i] + "<br>";
        }
        console.log("Password Generated ",passWord);
        //passWord = passWord.replace(/['"]+/g, '');
        document.getElementById("securePassword").innerHTML = passWord;
        window.alert("Password Generated "+passWord);
        passWord = "";

    }//end else if length is correct

  }//end else if cancel is press
  
  //console.log("Password Length: ",lengthPasw);
 // console.log("Special Characters: ","\u005E")

}//end function generatePassword

