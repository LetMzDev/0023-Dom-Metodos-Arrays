const btn_Filtrar_Livros_De_Front = document.getElementById ( "btnFiltrarLivrosFront" );

btn_Filtrar_Livros_De_Front.addEventListener ( 'click', Filtrar_Livros );

function Filtrar_Livros ()
{
	let livros_Filtrados = livros.filter ( livro => livro.categoria == 'front-end' );
	console.table ( livros_Filtrados );
}