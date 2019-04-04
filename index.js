
document.addEventListener("DOMContentLoaded",() => {
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);

  let mainHeader = document.createElement("h1");
  mainHeader.innerText = "OUR SITE";
  document.body.appendChild(mainHeader);

  function msg(){
   alert("WHAT IS GOING ON?!!!");
 }
}
    })
