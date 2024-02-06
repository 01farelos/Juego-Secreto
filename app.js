let numeroSecreto = 0
let intentos=0;
let listaNumeroSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento , texto){

    let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
    
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   // let numeroUsuario = document.getElementById('valorUsuario').value;
   /* console.log (numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    console.log(numeroUsuario === numeroSecreto);
    */
   console.log(numeroSecreto);
    console.log(intentos);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertastes El Numero en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es Menor');
        }else {
            asignarTextoElemento('p','El numero secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   // let valorCaja = document.querySelector('#valorUsuario');
   // valorCaja.value='';
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
       // return  Math.floor(Math.random() * 10)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numero 
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los núemros posibles');
    }else{
                //si el numero Generado está incluido en la lista 
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else
        {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
  
}

function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();

    //indicar mensaje de intervalo de numeros 
    // Generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

function  condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número secreto!' );
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


condicionesIniciales();

