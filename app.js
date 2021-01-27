var message = 'you are in Dounts recipe page ';
console . log (message);
document. write (message);

var yourIngrediants = prompt (`whats the perfict degree to bake dounats?is it 350,250,450`);
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
alert (userAge + ` Welcom Aboard!` );

