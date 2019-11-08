function getBaseLog(base, numero) {
    return Math.log(numero) / Math.log(base);
  }
  
  basex=prompt('Ingrese la base logaritmica que se desea calcular de los primeros 10 números naturales');
  console.log('El logaritmo base '+basex+' de los primeros 10 números naturales se presenta a contunuación');
  for(i=1;i<=10;i++){
    console.log('log'+basex+' '+i+' = '+getBaseLog(basex, i));
  }
  