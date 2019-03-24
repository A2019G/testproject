

let 
money, time;

function start(){
    money = +prompt('Сколько денег зарабатываете в месяц?', '');
    time = prompt('Введите дату в формате: DD-MM-YYY','');
    while (isNaN(money) || money == null || money ==''){
        money = +prompt('Сколько денег зарабатываете в месяц?', '');
    }
}
start();




let appData={
    budget: money,
    expenses: {},
    optionalExpenses:{},
    income: [],
    timeData: time,
    saving: true
};
function chooseExpenses(){
    for (let i =0; i< 2; i++){
        let questionOne = prompt('Введите обязательную статью расходов в этом месяце', ''),
            questionTwo = prompt('Во сколько обойдется?', '');
        if (typeof(questionOne) === 'string' && typeof(questionOne) != null && typeof(questionTwo) != null &&
        questionOne != '' && questionTwo != '' && questionOne.length < 50){
            console.log('done');
            appData.expenses[questionOne] = questionTwo;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
if(appData.moneyPerDay < 100){
    console.log('Маленький уровень достатка');
}else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка');

}else if(appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка');

}else {

    console.log('Произошла Ошибка ');
}
}
detectLevel();

function optionalExpenses(){
    let 
        one =  +prompt('Есть еще разходы? если нет, жми отмена, если есть, сумму пиши'),
        two =  +prompt('Есть еще разходы? если нет, жми отмена, если есть, сумму пиши'),
        three =  +prompt('Есть еще разходы? если нет, жми отмена, если есть, сумму пиши');
        appData.optionalExpenses[1]= one;
        appData.optionalExpenses[2]= two;
        appData.optionalExpenses[3]= three;
}
optionalExpenses();

function checkSavings(){
    if(appData.saving == true){
        let save = +prompt('Какая сумма накоплений'),
            percent=+prompt('Под какой Процент?');

        appData.monthIncome = save / 100 / 12 * percent ;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }

}
checkSavings();