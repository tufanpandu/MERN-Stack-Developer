function colorMixer(color1 , color2){
    let result; // initialize result
    switch (color1){
        case "red":  ///case 1
            switch(color2){
                case "blue":
                result = "Purple"
                break;
                case "yellow":
                result = "Orange"
                break;
                default:
                    result = "Mix approprieat colour with red"
                    break;
            }

            break;
      case "blue": /// Case -2
          switch(color2){
            case "red":
                result = "Purple"
                break;
            case "yellow":
              result = "Green"
              break;
             default:
                result = "Mix approprieat colour with blue"     
                break;
          }
          break;
     case "yellow":  //case -3
        switch(color2){
            case "red":
                result = "Orange"
                break;
            case "blue":
                result = "Green"
                break;
            default:
                result = "Mix approprieat colour with Yellow"  
                break;
        }     
    default:
        result = "Invalid Color Combination"
        break;
    }
}


mixColor("red", "blue");
mixColor("blue", "red");
mixColor("red", "yellow");
mixColor("yellow", "red");
mixColor("blue" , "yellow");
mixColor("yellow", "blue");