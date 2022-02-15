const colors= ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
let index=0;
let msg;
function startCycle() {
    msg=window.setInterval(() => {
        if(index===colors.length) {
            index=0;
        }
        document.body.style.background=colors[index];
        console.log(index); 
        index++;
    }, 1 * 1000)
}

function stopCycle() {  
    window.clearInterval(msg);
}

let value=1;
function switchColor()
{
    if(value==1) {
        startCycle();
        value=0;
    }
    else {
        stopCycle();
        value=1
    }  
}
