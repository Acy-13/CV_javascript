document.getElementById("dateTime").innerText = new Date().toLocaleString();

/*Test på en eventlistener, då användaren får ett lyckotal när hen trycker på knappen
Om en paragraf med turnummer redan finns så skrivs texten över med nytt turnummer
Om en paragraf med turnummer inte finns så skapas den och får id och ett turnummer som textvärde
*/
document.querySelector("#myLuck").addEventListener("click", () => {
  const heroContent = document.querySelector(".hero-content");
  const paragraph = heroContent.querySelector("#number");
  const newLuckyNumber = Math.floor(Math.random() * 100) + 1;

  if (paragraph) {
    paragraph.innerText = newLuckyNumber;
  } else {
    const newParagraph = document.createElement("p");
    newParagraph.id = "number";
    newParagraph.innerText = newLuckyNumber;
    heroContent.appendChild(newParagraph);
  }
});
