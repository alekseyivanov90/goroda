function re(str) {
    let masR = str.split("");
    let masE = [];
    for(i=0; i<masR.length; i++){
        switch(masR[i]){
	        case "А":
	        masE[i] = "A";
	        break;
	        case "а":
	        masE[i] = "a";
	        break;
	      
	        case "Б":
	        masE[i] = "B";
	        break;
	        case "б":
	        masE[i] = "b";
	        break;
	                
	        case "В":
	        masE[i] = "V";
	        break;
	        case "в":
	        masE[i] = "v";
	        break;
	                
	        case "Г":
	        masE[i] = "G";
	        break;
	        case "г":
	        masE[i] = "g";
	        break;
	                
	        case "Д":
	        masE[i] = "D";
	        break;
	        case "д":
	        masE[i] = "d";
	        break;
	                        
	        case "Ё":
	        masE[i] = "E";
	        break;
	        case "ё":
	        masE[i] = "e";
	        break;
	                       
	        case "Ж":
	        masE[i] = "J";
	        break;
	        case "ж":
	        masE[i] = "j";
	        break;
	                               
	        case "З":
	        masE[i] = "Z";
	        break;
	        case "з":
	        masE[i] = "z";
	        break;
	                               
	        case "И":
	        masE[i] = "I";
	        break;
	        case "и":
	        masE[i] = "i";
	        break;
	                               
	        case "К":
	        masE[i] = "K";
	        break;
	        case "к":
	        masE[i] = "k";
	        break;
	                               
	        case "Л":
	        masE[i] = "L";
	        break;
	        case "л":
	        masE[i] = "l";
	        break;
	                       
	        case "М":
	        masE[i] = "M";
	        break;
	        case "м":
	        masE[i] = "m";
	        break;
	                               
	        case "Е":
	        masE[i] = "E";
	        break;
	        case "е":
	        masE[i] = "e";
	        break;
			                       
	        case "Н":
	        masE[i] = "N";
	        break;
	        case "н":
	        masE[i] = "n";
	        break;
	                               
	        case "О":
	        masE[i] = "O";
	        break;
	        case "о":
	        masE[i] = "o";
	        break;
	                               
	        case "П":
	        masE[i] = "P";
	        break;
	        case "п":
	        masE[i] = "p";
	        break;
	                               
	        case "Р":
	        masE[i] = "R";
	        break;
	        case "р":
	        masE[i] = "r";
	        break;
	                               
	        case "С":
	        masE[i] = "S";
	        break;
	        case "с":
	        masE[i] = "s";
	        break;
	                               
	        case "Т":
	        masE[i] = "T";
	        break;
	        case "т":
	        masE[i] = "t";
	        break;
	                               
	        case "У":
	        masE[i] = "U";
	        break;
	        case "у":
	        masE[i] = "u";
	        break;
	                               
	        case "Ф":
	        masE[i] = "F";
	        break;
	        case "ф":
	        masE[i] = "f";
	        break;
	                              
	        case "Я":
	        masE[i] = "Ya";
	        break;
	        case "я":
	        masE[i] = "ya";
	        break;
	                              
	        case "Ё":
	        masE[i] = "Yo";
	        break;
	        case "ё":
	        masE[i] = "yo";
	        break;
	                               
	        case "Й":
	        masE[i] = "Ih";
	        break;
	        case "й":
	        masE[i] = "ih";
	        break;
	                               
	        case "Х":
	        masE[i] = "Kh";
	        break;
	        case "х":
	        masE[i] = "kh";
	        break;
	                               
	        case "Ч":
	        masE[i] = "Ch";
	        break;
	        case "ч":
	        masE[i] = "ch";
	        break;
	                               
	        case "Ш":
	        masE[i] = "Sh";
	        break;
	        case "ш":
	        masE[i] = "sh";
	        break;
			
			default:
			masE[i] = masR[i];
			break;
	    }
	}
	return masE.join("");
}