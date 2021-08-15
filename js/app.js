let Boton = () => {
    let resultado = document.querySelector("input").value;
    let total = (Math.round((resultado * 1.65) * 100)/100); 
    document.getElementById("total").innerHTML = `<div class="row border border-primary justify-content-center">
    $${total}
    </div>`;
}
