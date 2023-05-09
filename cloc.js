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
      
    case document.getElementsByClassName("look_for")[0].innerText.search("Москва"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Ейск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Сочи"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Альметьевск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Пенза"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Кропоткин"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
                  
    case document.getElementsByClassName("look_for")[0].innerText.search("Волгоград"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Владикавказ"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Волжск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Краснодар"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Ипатово"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Липецк"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Великий Новгород"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Зеленодольск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Пермь"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 1) + '\:' + rop;
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Уфа"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 1) + '\:' + rop;
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Березники"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 1) + '\:' + rop;
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Оренбург"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 1) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Нижневартовск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 1) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Екатеринбург"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 1) + '\:' + rop;
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Прокопьевск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 3) + '\:' + rop;
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Магадан"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 7) + '\:' + rop;
        break
                  
    case document.getElementsByClassName("look_for")[0].innerText.search("Хабаровск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 6) + '\:' + rop;
        break
                    
    case document.getElementsByClassName("look_for")[0].innerText.search("Новосибирск"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 3) + '\:' + rop;
        break
                      
    case document.getElementsByClassName("look_for")[0].innerText.search("Тула"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() - 1) + '\:' + rop;
        break
                        
    case document.getElementsByClassName("look_for")[0].innerText.search("Пермь3"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours() + 1) + '\:' + rop;
        break

    default:
      // asda
      break
  }
