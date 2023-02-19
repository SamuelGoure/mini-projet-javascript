// déclaration des variables

var sp, btn_start, btn_stop, ms, s, mn, h, t;

// function

window.onload = function(){
     sp =  document.getElementsByTagName('span');
     btn_start = document.getElementById('all_buttonn_start');
     btn_stop = document.getElementById('all_buttonn_stop');
    t;
   ms = 0, s=0, mn=0,h=0;
}

// mettre en place le compteur

function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1;
        s+=1
    }
    if(s == 60){
        s=0;
        mn+=1
    }
    if(mn == 60){
        mn= 0;
        h+=1;
    }

    // Insertion des valeurs dans les spans[0]

    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}

// bouton start

function start(){
    t =setInterval(update_chrono,100);
    btn_start.disabled = true
}

//stopper le chrono

function stop (){
    clearInterval(t);
    btn_start.disabled = false
}

// initialisation des valeurs du compteurs

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s=0, mn=0,h=0;

   // insertion de nouvelles valeurs 
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;

}