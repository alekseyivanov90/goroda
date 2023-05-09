let rop;

if(Tm.getMinutes() < 10){
	rop = " 0"+ Tm.getMinutes();
}else{
	rop = Tm.getMinutes();
}

switch(0) {
    case document.getElementsByClassName("look_for")[0].innerText.search("Лучегорск"):
      document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
      break
  
    case 'value2':  // if (x === 'value2')
      // sds
      break
  
    default:
      // asda
      break
  }
