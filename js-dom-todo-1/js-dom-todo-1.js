
  var nuevoP = document.createElement("p");
  nuevoP.style.color = 'blue';
  var texto1 = document.createTextNode("Paragraph with an ");
  var texto3 = document.createTextNode(" word and ");

  var nuevoEm = document.createElement("em");
  var texto2 = document.createTextNode("emphasized");
  nuevoEm.appendChild(texto2);

  var nuevoStrong = document.createElement("strong");
  var texto4 = document.createTextNode(" others more emphasized ");
  nuevoStrong.appendChild(texto4);

  nuevoP.appendChild(texto1);
  nuevoP.appendChild(nuevoEm);
  nuevoP.appendChild(texto3);
  nuevoP.appendChild(nuevoStrong);

  document.body.appendChild(nuevoP);
