/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 0.0010000

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */



function convertToGrams (event) {
    const kgInputValue = event.target.value;
};

document.getElementById('kgInput').addEventListener('input',function(e){
            let kg= e.target.value;
            let input = document.getElementById('Input');
            let data = input.value;
            document.getElementById('gramsOutput').innerHTML= kg/0.0022046;
            document.getElementById('lbOutput').innerHTML= kg/2.2046;
            document.getElementById('ozOutput').innerHTML= kg*16;
            document.getElementById('output').style.visibility='visible';

            if (data =='') {
                document.getElementById('output').style.visibility='hidden';
            }
        });