//======== Inverted right angled triangle pattern with asterisks =======================

function invertedRightAnglePattern(input){
    for(let row =0; row<= input;row++){//row
        let pattern = " " 
        for(let star = 0 ; star <= input-row;star++){ //columns
            pattern += "*" // append asterisk to row variable
        }
        console.log(pattern); // print the row variable.
    }
}

invertedRightAnglePattern(5);