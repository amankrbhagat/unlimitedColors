let generateColors = function() {
    let hexValues = '0123456789ABCDEF';
    let colors = "#";
    for(let i = 0; i < 6; i++){
        colors += hexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};
console.log(generateColors());


//// now we will generate colors using buttons

// let intervalId;
// const startChangingColor = function(){
//     function colorChange () { document.body.style.backgroundColor = generateColors();}
//     intervalId = setInterval(colorChange, 1000);
// }
// const stopChangingColor = function(){
//     clearInterval(intervalId);
// }


//  now to make it more efficient code then we can do this practice

let intervalId;
const startChangingColor = function(){
    function colorChange () { document.body.style.backgroundColor = generateColors();}
    if(!intervalId){ 
        intervalId = setInterval(colorChange, 1000);
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);