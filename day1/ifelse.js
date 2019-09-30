//з1
var num = prompt('Номер квартиры: ');

if(num >= 1 && num <= 20){
	alert('Первый подьезд');
}
if(num >= 21 && num <= 48){
	alert('Второй подьезд');
}
if(num >= 49 && num <= 90){
	alert('Третий подьезд');
}
if(num > 90 || num < 1){
	alert('404 квартира не найдена');
}

//з2
var login = prompt('Логин: ');
var pass = prompt('Пароль: ');

if(	(login === 'toma' && pass === '123')||
	(login === 'petya' && pass === '777')||
	(login === 'olya' && pass === '456'))
{
	alert('WELCOME!');
}
else{
	alert('WRONG LOGIN/PASS');
}
//з3
var year = prompt('Год Рождения: ');
if ((2019 - year)>= 16) {
	alert('WELCOME!');
}
else{
	alert('GROW UP AND RETURN');
}
//з4
var exp = prompt('Cтаж работы: ');
if(exp >= 0 && exp < 3){
	alert('0%');
}
if(exp >= 3 && exp < 10){
	alert('10%');
}
if(exp >= 10 && exp < 20){
	alert('20%');
}
if(exp >= 20){
	alert('25%');
}
if(exp < 0){
	alert('Error');
}