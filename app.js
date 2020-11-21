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
    puedeComprar: function puedeComprar(auto, persona){
       return auto.precio <= persona.capacidadDePagoTotal 
       && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas;
},
    autosQuePuedeComprar: function autosQuePuedeComprar(persona){ 
    let autosParaLaPersona = autos.filter(auto => this.puedeComprar(auto, persona))
    return autosParaLaPersona;
    },
};


console.log(concesionaria.autosQuePuedeComprar(personas[0]));

/* Agregando funcionalidades
Ahora, te comprometiste a realizarla. Así que manos a la obra. 
Hay que

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior..*/





