var 
money = prompt('Ваш бюджет на месяц?'),
time = prompt('Введите дату в формате YYYY-MM-DD');
var questionOne = prompt('Введите обязательную статью расходов в этом месяце');
var questionTwo = prompt('Во сколько обойдется?');
var appData ={
budget: money,
timeData: time,
expenses : {
    questionOne : questionTwo
},
optionalExpenses:null,
income :[],
savings:false
};
alert(money/30);
