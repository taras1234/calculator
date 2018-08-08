const display = document.querySelector('.calc .display')

document.querySelectorAll('.calc .num, .calc .op')
    .forEach( btn => btn.addEventListener('click', numOperClick));
function numOperClick(e) {
    display.value += e.target.innerText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', function () {
        display.value = eval(display.value);
    })

document.querySelector('.calc .ac')
    .addEventListener('click', function () {
        display.value = ' ';
    })
    
document

// const clearButton = document.getElementsByClassName('ac');

// for(let i = 0; i < clearButton.length; i++){

//   clearButtons[i].onclick = function(e){
  
//     let selector = this.getAttribute("data-clear-selector");
    
//     document
//       .querySelectorAll(selector)
//       .forEach(function(item, idx){
//         item.value = "0";
//       });
//   };
// }