/*
//з5(1б)
function power(a,b){
	var c = Math.pow(a,b);
	return c;
};

var num = prompt('Число: ');
var step = prompt('Степiнь: ');
alert(power(num,step));

//з7(1б)
function ageCheck(age){
	if (age >= 16) {
		alert('WELCOME!');
	}	
	else{
		alert('SORRY, TOO YOUNG');
	}
}
var age = prompt('Your age: ');
ageCheck(age);

//з12(4б)
var cost = 0;
var calory= 0;
borgarCreator();

function borgarCreator(){
	borgarSize();
	addExtra();
	addSauces();
	alert("Ваш боргар готовий!");
	borgarParam();
}

function borgarSize(){
	alert('Добрий день! Виберіть розмір боргара.');
	var a = prompt('1.маленький(17uah, 250kkal)\n2.великий(25uah,340kkal)');

	if (a === '1') {
		cost += 17;
		calory += 250;
		alert('Ви вибрали маленький боргар');
	}
	else{
		cost += 25;
		calory += 340;
		alert('Ви не вибрали маленький боргар, тому купуєте великий у будь-якому випадку))))');
	}
	borgarParam();
}
function addExtra(){
	var extra = confirm ('Бажаєте добавити начинку?');
	while(extra){
		var add =prompt('1.сир(4uah, 25kkal)\n2.салат(5uah,5kkal)\n3.шинка(10uah,50kkal)\n4.тюхтєля по-київськи (100uah, 1000kkal)');

		if(add === '1'){
			cost += 4;
			calory += 25;
		}
		if(add === '2'){
			cost += 5;
			calory += 5;
		}
		if(add === '3'){
			cost += 10;
			calory += 50;
		}
		if(add === '4'){
			cost += 100;
			calory += 1000;
		}

		borgarParam();
		var extra = confirm ('Бажаєте добавити начинку?');
	}
}
function addSauces(){
	var extra = confirm ('Бажаєте добавити соус?');
	while(extra){
		var add =prompt('1.кетчуп(5uah, 5kkal)\n2.майонез(4uah,10kkal)\n3.сирний(5uah,5kkal)\n4.гірчиця (5uah, 5kkal)');
		if(add === '1'){
			cost += 5;
			calory += 5;
		}
		if(add === '2'){
			cost += 4;
			calory += 10;
		}
		if(add === '3'){
			cost += 5;
			calory += 5;
		}
		if(add === '4'){
			cost += 5;
			calory += 5;
		}
		borgarParam();
		var extra = confirm ('Бажаєте добавити соус?');
	}
}
function borgarParam(){
	alert('Ціна: ' + cost +'грн\nКалорійність: ' +calory+' ккал');
}
*/