const baralho = []
let opcao = ""

do{
    opcao = prompt(
        "Cartas de baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar a carta\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho")
            }else {
                alert("Você puxou um(a) " + cartaPuxada)
            }
        case "3":
            alert("Saindo...")
            break
        default:
            break;
       alert("Opção Inválida!")

    }
} while (opcao !== "3")