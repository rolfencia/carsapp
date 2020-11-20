let autos = require('./autos');
let personas = require('./personas');

let concesionaria = {
   autos: autos,
   buscarAuto: function buscarAuto(numero) {
    let autoFiltrado = [];   
        autos.forEach(function(buscar){
            if (buscar.patente == numero) 
            autoFiltrado.push(buscar);
        } );
        return autoFiltrado != 0 ? autoFiltrado[0] : null;
      },
    venderAuto: function venderAuto(patente){ 
        let autoEncontrado = this.buscarAuto(patente); 
        autoEncontrado.vendido = true; 
        return autoEncontrado;
    },
    autosParaLaVenta: function autosParaLaVenta(){
        let autosParaVender = autos.filter(function(auto){
           return (auto.vendido == false);
        });
     return autosParaVender;
    },
    autos0KM: function autos0KM(auto){
        let auto0km = this.autosParaLaVenta().filter(function(auto){
            return auto.km < 100;
        });
      return auto0km;
    },
    listaDeVentas: function listaDeVentas(){
        let autosVendidos = [];
        autos.forEach(function(autos){
            if (autos.vendido == true){
                autosVendidos.push(autos.precio);
            }
    });
    return autosVendidos;
},
    totalDeVentas: function totalDeVentas(){
    let totalDeVentas = this.listaDeVentas().reduce(function (precio1, precio2){
        return precio1 + precio2;
    }, 0);
    return totalDeVentas;
    },
    // puedeComprar: function puedeComprar(auto, persona){
     //  let auto = this.buscarAuto;

        // };
};


console.log(concesionaria.puedeComprar("APL123", "Juan"));

/* funcionalidad para verificar si una persona puede comprar o no un auto. 
Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. 
Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. 
1- Una es el costo total: si el total de un auto excede lo que la persona considera caro, 
no va a comprar el auto. 
2- Otra condición es su capacidad de pago en cuotas: si la capacidad 
de pago en cuotas supera al costo de la cuota, va a poder pagarlo. 
3- Si ambas condiciones se cumplen, 
se realiza la compra.

función puedeComprar que reciba por parámetro un auto 
y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.*/





