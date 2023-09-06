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
}
