let livros = [];
const end_Point_Da_API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elemento_Para_Inserir_Livros = document.getElementById ( 'livros' );


get_Buscar_Livros_Da_API ();

async function get_Buscar_Livros_Da_API ()
{
	const resposta = await fetch ( end_Point_Da_API );
	livros = await resposta.json();
	console.table ( livros );

	Exibir_Livros_Na_Tela ( livros );
}

function Exibir_Livros_Na_Tela ( lista_de_livros )
{
	lista_de_livros.forEach ( livro =>
	{
		elemento_Para_Inserir_Livros.innerHTML +=
		`
			<div class="livro">
				<img class="livro__imagens" src="${livro.imagem}"
					alt = "${livro.alt}" />
				<h2 class="livro__titulo">
					${livro.titulo}
				</h2>
				<p class="livro__descricao">${livro.autor}</p>
				<p class="livro__preco" id="preco">R$${livro.preco}</p>
				<div class="tags">
					<span class="tag">${livro.categoria}</span>
				</div>
			</div>
		`
	})
}
