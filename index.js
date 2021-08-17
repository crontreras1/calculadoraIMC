/*const indiceDeMasaCorporal = (peso, altura) => {
    return peso / (altura * altura); 
};*/


/*function indiceDeMasaCorporal (peso, altura) {
    return peso / (altura * altura);
};*/

const calcularIMC = () => {
    let inputPeso = document.getElementById("inputPeso").value;
    let inputAltura = document.getElementById("inputAltura").value;
    document.getElementById("valueInput").innerHTML = inputPeso / (inputAltura * inputAltura);
};

/*function calcularIMC() {
    const inputPeso = document.getElementById("inputPeso");
    const inputAltura = document.getElementById("inputAltura");
    const value = input.value;
};*/

/*function calcularAltura() {
    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = input.value;
};*/

//const ResultadoIMC = indiceDeMasaCorporal();
//alert(ResultadoIMC);