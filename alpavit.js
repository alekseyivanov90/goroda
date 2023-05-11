if(document.getElementsByClassName('look_for')[0]){
	let qs = document.getElementsByClassName('look_for')[0].textContent;
	let m = qs.split(', ');
	let v = parseInt(m[2]);
	
	if(m[0]=="Россия") strn = 10414533690;
	if(m[0]=="Армения") strn = 10417232037;
	if(m[0]=="Украина") strn = 10424076448;
	if(m[0]=="Беларусь") strn = 10423319006;
	if(m[0]=="Казахстан") strn = 10415971874;
	if(m[0]=="Грузия") strn = 10411801535;
	if(m[0]=="Молдова") strn = 10397135919;
	
	let informacia = document.getElementsByClassName('look_for')[0].textContent;
	
	let okru = gifts.innerHTML="<div><p onclick='tttr()'>Ok.ru<p><p onclick='tttr1()'>Vk.com</p></div>";
	
	let imi = document.getElementsByClassName('profile-nick-name')[0].children[0].textContent;
	
	if(imi == "Наталья") imi = "Natalia";
	
	let imia = "";
	let gorod = "";
	for(i=0;i<document.getElementsByClassName('profile-nick-name')[0].textContent.length;i++){
	    imia += document.getElementsByClassName('profile-nick-name')[0].textContent.slice(i,i+1)
	}
	for(i=0;i<document.getElementsByClassName('profile-nick-name')[0].textContent.length;i++){
	    gorod += document.getElementsByClassName('profile-nick-name')[0].textContent.slice(i,i+1)
	}
	let imia2 = [];
	let gorod2 = [];
	let gor = document.getElementsByClassName('look_for')[0].textContent.split(',');
	gor = gor[1].slice(1);
	for(i=0;i<document.getElementsByClassName('profile-nick-name')[0].children[0].textContent.length;i++){
	    switch(imia[i]){
	        case "А":
	        imia2[i] = "A";
	        break;
	        case "а":
	        imia2[i] = "a";
	        break;
	      
	        case "Б":
	        imia2[i] = "B";
	        break;
	        case "б":
	        imia2[i] = "b";
	        break;
	                
	        case "В":
	        imia2[i] = "V";
	        break;
	        case "в":
	        imia2[i] = "v";
	        break;
	                
	        case "Г":
	        imia2[i] = "G";
	        break;
	        case "г":
	        imia2[i] = "g";
	        break;
	                
	        case "Д":
	        imia2[i] = "D";
	        break;
	        case "д":
	        imia2[i] = "d";
	        break;
	                        
	        case "Ё":
	        imia2[i] = "E";
	        break;
	        case "ё":
	        imia2[i] = "e";
	        break;
	                       
	        case "Ж":
	        imia2[i] = "J";
	        break;
	        case "ж":
	        imia2[i] = "j";
	        break;
	                               
	        case "З":
	        imia2[i] = "Z";
	        break;
	        case "з":
	        imia2[i] = "z";
	        break;
	                               
	        case "И":
	        imia2[i] = "I";
	        break;
	        case "и":
	        imia2[i] = "i";
	        break;
	                               
	        case "К":
	        imia2[i] = "K";
	        break;
	        case "к":
	        imia2[i] = "k";
	        break;
	                               
	        case "Л":
	        imia2[i] = "L";
	        break;
	        case "л":
	        imia2[i] = "l";
	        break;
	                       
	        case "М":
	        imia2[i] = "M";
	        break;
	        case "м":
	        imia2[i] = "m";
	        break;
	                               
	        case "Е":
	        imia2[i] = "E";
	        break;
	        case "е":
	        imia2[i] = "e";
	        break;
			                       
	        case "Н":
	        imia2[i] = "N";
	        break;
	        case "н":
	        imia2[i] = "n";
	        break;
	                               
	        case "О":
	        imia2[i] = "O";
	        break;
	        case "о":
	        imia2[i] = "o";
	        break;
	                               
	        case "П":
	        imia2[i] = "P";
	        break;
	        case "п":
	        imia2[i] = "p";
	        break;
	                               
	        case "Р":
	        imia2[i] = "R";
	        break;
	        case "р":
	        imia2[i] = "r";
	        break;
	                               
	        case "С":
	        imia2[i] = "S";
	        break;
	        case "с":
	        imia2[i] = "s";
	        break;
	                               
	        case "Т":
	        imia2[i] = "T";
	        break;
	        case "т":
	        imia2[i] = "t";
	        break;
	                               
	        case "У":
	        imia2[i] = "U";
	        break;
	        case "у":
	        imia2[i] = "u";
	        break;
	                               
	        case "Ф":
	        imia2[i] = "F";
	        break;
	        case "ф":
	        imia2[i] = "f";
	        break;
	                              
	        case "Я":
	        imia2[i] = "Ya";
	        break;
	        case "я":
	        imia2[i] = "ya";
	        break;
	                              
	        case "Ё":
	        imia2[i] = "Yo";
	        break;
	        case "ё":
	        imia2[i] = "yo";
	        break;
	                               
	        case "Й":
	        imia2[i] = "Ih";
	        break;
	        case "й":
	        imia2[i] = "ih";
	        break;
	                               
	        case "Х":
	        imia2[i] = "Kh";
	        break;
	        case "х":
	        imia2[i] = "kh";
	        break;
	                               
	        case "Ч":
	        imia2[i] = "Ch";
	        break;
	        case "ч":
	        imia2[i] = "ch";
	        break;
	                               
	        case "Ш":
	        imia2[i] = "Sh";
	        break;
	        case "ш":
	        imia2[i] = "sh";
	        break;
	    }
	  }
	  // gor = gor[1].slice(1);
	   for(i=0;i<gor.length;i++){
	   	    switch(gor[i]){
	        case "А":
	        gorod2[i] = "A";
	        break;
	        case "а":
	        gorod2[i] = "a";
	        break;
	      
	        case "Б":
	        gorod2[i] = "B";
	        break;
	        case "б":
	        gorod2[i] = "b";
	        break;
	                
	        case "В":
	        gorod2[i] = "V";
	        break;
	        case "в":
	        gorod2[i] = "v";
	        break;
	                
	        case "Г":
	        gorod2[i] = "G";
	        break;
	        case "г":
	        gorod2[i] = "g";
	        break;
	                
	        case "Д":
	        gorod2[i] = "D";
	        break;
	        case "д":
	        gorod2[i] = "d";
	        break;
	                
	        case "Е":
	        gorod2[i] = "E";
	        break;
	        case "е":
	        gorod2[i] = "e";
	        break;
	                        
	        case "Ё":
	        gorod2[i] = "E";
	        break;
	        case "ё":
	        gorod2[i] = "e";
	        break;
	                       
	        case "Ж":
	        gorod2[i] = "J";
	        break;
	        case "ж":
	        gorod2[i] = "j";
	        break;
	                               
	        case "З":
	        gorod2[i] = "Z";
	        break;
	        case "з":
	        gorod2[i] = "z";
	        break;
	                               
	        case "И":
	        gorod2[i] = "I";
	        break;
	        case "и":
	        gorod2[i] = "i";
	        break;
	                               
	        case "К":
	        gorod2[i] = "K";
	        break;
	        case "к":
	        gorod2[i] = "k";
	        break;
	                               
	        case "Л":
	        gorod2[i] = "L";
	        break;
	        case "л":
	        gorod2[i] = "l";
	        break;
	                       
	        case "М":
	        gorod2[i] = "M";
	        break;
	        case "м":
	        gorod2[i] = "m";
	        break;
			                       
	        case "Н":
	        gorod2[i] = "N";
	        break;
	        case "н":
	        gorod2[i] = "n";
	        break;
	                               
	        case "О":
	        gorod2[i] = "O";
	        break;
	        case "о":
	        gorod2[i] = "o";
	        break;
	                               
	        case "П":
	        gorod2[i] = "P";
	        break;
	        case "п":
	        gorod2[i] = "p";
	        break;
	                               
	        case "Р":
	        gorod2[i] = "R";
	        break;
	        case "р":
	        gorod2[i] = "r";
	        break;
	                               
	        case "С":
	        gorod2[i] = "S";
	        break;
	        case "с":
	        gorod2[i] = "s";
	        break;
	                               
	        case "Т":
	        gorod2[i] = "T";
	        break;
	        case "т":
	        gorod2[i] = "t";
	        break;
	                               
	        case "У":
	        gorod2[i] = "U";
	        break;
	        case "у":
	        gorod2[i] = "u";
	        break;
	                               
	        case "Ф":
	        gorod2[i] = "F";
	        break;
	        case "ф":
	        gorod2[i] = "f";
	        break;
	                              
	        case "Я":
	        gorod2[i] = "Ya";
	        break;
	        case "я":
	        gorod2[i] = "ya";
	        break;
	                              
	        case "Ё":
	        gorod2[i] = "Yo";
	        break;
	        case "ё":
	        gorod2[i] = "yo";
	        break;
	                               
	        case "Й":
	        gorod2[i] = "Ih";
	        break;
	        case "й":
	        gorod2[i] = "ih";
	        break;
	                               
	        case "Х":
	        gorod2[i] = "Kh";
	        break;
	        case "х":
	        gorod2[i] = "kh";
	        break;
	                               
	        case "Ч":
	        gorod2[i] = "Ch";
	        break;
	        case "ч":
	        gorod2[i] = "ch";
	        break;
	                               
	        case "Ш":
	        gorod2[i] = "Sh";
	        break;
	        case "ш":
	        gorod2[i] = "sh";
	        break;
	   }
	}
	imia2 = imia2.join("");
	gorod2 = gorod2.join("");
	
	let ust ='https://ok.ru/search?st.gender=f&st.fromAge='+v+'&st.tillAge='+v+'&st.country='+strn+'&st.mode=Users&st.grmode=Groups&st.posted=set&st.query='+imia2+'&st.location='+gorod2;
	
	let ust1 = 'https://vk.com/search?c%5Bage_from%5D='+v+'&c%5Bage_to%5D='+v+'&c%5Bname%5D=1&c%5Bper_page%5D=40&c%5Bphoto%5D=1&c%5Bq%5D='+imia2+'&c%5Bsection%5D=people&c%5Bsex%5D=1';


	function tttr() {open(ust)}
	function tttr1() {open(ust1)}
}
