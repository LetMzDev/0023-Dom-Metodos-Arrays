let livros = [];
const end_Point_Da_API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

get_Buscar_Livros_Da_API ();

async function get_Buscar_Livros_Da_API ()
{
	const resposta = await fetch ( end_Point_Da_API );
	livros = await resposta.json();
	console.table ( livros );
}