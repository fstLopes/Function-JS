function buscadados(){

    const PC = {
        marca: "Pichau",
        processador: "i5 12400f",
        memoria: "HyperX DDR4 3200Mhz 16Gb",
        hd: "Kingston 500Gb",
    }
    return PC
}



function criarNo() {
    const eleMarca = document.createElement("h1")
    eleMarca.innerText = `${PC.marca}`
    const eleProcessador = document.createElement("h2")
    eleProcessador.innerText = `${PC.processador}`
    const eleMemoriaRam = document.createElement("h2")
    eleMemoriaRam.innerText = `${PC.memoria}`
    const eleHd = document.createElement("p")
    eleHd.innerText = `${PC.hd}`

    const divPc = document.createElement("div")
    divPc.classList.add("produto")

    divPc.appendChild(eleMarca)
    divPc.appendChild(eleProcessador)
    divPc.appendChild(eleMemoriaRam)
    divPc.appendChild(eleHd)

    document.body.appendChild(divPc)
}

