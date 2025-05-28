document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');


     //Apre il menu quando viene cliccata l'icona
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Chiude il menu quando viene cliccato un link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

const form = document.querySelector('form')

//funziona per controllare se l'utente ha selezionato un valore per ognuno dei menu a tendina
function validateForm() {
    const peopleNumber = document.querySelector('#people-number').value
    const prenotationTime = document.querySelector('#prenotation-time').value
    //se non ha selezionato il numero di persone manda un alert di errore
    if(!peopleNumber.trim()){
        alert("Selezionare il numero di persone!")
    }
     //se non ha selezionato l'orario di prenotazione manda un alert di errore
    if(!prenotationTime.trim()){
        alert("Selezionare l'orario!")
    }
    
}

form.addEventListener('submit', function (event) {
    event.preventDefault()
    validateForm()
})