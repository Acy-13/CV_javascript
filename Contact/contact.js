
//Alert-ruta kommer upp om du trycker på Submit utan att ha fyllt i rätt, men efter att jag lade till required så kommer det aldrig aktiveras. 
function validateForm() {
    const y = document.forms["myForm"]["message", "email"].value;
    if (y === "") {
      alert("Fields marked with * must be filled out");
      return false;
    }
  }
