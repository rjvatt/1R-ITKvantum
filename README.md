# Репозиторий группы 1R IT-Квантума г. Краснодар

## 12.01.2021
JavaScript - fetch api
Задание в папке 12-01-2021 в файле index.html 

## 15.01.2021
- Скачать этот репозиторий
- Скопировать папку "15-01-2021" в свой репозиторий
- Выполнить задание в файле index.html
    1. Использовать api https://official-joke-api.appspot.com/jokes/random
    2. Дублировать index.html, назвать index2.html  
    
    Использование API Agify (Простой API для предсказания возраста человека по его имени)  
    https://agify.io/  
    
    - Добавить на страницу поле для ввода (input type="text") с классом "input-name"  
    ~~~html
    <input class="input-name" type="text" name="" id="">  
    ~~~
    - С помощью JS поместить в переменную name значение поля для ввода   
    ~~~js
    let input = document.querySelector('.input-name');  // Это само поле для ввода  
    let name = input.value; // Это значение из этого поля  
    ~~~
    
    Подробнее: https://htmlacademy.ru/courses/343/run/15  
    - Использовать запрос к API Agify  
    https://api.agify.io?name=michael  
    Вместо Michael необходимо использовать значение переменной name, это позволит предсказать возраст человека по имени:  
    ~~~js
    let response = await fetch('https://api.agify.io?name=' + name);  
    ~~~
    - Посмотреть, какие поля выдаёт API и изменить 
    ~~~js
    const joke = jsonResponse.setup; 
    ~~~

## 19.01.2021
Сервис, который будет пропускать на мероприятие по QR коду  

- Страница, где есть ОДНА кнопка - получить билет;
- Получение QR-кода: 
    - Показать на странице сайта  
    - Скачать  
    - **Сохранять куда-то уникальный номер**
- Что зашифровано в QR-коде?
    - **Уникальный номер**
- Как проверить QR-код? 
    - **Проверять, выдавали ли такой номер?**
    - *Проверять, не прошло ли мероприятие?*

1. С точки зрения посетителя:
    1. Зайти на сайт
    2. Нажать на кнопку "Получить билет"
    3. Получить страницу с QR-кодом, и скачать его (скачивание начиналось автоматически)
2. Посетитель со стороны сервера:
    1. При нажатии на кнопку необходимо отравить запрос на сервер на получение уникального номера.
    2. Сервер в ответе отправляет сгенерированный уникальный номер
    3. На стороне клиента (в браузере) мы генерируем QR-код с зашифрованным уникальным номером
    4. Размещаем картинку на странице и сохраняем QR код

3. Что должен уметь сервер?
    1. Принимать запросы
        - На получение уникального номера
            - в ответе - номер
        - На проверку уникального номера
            - в ответе - можно/нельзя пройти
4. Проверяющий: 
    1. Зайти на сайт
    2. Нажать на кнопку "Проверить билет"
    3. Открыть камеру
    4. Навестись на QR-код и расшифровать его
    5. Отправить запрос на сервер с уникальным номером
    6. Получить ответ, можно ли пройти

Необходимый инструментарий: 
- JS и выполнение запросов 
- NodeJS + База данных
- HTML + CSS

### Задание на дом (19.01.2021):
- Доделать предыдущее ДЗ 
- Установить Node JS (https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi)

## Сервер nodeJS + Express

1. Установить NodeJS (https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi)
2. Создать новый репозиторий для сервера (или скачать старый)
3. Создать файл index.js
4. В новом репозитории открыть терминал и ввести команды: 
~~~
npm init
npm install express
~~~
5. Для запуска сервера: 
~~~
node index.js
~~~


### **Задание:**  

**Использовать следующий код сервера: (index.js)**  
~~~js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('please ddos grisha!')
})

app.get('/grisha', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('DDOS GRISHA!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
~~~

**JS Example: (index.html)**  
~~~html
<script>
    document.addEventListener('DOMContentLoaded', async function() {

        document.querySelector(".magic-button").addEventListener('click', async function() {
            //Заменить адрес, куда обращаемся
            //https://official-joke-api.appspot.com/jokes/random
            let response = await fetch('http://localhost:3000/');
            console.log(response);
            const textResponse = await response.text();
            console.log(textResponse);
            //Изменить перечень полей 
            document.querySelector(".joke").innerHTML = textResponse;
        })
    });
</script>
~~~

1. Написать программу-сервер, которая будет работать по трём маршрутам
2. Написать код на JS, который будет получать данные по одному из маршрутов


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

