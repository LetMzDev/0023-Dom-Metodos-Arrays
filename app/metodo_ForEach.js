const elemento_Para_Inserir_Livros = document.getElementById ( 'livros' );
const elemento_Valor_Total_Disponivel = document.getElementById ( 'valor_total_livros_disponiveis' )

function Exibir_Livros_Na_Tela ( lista_de_livros )
{
	elemento_Para_Inserir_Livros.innerHTML = '';
	elemento_Valor_Total_Disponivel.innerHTML = ''

	lista_de_livros.forEach ( livro =>
	{
		let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

		elemento_Para_Inserir_Livros.innerHTML +=
		`
			<div class="livro">
				<img class="${disponibilidade}" src="${livro.imagem}"
					alt = "${livro.alt}" />
				<h2 class="livro__titulo">
					${livro.titulo}
				</h2>
				<p class="livro__descricao">${livro.autor}</p>
				<p class="livro__preco" id="preco">R$${livro.preco.toFixed( 2 )}</p>
				<div class="tags">
					<span class="tag">${livro.categoria}</span>
				</div>
			</div>
		`
	})
}
