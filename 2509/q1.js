const readline = require("readline-sync");

function main() {
    let vendas = [];
    let despesas = [];
    let opcao = "";

    while (opcao !== "e") {
        console.log("MENU\n");
        console.log("a) Inserir Venda");
        console.log("b) Ver status das Vendas");
        console.log("c) Inserir Despesa");
        console.log("d) Ver total de Despesas");
        console.log("e) Encerrar");

        opcao = readline.question("Escolha uma opcao: ");

        if (opcao === "a") {
            inserirVenda(vendas);
        } else if (opcao === "b") {
            verStatusVendas(vendas);
        } else if (opcao === "c") {
            inserirDespesa(despesas);
        } else if (opcao === "d") {
            verTotalDespesas(despesas);
        } else if (opcao === "e") {
            console.log("Encerrando...");
        } else {
            console.log("Opcao invalida!");
        }
    }
}
function inserirVenda(vendas) {
    let valor = Number(readline.question("Valor da venda: "));
    vendas.push(valor);
    console.log("Venda adicionada!");
}

function verStatusVendas(vendas) {
    let total = 0;
    for (let v of vendas) {
        total += v;
    }
    console.log("Numero de vendas:", vendas.length);
    console.log("Total vendido:", total);
}

function inserirDespesa(despesas) {
    let valor = Number(readline.question("Valor da despesa: "));
    despesas.push(valor);
    console.log("Despesa adicionada!");
}

function verTotalDespesas(despesas) {
    let total = 0;
    for (let d of despesas) {
        total += d;
    }
    console.log("Total de despesas:", total);
}

main();