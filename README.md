# Репозиторий группы 1R IT-Квантума г. Краснодар

### 12.01.2021
JavaScript - fetch api
Задание в папке 12-01-2021 в файле index.html 

### 15.01.2021
- Скачать этот репозиторий
- Скопировать папку "15-01-2021" в свой репозиторий
- Выполнить задание в файле index.html
    1. Использовать api https://official-joke-api.appspot.com/jokes/random
    2. Дублировать index.html, назвать index2.html  
    
    Использование API Agify (Простой API для предсказания возраста человека по его имени)  
    https://agify.io/  
    
    - Добавить на страницу поле для ввода (input type="text") с классом "input-name"  
    ~~~
    <input class="input-text" type="text" name="" id="">  
    ~~~
    - С помощью JS поместить в переменную name значение поля для ввода   
    let input = document.querySelector('.input-name');  // Это само поле для ввода  
    //let name = input.value; // Это значение из этого поля  
    Подробнее: https://htmlacademy.ru/courses/343/run/15  
    - Использовать запрос к API Agify  
    https://api.agify.io?name=michael  
    Вместо Michael необходимо использовать значение переменной name, это позволит предсказать возраст человека по имени:  
    let response = await fetch('https://api.agify.io?name=' + name);  
    - Посмотреть, какие поля выдаёт API и изменить const joke = jsonResponse.setup; , чтобы всё работало  



## Список репозиториев для проверки домашнего задания:
1.	Шпарага Григорий Сергеевич  
    https://github.com/Gend0lf/Homework
2.	Ковалев Иван Андреевич
3.	Колтун Константин Сергеевич
4.	Волков Кирилл Романович
5.	Бурула Пётр Владимирович  
    https://github.com/Vailcentel/homework
6.	Липский Ярослав Максимович
7.	Стариков Александр Юрьевич
8.	Тороп Леонид Николаевич  
    https://github.com/Leonid2000/HomeWork
9.	Носырев Ярослав Алексеевич  
    https://github.com/ABCDEFG-e/Homework
10.	Рощин Кирилл Денисович  
    https://github.com/ailen-alt/homework_rk
11.	Лесников Алексей Дмитриевич
12.	Матлин Павел Игоревич
13.	Воронкин Артем Александрович
14.	Гончаров Андрей Сергеевич
15.	Окованцев Арсений Сергеевич
16.	Рогов Антон Романович
