var message = 'you are in Dounts recipe page ';
console . log (message);
document. write (message);

/*var yourIngrediants = prompt (`whats the perfict degree to bake dounats?is it 350,250,450`);
console . log (yourIngrediants);

if (yourIngrediants > 350){
message = `Nop! they will burn out`;}
else if (yourIngrediants < 350 ) { 
    message =  `Opps! they will never cook`
} else if (yourIngrediants = 350){
    message = `Correct!! youll have a nice golden ones `;
}
else {
    message = `try again`
} 
document.write('<h2>' + message +'</h2>');

var sweetName = prompt (` whats your favouirte sweets`);
alert (sweetName + ` is a great choice!` );

var userAge = prompt (`how old are you `);
console. log (userAge);
alert (userAge + ` Welcom Aboard!` );*/


var askUser = prompt (`Do you want to see the recipe? Yes / No`);

while (askUser !== 'yes' &&  askUser !== `no`){ 
    askUser = prompt (`please answer only Yes or No`);
}

var answer = ``;
if (askUser === `yes`){
    answer = '<img src="images /fd8f4e900d5e3c643a2a20192563ac8a.jpg";width="100px" />'; 
    document.write (answer);
}
else if ( askUser === `no`){
    answer = '<a href ="https://www.delish.com/cooking/recipe-ideas/g3246/easy-desserts/" /a>' + `check this link` ;
    document.write (answer);
}
    var results ;
var recipeNumber = prompt (`how many recipes you want to see?`);
for(var i = 1 ; i<recipeNumber ; i++){
    result = answer ;
    document. write (result);
}




