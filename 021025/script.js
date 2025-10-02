const elemDiv = document.getElementById("conteudoDinamico")

const elementoCriado = document.createElement("p")
const elementoCriado2 = document.createElement("p")

elementoCriado.innerText = `Esse elemento foi criado com JavaScript`
elementoCriado2.innerText = `Esse paragrafo foi crido no JavaScript`

elemDiv.appendChild(elementoCriado)
elemDiv.appendChild(elementoCriado2)