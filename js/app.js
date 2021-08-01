function Boton(){
    let resultado = document.querySelector("input").value;
    let total = (Math.round((resultado * 1.64) * 100)/100); 
    console.log(`El precio total de la compra en steam es: $${total}`);
    document.getElementById("total").innerHTML = `<div class="row border border-primary justify-content-center">
    $${total}
    </div>`;
}