var allKeys= document.getElementsByClassName("button");
var aadio=document.getElementsByTagName("audio");
var letters='ASDFGHJK';
var smallLetters='asdfghjk';

function mDown(obj){
    let text = obj.innerHTML[0];
    obj.classList.add("clik");
    for(i=0;i<=8;i++){
        if(text==letters[i]){
            let instru=aadio[i];
            instru.play();
        }
    }
}

function mUp(obj){
    let text = obj.innerHTML[0];
    obj.classList.remove("clik");
    for(i=0;i<8;i++){
        if(text==letters[i]){
            let instru=aadio[i];
            instru.load();
        }
    }
}

function kDown(e){
    let key= e.key;
    for(j=0;j<=8;j++){
        if(key==letters[j] || key==smallLetters[j]){
            allKeys[j].classList.add("clik");
            let instru=aadio[j];
            instru.play();   
        }
    }
}

function kUp(e){
    let key= e.key;
    for(j=0;j<=8;j++){
        if(key==letters[j] || key==smallLetters[j]){
            allKeys[j].classList.remove("clik");
            let instru=aadio[j];
            instru.load();   
        }
    }
}

window.addEventListener('keydown',kDown);
window.addEventListener('keyup',kUp);