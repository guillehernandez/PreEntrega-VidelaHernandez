let nombreDeIngreso = prompt("Admin o User")

while (nombreDeIngreso == "" || nombreDeIngreso == null) {
  nombreDeIngreso=  prompt("Ingresa un rol correcto")
}

if (nombreDeIngreso == "Admin" || nombreDeIngreso == "admin") {
    alert("Podes comprar o vender dolares")
} else {
    alert("Solo podes comprar")
}

let monto = parseInt(prompt("Cuantos dolares queres comprar?"))

alert("Compraste "+ monto *512+ " dolares.")


