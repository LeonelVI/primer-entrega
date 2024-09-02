let bandera = true
let productos = ["Mates", "Termos", "Bombillas", "Yerberos"]
let metodosDePago = ["Debito", "Mercado Pago", "Efectivo"]
let totalCompra = 0
let carrito = []


function sumaTotal (precio, nombre, cantidad = 1 ) {
    totalCompra += precio * cantidad
    carrito.push(nombre)
}

function logicaDeCompra(producto){
    let cantidad = 1
    switch(producto){
        case "mates":
            cantidad = prompt("¿Cuantos " + producto +  " queres comprar?")
            sumaTotal(35000, producto, cantidad)
            break
        case "termos":
            cantidad = prompt("¿Cuantos " + producto +  " queres comprar?")
            sumaTotal(60000, producto, cantidad)
            break
        case "bombillas":
            cantidad = prompt("¿Cuantas " + producto +  " queres comprar?")
            sumaTotal(20000, producto, cantidad)
            break
        case "yerberos":
            cantidad = prompt("¿Cuantos " + producto +  " queres comprar?")
            sumaTotal(7000, producto, cantidad)
            break
        default:
            alert("No tenemos ese producto")
            break
    }
}

function informacionPago(metodo){
    if(metodo === "Mercado Pago"){
        totalCompra = totalCompra * 1.10
    }
    alert("El total a pagar es de " + totalCompra)
    bandera = !confirm("¿Confirmamos la compra?")
}

function logicaDePago(metodo){
    switch(metodo){
        case "debito":
            informacionPago(metodo)
            break
        case "mercado pago":
            informacionPago(metodo)
            break
        case "efectivo":
            informacionPago(metodo)
            break
        default:
            alert("No tenemos ese metodo de pago")
            break
    }
}


while(bandera){
    const opcionElegida = prompt("¿Que quiere comprar?  \n\n- " + productos.join("\n- ")).toLowerCase()
   
    logicaDeCompra(opcionElegida)
   
    bandera = confirm("¿Quiere seguir comprando?")
}

alert("El total de compra es de " + totalCompra)
alert("Productos añadidos recientemente son: \n " + carrito.join("\n"))

bandera = true

while(bandera){
    const metodoDePago = prompt("¿Como quiere pagar? \n\n- " + metodosDePago.join("\n- ")).toLowerCase()

    logicaDePago(metodoDePago)

    if(bandera){
        bandera = !confirm("¿Cancelar compra?")
    }
}


// bandera = alert("Compra finalizada \n\n En unos minutos le generaremos su factura")