let rop, jamm;

// primer

if(Tm.getMinutes() < 10){
	rop = " 0"+ Tm.getMinutes();
}else{
	rop = Tm.getMinutes();
}

switch(0) {
    case document.getElementsByClassName("look_for")[0].innerText.search("Лучегорск"):
        jamm = Tm.getHours() + 6
        if(jamm >= 24){
            jamm = jamm - 24
        }
       document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
       break

    case document.getElementsByClassName("look_for")[0].innerText.search("Заволжье"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
       document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
       break
      
    case document.getElementsByClassName("look_for")[0].innerText.search("Москва"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Ейск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Сочи"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Лазаревское"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Альметьевск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Пенза"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Кропоткин"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                  
    case document.getElementsByClassName("look_for")[0].innerText.search("Волгоград"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Владикавказ"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Волжск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Краснодар"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Ипатово"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Липецк"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Великий Новгород"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Зеленодольск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Пермь"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Уфа"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Березники"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Оренбург"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Нижневартовск"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Екатеринбург"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Прокопьевск"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Магадан"):
        jamm = Tm.getHours() + 7
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                  
    case document.getElementsByClassName("look_for")[0].innerText.search("Хабаровск"):
        jamm = Tm.getHours() + 6
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                    
    case document.getElementsByClassName("look_for")[0].innerText.search("Новосибирск"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                      
    case document.getElementsByClassName("look_for")[0].innerText.search("Тула"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
                        
    case document.getElementsByClassName("look_for")[0].innerText.search("Вельск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Самара"):
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (Tm.getHours()) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Нижний Новгород"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Иркутск"):
        jamm = Tm.getHours() + 4
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Долгопрудный"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Калинин"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Звенигород"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Красноярск"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Санкт-Петербург"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Симферополь"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Владивосток"):
        jamm = Tm.getHours() + 6
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Нефтеюганск"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новокузнецк"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Химки"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Сургут"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Строитель"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тольятти"):
        jamm = Tm.getHours()
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Мирный"):
        jamm = Tm.getHours() + 5
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Жуковский"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Усть-Илимск"):
        jamm = Tm.getHours() + 4
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Якутск"):
        jamm = Tm.getHours() + 5
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
	
    case document.getElementsByClassName("look_for")[0].innerText.search("Североморск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новороссийск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Волхов"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Шахты"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Томск"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Воронеж"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Барнаул"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Чайковский"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Брянск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Феодосия"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Канск"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Курск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новый Уренгой"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Котельники"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Рязань"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ступино"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
      default:
      // asda
      break
  }
