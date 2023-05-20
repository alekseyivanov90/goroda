let rop, jamm;

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
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Сыктывкар"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Петрозаводск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Владимир"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Псков"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Саратов"):
        jamm = Tm.getHours()
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ковров"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Керчь"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Казань"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Омск"):
        jamm = Tm.getHours() + 2
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Нижний Тагил"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Новомосковск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Балашиха"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Балашов"):
        jamm = Tm.getHours()
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ижевск"):
        jamm = Tm.getHours()
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Елабуга"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Дубна"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Комсомольск-на-Амуре"):
        jamm = Tm.getHours() + 6
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Калуга"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новохоперск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Гусев"):
        jamm = Tm.getHours() - 2
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Биробиджан"):
        jamm = Tm.getHours() + 6
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Южно-Сахалинск"):
        jamm = Tm.getHours() + 7
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Мордово"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Красногородское"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Омутнинск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ливны"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Златоуст"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Белорецк"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Благовещенск"):
        jamm = Tm.getHours() + 5
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Артем"):
        jamm = Tm.getHours() + 6
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Полевской"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Щекино"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Горно-Алтайск"):
        jamm = Tm.getHours() + 3
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Первоуральск"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ростов-на-Дону"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Балабаново"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новокуйбышевск"):
        jamm = Tm.getHours()
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Анапа"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Улан-Удэ"):
        jamm = Tm.getHours() + 4
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Видное"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Севастополь"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Алушта"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Павловский Посад"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Норильск"):
        jamm = Tm.getHours() + 4
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Иваново"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Челябинск"):
        jamm = Tm.getHours() + 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ярославль"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Черкесск"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Гатчина"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тайшет"):
        jamm = Tm.getHours() + 4
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Черемхово"):
        jamm = Tm.getHours() + 4
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Нальчик"):
        jamm = Tm.getHours() - 1
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Находка"):
        jamm = Tm.getHours() + 6
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ульяновск"):
        jamm = Tm.getHours()
        if(jamm >= 24){
            jamm = jamm - 24
        }
        document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
        break
		
      default:
      // asda
      break
  }
