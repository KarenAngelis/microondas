//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão); 


// ------- // ------ // ------ // ------ //

//1 - Pipoca – 10 segundos (padrão);


function pipoca (tempo){ //testado ok
  if (tempo == 10)
  return "Pronto";

else if (tempo == 10 * 2) { //testado ok
  return "Comida queimou"
}
else if (tempo <= 9) { // testado ok
  return "tempo insuficiente";
}
else if (tempo === 10 * 3) {  // testado ok
  return "Kabumm"
}
else if (carne) {
  return "Prato inexistente"; 
}
else {
  return "Prato pronto, bom apetite!!!"
}};

console.log(pipoca(10*3));



