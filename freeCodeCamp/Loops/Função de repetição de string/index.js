function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  
  let resultado = "";
  for (let i = 0; i < num; i++) {
    resultado += str;
  }
  
  return resultado;
}