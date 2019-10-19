//Declaración de variables

var nombreUsuario = 'Josué Oroya';
var saldoCuenta = 10000;
var limiteExtraccion = 4000;
//Variables para pago de servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var numTelefono = 1122223333;

var pass = 1234; 


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function sumarDineroCuenta(cantidad) {
    saldoCuenta = saldoCuenta + cantidad;
}
function restarDineroCuenta(cantidad) {
    saldoCuenta = saldoCuenta - cantidad;
}
function haySaldoDisponible(cantidad) {
    if (cantidad <= saldoCuenta) {
        return true;
    }
    else {
        return false;
    }
}
function multiploDeCien(cantidad) {
    if (cantidad % 100 === 0) {
        return false;
    }
    else {
        return true;
    }
}

function validarValor(valorIngresado){
    if(!isNaN(valorIngresado)){ 
        return true;
    }
    else{
        return false;
    }
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var cantidad = prompt();
    cantidad = parseInt(cantidad);
    validarValor(cantidad);
    if(validarValor(cantidad)){
        limiteExtraccion = cantidad;
        actualizarLimiteEnPantalla();
    }
    else{
        alert('El Valor ingresado no es un número');
    }
    

}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var cantidad = prompt();
    cantidad = parseInt(cantidad);
    if (validarValor(cantidad)) {
        if (cantidad <= limiteExtraccion) {
            if (multiploDeCien(cantidad)) {
                alert('Solo puedes extraer billetes de 100');
            }
            else if (haySaldoDisponible(cantidad)) {
                restarDineroCuenta(cantidad);
                alert('Has retirado: $' + cantidad + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Tu saldo actual es: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert('El saldo en la cuenta es insuficiente');
            }
        } else {
            alert('La cantidad ingresada es mayor a tu límite de extracción');
        }        
    }
    else {
        alert('El Valor ingresado no es un número');
    }
    
}

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var cantidad = prompt();
    cantidad = parseInt(cantidad);
    if (validarValor(cantidad)) {
        sumarDineroCuenta(cantidad);
        alert('Has depositado: $' + cantidad + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Tu saldo actual es: $' + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
    else {
        alert('El Valor ingresado no es un número');
    }
}

function pagarServicio() {
    var opcion = prompt('Ingrese el número que corresponda con el servicio que querés pagar\n1-Agua\n2-Luz\n3-Internet\n4-Teléfono\n');
    opcion = parseInt(opcion);
    switch (opcion) {
        case 1:
            if (haySaldoDisponible(agua)) {
                saldoAnterior = saldoCuenta;
                restarDineroCuenta(agua);
                alert('Has pagado el servicio de agua\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado $' + agua + '\nTu saldo actual es: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else {
                alert('El saldo en la cuenta es insuficiente');
            }

            break;
        case 2:
            if (haySaldoDisponible(luz)) {
                saldoAnterior = saldoCuenta;
                restarDineroCuenta(luz);
                alert('Has pagado el servicio de luz\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado $' + luz + '\nTu saldo actual es: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else {
                alert('El saldo en la cuenta es insuficiente');
            }

            break;
        case 3:
            if (haySaldoDisponible(internet)) {
                saldoAnterior = saldoCuenta;
                restarDineroCuenta(internet);
                alert('Has pagado el servicio de internet\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado $' + internet + '\nTu saldo actual es: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else {
                alert('El saldo en la cuenta es insuficiente');
            }
            break;
        case 4:
            if (haySaldoDisponible(telefono)) {
                saldoAnterior = saldoCuenta;
                restarDineroCuenta(telefono);
                alert('Has pagado el servicio de telefono\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado $' + telefono + '\nTu saldo actual es: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else {
                alert('El saldo en la cuenta es insuficiente');
            }
            break;
        default:
            alert('El número que ingresaste no coincide con una de las opciones a abonar');
            break;
    }
}

function transferirDinero() {
    var cantidad = prompt('Ingresá la cantidad que deseás tranferir');
    cantidad = parseInt(cantidad);
    if (validarValor(cantidad)) {
        if (haySaldoDisponible(cantidad)) {
            var cuentaAmiga = prompt('Ingresá el número de la cuenta amiga a la que querés tranferir:');
            cuentaAmiga = parseInt(cuentaAmiga);
            switch (cuentaAmiga) {
                case cuentaAmiga1:
                    restarDineroCuenta(cantidad);
                    alert('Se ha transferido $' + cantidad + '\nCuenta destino: ' + cuentaAmiga);
                    actualizarSaldoEnPantalla();
                    break;
                case cuentaAmiga2:
                    restarDineroCuenta(cantidad);
                    alert('Se ha transferido $' + cantidad + '\nCuenta destino: ' + cuentaAmiga);
                    actualizarSaldoEnPantalla();
                    break;
                default:
                    alert('Solo puede transferirse dinero a una cuenta amiga');
                    break;
            }
        }
        else {
            alert('Tu saldo es insuficiente para hacer la transferencia');
        }
    }
    else {
        alert('El Valor ingresado no es un número');
    }
}

function recargaCelular(){
    var cantidad = prompt('Tu línea registrada es '+ numTelefono+ '\nIngresá el importe de la recarga: ');
    cantidad = parseInt(cantidad);
    if (validarValor(cantidad)) {
        if(haySaldoDisponible(cantidad)){
            restarDineroCuenta(cantidad);
            actualizarSaldoEnPantalla();
        }else{
            alert('El saldo en tu cuenta es insuficiente');
        }
    }
    else {
        alert('El Valor ingresado no es un número');
    }
    
}

function iniciarSesion() {
    var codigo = prompt('Ingresá el código de tu cuenta');
    codigo = parseInt(codigo);
    if((codigo===pass)&&(Number(codigo))){
        alert('Bienvenido/a '+nombreUsuario+'ya puedes comenzar a realizar operaciones');
    }
    else{
        alert('Código incorrecto, tu dinero ha sido retenido por cuestiones de seguridad');
        restarDineroCuenta(saldoCuenta);
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}