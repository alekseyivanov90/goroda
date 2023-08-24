function reEnRu(str) {
    let masR = str.split("");
    let masE = [];
    for(i=0; i<masR.length; i++){
        switch(masR[i]){
	        case "A":
	        masE[i] = "Й";
	        break;
	        case "a":
	        masE[i] = "й";
	        break;
	      
	        case "B":
	        masE[i] = "И";
	        break;
	        case "b":
	        masE[i] = "и";
	        break;
	                
	        case "C":
	        masE[i] = "С";
	        break;
	        case "c":
	        masE[i] = "с";
	        break;
	                
	        case "D":
	        masE[i] = "В";
	        break;
	        case "d":
	        masE[i] = "в";
	        break;
	                
	        case "E":
	        masE[i] = "У";
	        break;
	        case "e":
	        masE[i] = "у";
	        break;
	                        
	        case "F":
	        masE[i] = "А";
	        break;
	        case "f":
	        masE[i] = "а";
	        break;
	                       
	        case "G":
	        masE[i] = "П";
	        break;
	        case "g":
	        masE[i] = "п";
	        break;
	                               
	        case "H":
	        masE[i] = "Р";
	        break;
	        case "h":
	        masE[i] = "р";
	        break;
	                               
	        case "I":
	        masE[i] = "Ш";
	        break;
	        case "i":
	        masE[i] = "ш";
	        break;
	                               
	        case "J":
	        masE[i] = "О";
	        break;
	        case "j":
	        masE[i] = "о";
	        break;
	                               
	        case "K":
	        masE[i] = "Л";
	        break;
	        case "k":
	        masE[i] = "л";
	        break;
	                       
	        case "L":
	        masE[i] = "Д";
	        break;
	        case "l":
	        masE[i] = "д";
	        break;
	                               
	        case "M":
	        masE[i] = "Ь";
	        break;
	        case "m":
	        masE[i] = "ь";
	        break;
			                       
	        case "N":
	        masE[i] = "Т";
	        break;
	        case "n":
	        masE[i] = "т";
	        break;
	                               
	        case "O":
	        masE[i] = "Щ";
	        break;
	        case "o":
	        masE[i] = "щ";
	        break;
	                               
	        case "P":
	        masE[i] = "З";
	        break;
	        case "p":
	        masE[i] = "з";
	        break;
	                               
	        case "Q":
	        masE[i] = "Й";
	        break;
	        case "q":
	        masE[i] = "й";
	        break;
	                               
	        case "R":
	        masE[i] = "К";
	        break;
	        case "r":
	        masE[i] = "к";
	        break;
	                               
	        case "S":
	        masE[i] = "Ы";
	        break;
	        case "s":
	        masE[i] = "ы";
	        break;
	                               
	        case "T":
	        masE[i] = "Е";
	        break;
	        case "t":
	        masE[i] = "е";
	        break;
	                               
	        case "U":
	        masE[i] = "Г";
	        break;
	        case "u":
	        masE[i] = "г";
	        break;
	                              
	        case "V":
	        masE[i] = "М";
	        break;
	        case "v":
	        masE[i] = "м";
	        break;
	                              
	        case "W":
	        masE[i] = "Ц";
	        break;
	        case "w":
	        masE[i] = "ц";
	        break;
	                               
	        case "X":
	        masE[i] = "Ч";
	        break;
	        case "x":
	        masE[i] = "ч";
	        break;
	                               
	        case "Y":
	        masE[i] = "Н";
	        break;
	        case "y":
	        masE[i] = "н";
	        break;
	                               
	        case "Z":
	        masE[i] = "Я";
	        break;
	        case "z":
	        masE[i] = "я";
	        break;
			
			case "{":
	        masE[i] = "Х";
	        break;
	        case "[":
	        masE[i] = "х";
	        break;
			
			case "}":
	        masE[i] = "Ъ";
	        break;
	        case "]":
	        masE[i] = "ъ";
	        break;
			
			case ":":
	        masE[i] = "Ж";
	        break;
	        case ";":
	        masE[i] = "ж";
	        break;
			
			case `"`:
	        masE[i] = "Э";
	        break;
	        case "'":
	        masE[i] = "э";
	        break;
			
			case "<":
	        masE[i] = "Б";
	        break;
	        case ",":
	        masE[i] = "б";
	        break;
			
			case ">":
	        masE[i] = "Ю";
	        break;
	        case ".":
	        masE[i] = "ю";
	        break;
			
			default:
			masE[i] = masR[i];
			break;
	    }
	}
	return masE.join("");
}