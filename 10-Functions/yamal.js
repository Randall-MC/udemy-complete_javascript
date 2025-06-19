const validar = function (numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Número es múltiplo de 3 y de 5');
    }

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log('Número es múltiplo de 3 pero no de 5');
    }
  }
};

validar(15);
