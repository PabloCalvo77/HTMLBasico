let slideIndex = 0;
showSlides();
minDateReserva();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


function minDateReserva(){
    let reservaInput = document.querySelector('#reserva');
    reservaInput.setAttribute("min",setPeriod(0))
    reservaInput.setAttribute("max",setPeriod(7))
}

  function setPeriod(numOfDays, date = new Date()) {
    date.setDate(date.getDate() + numOfDays);
    date = date.toISOString().split("T")[0];

    return date;
  }

