$(document).ready(function() {
    console.log('pronto!');

    // blocco che riguarda il click sulla freccia di destra
    $('.right_arrow').click(function() {

        //creo una variabile che prende l'immagine con classe .active
        var activePic = $(img.active);

        // all'immagine visualizzata viene tolta la classe .active e la si assegna all'immagine successiva ( se c'è, verificabile con un if/else)
        activePic.removeClass('active');
    }
    );



}
);
