// Importando estruturas para manipular listas e ler entradas
import java.util.List;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // Cria um objeto Scanner para leitura de entrada

        // Cria um cliente com informações iniciais e uma conta bancária
        Cliente cliente = new Cliente("Matheus", 10000, "matheus@mail.com");
        Conta conta1 = new Conta(10000, 12345, cliente);

        // Cria um cliente 2 com informações iniciais e uma conta bancária
        Cliente cliente2 = new Cliente("Pedrão", 0, "pedro@mail.com");
        Conta conta2 = new Conta(0, 54321, cliente2);

        // Loop principal do programa
        while (true) {
            System.out.println("//-- Aplicativo de Conta Bancária --//");
            System.out.println("1. Informações do Cliente e da Conta");
            System.out.println("2. Depósito");
            System.out.println("3. Saque");
            System.out.println("4. Transferência");
            System.out.println("5. Histórico de transações");
            System.out.println("6. Sair");

            System.out.println("\nSelecione uma opção:");
            int opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.println("Informações do Cliente:");
                    System.out.println("Nome: " + cliente.nome);
                    System.out.println("Email: " + cliente.email);

                    System.out.println("\nInformações da Conta:");
                    conta1.mostrarSaldo();
                    break;

                case 2:
                    System.out.println("\nInforme o valor para depósito:");
                    double valorDeposito = scanner.nextDouble();
                    conta1.deposito(valorDeposito);
                    break;

                case 3:
                    System.out.println("\nInforme o valor para saque:");
                    double valorSaque = scanner.nextDouble();
                    conta1.saque(valorSaque);
                    break;

                case 4:
                    Conta contaDestino = conta2;

                    if (contaDestino != null) {
                        System.out.println("\nInforme o valor para transferência:");
                        double valorTransferencia = scanner.nextDouble();
                        conta1.transferencia(contaDestino, valorTransferencia);
                    } else {
                        System.out.println("Conta de destino não encontrada.");
                    }
                    break;

                case 5:
                List<String> historico = conta1.getHistoricoTransacoes();
                if (historico.isEmpty()) {
                    System.out.println("\nNenhuma transação recente encontrada.\n");
                } else {
                    System.out.println("\nHistórico de Transações:");
                    for (String transacao : historico) {
                        System.out.println(transacao);
                    }
                    System.out.println("\n");
                }
                break;
                
                case 6:
                System.out.println("\nSaindo...");
                scanner.close();
                System.exit(0); // Encerra o programa
                break;

                default:
                    System.out.println("\nOpção inválida. Tente novamente.");
            }
        }
    }
}