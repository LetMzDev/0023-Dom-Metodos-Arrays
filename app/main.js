let livros = [];
const end_Point_Da_API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

get_Buscar_Livros_Da_API ();

async function get_Buscar_Livros_Da_API ()
{
	const resposta = await fetch ( end_Point_Da_API );
	livros = await resposta.json();
	// console.table ( livros );

	let livros_Com_Desconto = Aplicar_Desconto ( livros );

	Exibir_Livros_Na_Tela ( livros_Com_Desconto ); // Exibir na tela todos os livros já com descontos
}
