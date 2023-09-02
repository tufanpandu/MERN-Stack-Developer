//======== Inverted right angled triangle pattern with asterisks =======================

function invertedRightAnglePattern(input){
    for(let i =0; i<= input;i++){//row
        let row = " " 
        for(let j = 0 ; j <= input-i;j++){ //columns
            row += "*" // append asterisk to row variable
        }
        console.log(row); // print the row variable.
    }
}

invertedRightAnglePattern(5);