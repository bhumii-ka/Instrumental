var allKeys= document.getElementsByClassName("button");
var floorTom;
var RideCym;
var MidTom;
var base;
var highTom;
var snare;
var crashCym;
var hihat;
function mDown(obj){
    obj.classList.add("clik");
}
function mUp(obj){
    obj.classList.remove("clik");
}
function kDown(e){
    let key= e.key;
    if(key=='a'|| key=='A'){
        allKeys[0].classList.add("clik");
        floorTom=document.getElementById('floor-tom');
        floorTom.play();
    }
    if(key=='s'|| key=='S'){
        allKeys[1].classList.add("clik");
        RideCym=document.getElementById('ride-cymbal');
        RideCym.play();
    }
    if(key=='d'|| key=='D'){
        allKeys[2].classList.add("clik");
        MidTom=document.getElementById("mid-tom");
        MidTom.play();
    }
    if(key=='f'|| key=='F'){
        allKeys[3].classList.add("clik");
        base=document.getElementById('base');
        base.play();
    }
    if(key=='g'|| key=='G'){
        allKeys[4].classList.add("clik");
        highTom=document.getElementById('high-tom');
        highTom.play();
    }
    if(key=='h'|| key=='H'){
        allKeys[5].classList.add("clik");
        snare=document.getElementById('snare');
        snare.play();
    }
    if(key=='j'|| key=='J'){
        allKeys[6].classList.add("clik");
        crashCym=document.getElementById('crash');
        crashCym.play();
    }
    if(key=='k'|| key=='K'){
        allKeys[7].classList.add("clik");
        hihat=document.getElementById('hi-hat');
        hihat.play();
    }

}
function kUp(e){
    let key= e.key;
    if(key=='a'|| key=='A'){
        allKeys[0].classList.remove("clik");
        floorTom.load();

    }
    if(key=='s'|| key=='S'){
        allKeys[1].classList.remove("clik");
        RideCym.load();
    }
    if(key=='d'|| key=='D'){
        allKeys[2].classList.remove("clik");
        MidTom.load();
    }
    if(key=='f'|| key=='F'){
        allKeys[3].classList.remove("clik");
        base.load();
    }
    if(key=='g'|| key=='G'){
        allKeys[4].classList.remove("clik");
        highTom.load();
    }
    if(key=='h'|| key=='H'){
        allKeys[5].classList.remove("clik");
        snare.load();
    }
    if(key=='j'|| key=='J'){
        allKeys[6].classList.remove("clik");
        crashCym.load();
    }
    if(key=='k'|| key=='K'){
        allKeys[7].classList.remove("clik");
        hihat.load();
    }

}
window.addEventListener('keydown',kDown);
window.addEventListener('keyup',kUp);