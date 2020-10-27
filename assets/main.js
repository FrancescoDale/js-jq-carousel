$(document).ready(function() {
    console.log('pronto!');

    // blocco che riguarda il click sulla freccia di destra
    $('.right_arrow').click(function() {

        //creo una variabile che prende l'immagine con classe .active
        var activePic = $('img.active');

        // all'immagine visualizzata viene tolta la classe .active e la si assegna all'immagine successiva ( se c'è, verificabile con un if/else)
        activePic.removeClass('active');

        //verifica se esiste una img successiva, se esiste gli assegna la classe .active

        if (activePic.next('img').length) {
            activePic.next('img').addClass('active');
        }

        // altrimenti, la classe active viene assegnata alla prima immagine in modo da creare un loop
        else {
            $('.pics_container :first-child').addClass('active');
        }
    }
    );



}
);
