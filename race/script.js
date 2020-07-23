window.onload = function() {
  let button = document.querySelector("#start-race-btn");
  
  let car1 = document.querySelector(".car1");
  car1.style.marginLeft = 0;

  let car2 = document.querySelector(".car2");
  car2.style.marginLeft = 0;

  function resetMargin(car1, car2) {
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
  }

  button.addEventListener("click", function() {
    let car1Margin = parseInt(car1.style.marginLeft);
    let car2Margin = parseInt(car2.style.marginLeft);

    car1.style.marginLeft = car1Margin + Math.random() * 100 + "px";
    car2.style.marginLeft = car2Margin + Math.random() * 100 + "px";

    if (car1Margin > window.innerWidth) {
      alert("CARRO 1 GANHOU");
      resetMargin(car1, car2);
    } else if (car2Margin > window.innerWidth) {
      alert("CARRO 2 GANHOU");
      resetMargin(car1, car2);
    }
  });
}