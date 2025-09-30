function main() {
    let livros = [];
    let opcao = "";

    while (opcao !== "e") {
        opcao = prompt(
            "MENU COLEÇÃO DE LIVROS \n" +
            "a) Inserir dados do livro\n" +
            "b) Imprimir nomes de todos os livros\n" +
            "c) Imprimir todos os dados de um livro específico\n" +
            "d) Imprimir todos os dados dos livros de um autor específico\n" +
            "e) Encerrar\n\n" +
            "Escolha uma opcao:"
        );

        if (opcao === "a") {
            inserirLivro(livros);
        } else if (opcao === "b") {
            imprimirNomes(livros);
        } else if (opcao === "c") {
            imprimirLivro(livros);
        } else if (opcao === "d") {
            imprimirPorAutor(livros);
        } else if (opcao === "e") {
            alert("Encerrando");
        } else {
            alert("Opcao invalida!");
        }
    }
}

function inserirLivro(livros) {
    let nome = prompt("Digite o nome do livro:");
    let autor = prompt("Digite o autor do livro:");
    let ano = prompt("Digite o ano de publicação:");
    let avaliacao = prompt("Digite a avaliação do livro (0 a 10):");

    let livro = {
        nome: nome,
        autor: autor,
        ano: ano,
        avaliacao: avaliacao
    };

    livros.push(livro);
    alert("Livro cadastrado com sucesso!");
}

function imprimirNomes(livros) {
    if (livros.length === 0) {
        alert("Nenhum livro cadastrado.");
        return;
    }
    let msg = "Nomes dos livros:\n";
    for (let i = 0; i < livros.length; i++) {
        msg += (i + 1) + ". " + livros[i].nome + "\n";
    }
    alert(msg);
}

function imprimirLivro(livros) {
    if (livros.length === 0) {
        alert("Nenhum livro cadastrado.");
        return;
    }
    let nomeBusca = prompt("Digite o nome do livro que deseja consultar:");
    let encontrado = livros.find(livro => livro.nome.toLowerCase() === nomeBusca.toLowerCase());

    if (encontrado) {
        let msg = "Dados do livro:\n";
        msg += "Nome: " + encontrado.nome + "\n";
        msg += "Autor: " + encontrado.autor + "\n";
        msg += "Ano: " + encontrado.ano + "\n";
        msg += "Avaliação: " + encontrado.avaliacao;
        alert(msg);
    } else {
        alert("Livro não encontrado.");
    }
}

function imprimirPorAutor(livros) {
    if (livros.length === 0) {
        alert("Nenhum livro cadastrado.");
        return;
    }
    let autorBusca = prompt("Digite o nome do autor:");
    let encontrados = livros.filter(livro => livro.autor.toLowerCase() === autorBusca.toLowerCase());

    if (encontrados.length > 0) {
        let msg = "Livros de " + autorBusca + ":\n";
        for (let i = 0; i < encontrados.length; i++) {
            msg += "Nome: " + encontrados[i].nome + "\n";
            msg += "Ano: " + encontrados[i].ano + "\n";
            msg += "Avaliação: " + encontrados[i].avaliacao + "\n\n";
        }
        alert(msg);
    } else {
        alert("Nenhum livro encontrado desse autor.");
    }
}

main();