let rop;

if(Tm.getMinutes() < 10){
	rop = " 0"+ Tm.getMinutes();
}else{
	rop = Tm.getMinutes();
}

switch(0) {
    case document.getElementsByClassName("look_for")[0].innerText.search("Лучегорск"):
      document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 6) + '\:' + rop;
      break

    case document.getElementsByClassName("look_for")[0].innerText.search("Заволжье"):
      document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
      break
  
    default:
      // asda
      break
  }
