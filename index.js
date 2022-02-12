import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Rodrigo', 10000, 12312312312);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente('Ricardo', 5000, 78978978989);
gerente.cadastrarSenha('1234');
const cliente = new Cliente('Lais', 14256776415, '454');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '1234');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '454');

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);
