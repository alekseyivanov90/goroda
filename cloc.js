let rop, jamm;

if(Tm.getMinutes() < 10){
	rop = " 0"+ Tm.getMinutes();
}else{
	rop = Tm.getMinutes();
}

if(document.getElementsByClassName("user-town")[0]){
	for(i=0; i<document.getElementsByClassName("user-town").length; i++){
		asasasx(document.getElementsByClassName("user-town")[i].innerText);
	}
}else{
	asasasx(0);
	console.log("ok");
	
}
	

function asasasx(a){
switch(a) {
    case document.getElementsByClassName("look_for")[0].innerText.search("Лучегорск"):
        correct(6)
       break

    case document.getElementsByClassName("look_for")[0].innerText.search("Заволжье"):
        correct(-1)
       break
      
    case document.getElementsByClassName("look_for")[0].innerText.search("Москва"):
        correct(-1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Ейск"):
        correct(-1)
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Сочи"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Лазаревское"):
        correct(-1)
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Альметьевск"):
        correct(-1)
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Пенза"):
        correct(-1)
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Кропоткин"):
        correct(-1)
        break
                  
    case document.getElementsByClassName("look_for")[0].innerText.search("Волгоград"):
        correct(-1)
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Владикавказ"):
        correct(-1)
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Волжск"):
        correct(-1)
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Краснодар"):
        correct(-1)
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Ипатово"):
        correct(-1)
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Липецк"):
        correct(-1)
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Великий Новгород"):
        correct(-1)
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Зеленодольск"):
        correct(-1)
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Пермь"):
        correct(1)
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Уфа"):
        correct(1)
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Березники"):
        correct(1)
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Оренбург"):
        correct(1)
        break
          
    case document.getElementsByClassName("look_for")[0].innerText.search("Нижневартовск"):
        correct(1)
        break
            
    case document.getElementsByClassName("look_for")[0].innerText.search("Екатеринбург"):
        correct(1)
        break
              
    case document.getElementsByClassName("look_for")[0].innerText.search("Прокопьевск"):
        correct(3)
        break
                
    case document.getElementsByClassName("look_for")[0].innerText.search("Магадан"):
        correct(7)
        break
                  
    case document.getElementsByClassName("look_for")[0].innerText.search("Хабаровск"):
        correct(6)
        break
                    
    case document.getElementsByClassName("look_for")[0].innerText.search("Новосибирск"):
        correct(3)
        break
                      
    case document.getElementsByClassName("look_for")[0].innerText.search("Тула"):
        correct(-1)
        break
                        
    case document.getElementsByClassName("look_for")[0].innerText.search("Вельск"):
        correct(-1)
        break
    
    case document.getElementsByClassName("look_for")[0].innerText.search("Самара"):
		correct(0)
        break

    case (a==0?document.getElementsByClassName("look_for")[i].innerText.search("Нижний Новгород"):"Нижний Новгород"):
	console.log("ok1");
        correct(-1, -1)
        break
        
    case document.getElementsByClassName("look_for")[0].innerText.search("Иркутск"):
        correct(4)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Долгопрудный"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Калинин"):
        correct(-1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Звенигород"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Красноярск"):
        correct(3)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Санкт-Петербург"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Симферополь"):
		correct(-1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Владивосток"):
        correct(6)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Нефтеюганск"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новокузнецк"):
        correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Химки"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Сургут"):
        correct(1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Строитель"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тольятти"):
        correct(0)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Мирный"):
        correct(5)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Жуковский"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Усть-Илимск"):
        correct(4)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Якутск"):
        correct(5)
        break
	
    case document.getElementsByClassName("look_for")[0].innerText.search("Североморск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новороссийск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Волхов"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Шахты"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Томск"):
        correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Воронеж"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Барнаул"):
        correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Чайковский"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Брянск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Феодосия"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Канск"):
        correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Курск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новый Уренгой"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Котельники"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Рязань"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ступино"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Сыктывкар"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Петрозаводск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Владимир"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Псков"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Саратов"):
        correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ковров"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Керчь"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Казань"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Омск"):
        correct(2)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Нижний Тагил"):
        correct(1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Новомосковск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Балашиха"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Балашов"):
        correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ижевск"):
        correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Елабуга"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Дубна"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Комсомольск-на-Амуре"):
        correct(6)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Калуга"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новохоперск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Гусев"):
        correct(-2)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Биробиджан"):
        correct(6)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Южно-Сахалинск"):
        correct(7)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Мордово"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Красногородское"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Омутнинск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ливны"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Златоуст"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Белорецк"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Благовещенск"):
        correct(5)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Артем"):
        correct(6)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Полевской"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Щекино"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Горно-Алтайск"):
        correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Первоуральск"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ростов-на-Дону"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Балабаново"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Новокуйбышевск"):
        correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Анапа"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Улан-Удэ"):
        correct(4)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Видное"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Севастополь"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Алушта"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Павловский Посад"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Норильск"):
        correct(4)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Иваново"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Челябинск"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ярославль"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Черкесск"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Гатчина"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тайшет"):
        correct(4)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Черемхово"):
        correct(4)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Нальчик"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Находка"):
        correct(6)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ульяновск"):
        correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тюмень"):
        correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Чита"):
        correct(5)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Пушкино"):
        correct(-1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Махачкала"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Яшкино"):
        correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Адлер"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Белгород"):
        correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Бугуруслан"):
		correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тамбов"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Кириши"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ангарск"):
		correct(4)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Белово"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Подольск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Домодедово"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Володарск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ялта"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Бишкек"):
		correct(2)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ала-Бука"):
		correct(2)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Дмитров"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тогучин"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Барабинск"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Всеволожск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тихорецк"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Абакан"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Люберцы"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Колпино"):
		correct(-1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Луховицы"):
		correct(-1)
        break

    case document.getElementsByClassName("look_for")[0].innerText.search("Чебоксары"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Рославль"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Киров"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Георгиевск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Кемерово"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Сафоново"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Копейск"):
		correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Грязовец"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Геленджик"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ставрополь"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Наро-Фоминск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Архангельск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Киселевск"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Курагино"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Невинномысск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Зеленоград"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Дзержинск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Смоленск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Гурьевск"):
		correct(-2)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Пятигорск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Кострома"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ташкент"):
		correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Алматы"):
		correct(2)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Madrid"):
		correct(-2)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Междуреченск"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Баку"):
		correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ногинск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Югорск"):
		correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Тверь"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Кунгур"):
		correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Череповец"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Пушкин"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Серпухов"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Вольск"):
		correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Таганрог"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Астрахань"):
		correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Нефтекамск"):
		correct(1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Партизанск"):
		correct(6)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ивангород"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Железногорск"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Майкоп"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Русский"):
		correct(6)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Каменск-Шахтинский"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Вологда"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Коломна"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Павловск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Углич"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Севск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Лениногорск"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Карымское"):
		correct(5)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Петропавловск-Камчатский"):
		correct(8)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Красногвардейское"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Искитим"):
		correct(2)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Ахтубинск"):
		correct(0)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Рубцовск"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Бугульма"):
		correct(-1)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Саяногорск"):
		correct(3)
        break
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Сергиев Посад"):
		correct(-1)
        brea
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Мыски"):
		correct(3)
        brea
		
    case document.getElementsByClassName("look_for")[0].innerText.search("Романовская"):
		correct(obGorVr.Романовская)
        brea
		
      default:
      // aas
      break
  }
}
  
  function correct(c, d){
	  
	    if(d){
			
			jamm = Tm.getHours() + c
		
			if(jamm > 23){
				jamm = jamm - 24
			}
			document.getElementsByClassName("user-town")[0].innerText = document.getElementsByClassName("user-town")[0].innerText + " " + + (jamm) + '\:' + rop;
		}else{
		
		jamm = Tm.getHours() + c
		
        if(jamm > 23){
            jamm = jamm - 24
        }
		
		document.getElementsByClassName("look_for")[0].innerText = document.getElementsByClassName("look_for")[0].innerText + " " + (jamm) + '\:' + rop;
		}
  }
  
  /*
  let obGorVr = {
    "Романовская":-1,
	"Новосибирск":3,
    "Самара":"bb"
  }
  */
