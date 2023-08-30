

//o motivo de não colocarmos "()" ao lado
                                                                        // da função no "addEventListener", é 
                                                                        // porque não queremos que a função seja 
                                                                        // chamada toda vez que a página é atualizada.



 var querySlct = document.querySelectorAll(".drum");
    for (var i = 0; i < querySlct.length; i++) {
        querySlct[i].addEventListener("click", function(){
           
           var drumsButtons = this.innerHTML; 
            
           makingSound(drumsButtons); // chamar a função aqui também vai fazer com o que os Soms 
                                    //sejam chamados pelos botões 'w, a, s, d, j, k,l'
         });
    }

document.addEventListener("keypress", function(event){

    makingSound(event.key); // o addEventListener está buscando uma tecla do keyboard e passando para a função validar

});

function makingSound(key) { //função que verifica/toca o audio correspondente
                            // pelo Switch qual 'key' está sendo chamada via parâmetro
    
    var tom1 = new Audio('sounds/tom-1.mp3');
    var tom2 = new Audio('sounds/tom-2.mp3');
    var tom3 = new Audio('sounds/tom-3.mp3');
    var tom4 = new Audio('sounds/tom-4.mp3');
    var snare = new Audio('sounds/snare.mp3');
    var crash = new Audio('sounds/crash.mp3');
    var kick = new Audio('sounds/kick-bass.mp3');
    switch (key) {
     case 'w':
         tom1.play();
     break;
     case 'a':            
         tom2.play();
     break;
     case 's':              
         tom3.play();
     break;
     case 'd':              
         tom4.play();
     break;
     case 'j':               
         snare.play();
     break;
     case 'k':             
         crash.play();
     break;
     case 'l':             
         kick.play();
     break;

     default:
         break;
    }

}


