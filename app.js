class Producto {
   constructor(id, equipo, camiseta, precio) {
      this.id = id,
         this.equipo = equipo,
         this.camiseta = camiseta,
         this.precio = precio

   }

   mostrarInfoProducto() {
      console.log(`El equipo es ${this.equipo}, su camiseta es ${this.camiseta} y su precio es ${this.precio}`)
   }
}

const producto1 = new Producto(1, "River", "Suplente 2012", 16000)

const producto2 = new Producto(2, "River", "Titular 2001", 37000)

const producto3 = new Producto(3, "Barcelona", "Titular 2011", 18500)

const producto4 = new Producto(4, "Barcelona", "Suplente 2011", 15500)

const producto5 = new Producto(5, "Milan", "Arquero 2007", 32000)

const producto6 = new Producto(6, "Milan", "Titular 2011", 18000)

const ropero = []
ropero.push(producto1, producto2, producto3, producto4, producto5, producto6)




function verCatalogo(array) {
   console.log(`Nuestro catalogo es: `)
   for (let producto of array) {
      console.log(producto.id, producto.equipo, producto.camiseta, producto.precio)
   }
}

function buscarPorCamiseta(array) {
   let camisetaBusqueda = prompt("Ingrese la camiseta que está buscando")
   let busqueda = array.filter(
      (producto) => producto.camiseta.toLowerCase().includes(camisetaBusqueda.toLowerCase())
   )
   if (array.length == 0) {
      console.log(`Para la camiseta ${camisetaBusqueda} no hay coincidencias en nuestro catalogo`)
   } else {
      verCatalogo(busqueda)
   }
}

function buscarPorEquipo(array) {
   let equipoBusqueda = prompt("Ingrese el equipo que está buscando")
   let busqueda = array.filter(
      (producto) => producto.equipo.toLowerCase().includes(equipoBusqueda.toLowerCase())
   )
   if (array.length == 0) {
      console.log(`Para el equipo ${equipoBusqueda} no hay coincidencias en nuestro catalogo`)
   } else   {
      verCatalogo(busqueda)
   }
}

function agregarProducto() {
   let equipoIngresado = prompt("Ingrese el equipo")
   let camisetaIngresado = prompt("Ingrese la camiseta")
   let precioIngresado = parseInt(prompt("Ingrese el precio"))
   const productoNuevo = new Producto(ropero.length + 1, equipoIngresado, camisetaIngresado, precioIngresado)
   ropero.push(productoNuevo)
   console.log(`Agregaste la ${camisetaIngresado} del equipo ${equipoIngresado} por un valor de ${precioIngresado}`)
   alert(`Agregaste la ${camisetaIngresado} del equipo ${equipoIngresado} por un valor de ${precioIngresado}`)

}
function eliminarProducto(array){
   verCatalogo(array)
   let eliminarID = parseInt(prompt("Ingrese el id que desea eliminar"))
   let arrayID = array.map(producto => producto.id)
   console.log(arrayID)

   let indice = arrayID.indexOf(eliminarID)
   console.log(indice)

   array.splice(indice, 1)
   verCatalogo(array)

}

function ordenarMenorMayor(array) {
   const menorMayor = [].concat(array)
   console.log(menorMayor)
   menorMayor.sort((a, b) => a.precio - b.precio)
   verCatalogo(menorMayor)
}

function ordenarMayorMenor(array) {
   const mayorMenor = [].concat(array)
   mayorMenor.sort((elem1, elem2) => elem2.precio - elem1.precio)
   verCatalogo(mayorMenor)
}

function ordenar(array) {
   let opcion = parseInt(prompt(`
         1 - Ordenar de menor a mayor precio
         2 - Ordenar de mayor a menor precio`))
   switch (opcion) {
      case 1:
         ordenarMenorMayor(array)
         break
      case 2:
         ordenarMayorMenor(array)
         break
      default:
         console.log(`La opcion ${opcion} no es válida`)
         break

   }
}

function menu() {

   let salirMenu = false

   do {
      let opcionIngresada = parseInt(prompt(`Ingrese el n° de la opción deseada:
     1 - Agregar producto
     2 - Borrar producto
     3 - Consultar catálogo
     4 - Buscar por camiseta
     5 - Buscar por equipo
     6 - Ordenar producto:
     0 - Salir del menu`))
      switch (opcionIngresada) {
         case 1:
            agregarProducto()
            break
         case 2:
            eliminarProducto(ropero)
            break
         case 3:
               verCatalogo(ropero)
               break   
         case 4:
            buscarPorCamiseta(ropero)
            break
         case 5:
            buscarPorEquipo(ropero)
            break
         case 6:
            ordenar(ropero)
            break
         case 0:
            console.log(`Gracias por visitarnos!!`)
            salirMenu = true
            break
         default:
            console.log("Opción no válida, ingrese alguna opcion del menu")
            break
      }
   } while (!salirMenu)
}

menu()