function main() {
    let historico = [];
    let pokAtual = null;
    let opcao = "";

    while (opcao !== "e") {
        opcao = prompt(
            "MENU POKEMON GO\n" +
            "a) Gerar Pokemon\n" +
            "b) Ver Taxas de Captura\n" +
            "c) Historico de Pokemons Gerados\n" +
            "e) Encerrar\n\n" +
            "Escolha uma opcao:"
        );

        if (opcao === "a") {
            pokAtual = gerarPokemon(historico);
        } else if (opcao === "b") {
            if (pokAtual) {
                mostrarTaxasCaptura(pokAtual);
            } else {
                alert("Nenhum pokemon gerado ainda!");
            }
        } else if (opcao === "c") {
            mostrarHistorico(historico);
        } else if (opcao === "e") {
            alert("Encerrando...");
        } else {
            alert("Opcao invalida!");
        }
    }
}

function gerarPokemon(historico) {
    let chance = Math.random() * 100;
    let tipo = "";
    if (chance < 80) {
        tipo = "Normal";
    } else if (chance < 95) {
        tipo = "Raro";
    } else {
        tipo = "Lendario";
    }

    let nomes = {
        "Normal": ["Pidgey", "Rattata", "Zubat"],
        "Raro": ["Dratini", "Lapras", "Snorlax"],
        "Lendario": ["Mewtwo", "Zapdos", "Articuno"]
    };

    let lista = nomes[tipo];
    let nome = lista[Math.floor(Math.random() * lista.length)];

    let pokemon = { nome: nome, tipo: tipo };
    historico.push(pokemon);

    alert("Pokemon gerado: " + pokemon.nome + " (" + pokemon.tipo + ")");
    return pokemon;
}

function mostrarTaxasCaptura(pokemon) {
    let msg = "Taxas de captura para " + pokemon.nome + " (" + pokemon.tipo + "):\n";

    if (pokemon.tipo === "Normal") {
        msg += "Item Normal: 100%\nItem Raro: 200%";
    } else if (pokemon.tipo === "Raro") {
        msg += "Item Normal: 100%\nItem Raro: 100% (nao aumenta)";
    } else if (pokemon.tipo === "Lendario") {
        msg += "Item Normal: 80%\nItem Raro: 120%";
    }

    alert(msg);
}

function mostrarHistorico(historico) {
    if (historico.length === 0) {
        alert("Nenhum pokemon gerado ainda!");
    } else {
        let msg = "--- Historico ---\n";
        for (let i = 0; i < historico.length; i++) {
            msg += (i + 1) + ". " + historico[i].nome + " (" + historico[i].tipo + ")\n";
        }
        alert(msg);
    }
}

main();