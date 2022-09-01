const Gato = require("./Gato.js");

// Declaramos e inicializamos un objeto
// identidad
const toffee = new Gato();
const chucky = new Gato();

toffee.cambiaTuAnimo(false);

toffee.teEstanAcariciando();
chucky.teEstanAcariciando();


console.log(  toffee.comoTeLlamas()  );
console.log(  chucky.comoTeLlamas()  );

toffee.ahoraTeLlamas("toffee");
chucky.ahoraTeLlamas("chucky");

console.log(  toffee.comoTeLlamas()  );
console.log(  chucky.comoTeLlamas()  );