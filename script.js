//first input
const secondInput = document. createElement('input');
document.body.appendChild(secondInput);
//create button
const fourthInput = document .createElement('button');
document.body.appendChild(fourthInput);
fourthInput.innerHTML ="BUTTON"
secondInput.addEventListener('input',user_action);

function user_action(event){
    console.log(event.target.value)
};