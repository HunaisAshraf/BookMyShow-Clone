let list = document.querySelectorAll(".city");
let place = document.getElementById("place");


for (i = 0; i < list.length; i++) {
  let text = list[i].textContent;
  list[i].addEventListener("click", () => {
    place.textContent = text;
  });
}


function handleInput(){
    let input = document.getElementById("input").value;
    place.innerText = input;
}

