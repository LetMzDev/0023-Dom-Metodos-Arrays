// const btn_Filtrar_Livros_De_Front = document.getElementById ( "btnFiltrarLivrosFront" );

// btn_Filtrar_Livros_De_Front.addEventListener ( 'click', Filtrar_Livros );

const botoes = document.querySelectorAll ( ".btn" );

botoes.forEach ( btn => btn.addEventListener ( 'click', Filtrar_Livros ))

function Filtrar_Livros ()
{
	const elemento_Btn = document.getElementById ( this.id );
	const categoria = elemento_Btn.value;

	let livros_Filtrados = categoria == 'disponivel' ? livros.filter ( livro => livro.quantidade > 0 ) : livros.filter ( livro => livro.categoria == categoria );
	// console.table ( livros_Filtrados );
	Exibir_Livros_Na_Tela ( livros_Filtrados );
}