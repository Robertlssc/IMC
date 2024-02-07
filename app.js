function calcularIMC(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const IMC = peso / (altura * altura)
    let resposta = "a"
    
    if(isNaN(peso) || peso <= 0 || peso >= 611){
        alert("Digite valores válidos")
        peso.focus();
        return
    }else if(isNaN(altura) || altura <= 0.50 || altura >= 2.71){
        alert("Digite valores válidos")
        altura.focus();
        return

    }

    if(IMC < 16.9){
        resposta = (IMC.toFixed(2)+",  Muito abaixo do peso")
    }else if(IMC >= 17 && IMC <= 18.4){
        resposta = (IMC.toFixed(2)+",  Abaixo do peso")
    }else if(IMC >= 18.5 && IMC <= 24.9){
        resposta = (IMC.toFixed(2)+",  Peso normal")
    }else if(IMC >= 25 && IMC <= 29.9 ){
        resposta = (IMC.toFixed(2)+",  Acima do peso")
    }else if(IMC >= 30 && IMC <= 34.9){
        resposta = (IMC.toFixed(2)+",  Obesidade grau 1")
    }else if(IMC >= 35 && IMC <= 40){
        resposta = (IMC.toFixed(2)+",  Obesidade grau 2")
    }else if(IMC > 40){
        resposta = (IMC.toFixed(2)+",  Obesidade grau 3")
    }else{
        resposta = "Algo deu errado"
    }
    
    alert("Seu IMC é: "+IMC.toFixed(2))
    
    console.log(resposta)
    document.getElementById("outIMC").innerHTML = "resultado: " + resposta
}