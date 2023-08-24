

var querySlct = document.querySelectorAll(".drum");

 for (var i = 0; i < querySlct.length; i++) {
    querySlct[i].addEventListener("click", function(){
        
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();

     });
 }


//o motivo de não colocarmos "()" ao lado
                                                                        // da função no "addEventListener", é 
                                                                        // porque não queremos que a função seja 
                                                                        // chamada toda vez que a página é atualizada.

