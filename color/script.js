window.onload = function() {
  let heading = document.getElementById("title-heading");
  heading.innerText = "Jogo da Seleção de Cores da turma do milho 🌽";

  let colorSection = document.querySelector("#color-section")
  
  colorSection.addEventListener("mouseover", function(event) {
    let selectedColorSpan = document.querySelector(".selected-color");

    let className = event.target.className
    
    if (className) {
      selectedColorSpan.innerText = className;
      selectedColorSpan.style.color = className;
    } else {
      selectedColorSpan.innerText = "None!";
    }
    
  });
  
}
