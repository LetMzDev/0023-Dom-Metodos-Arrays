// const btn_Filtrar_Livros_De_Front = document.getElementById ( "btnFiltrarLivrosFront" );

// btn_Filtrar_Livros_De_Front.addEventListener ( 'click', Filtrar_Livros );

const botoes = document.querySelectorAll ( ".btn" );

botoes.forEach ( btn => btn.addEventListener ( 'click', Filtrar_Livros ))

function Filtrar_Livros ()
{
	const elemento_Btn = document.getElementById ( this.id );
	const categoria = elemento_Btn.value;

	let livros_Filtrados = categoria == 'disponivel' ? Filtrar_Por_Disponibilidade() : Filtrar_Por_Categoria ( categoria );
	// console.table ( livros_Filtrados );
	Exibir_Livros_Na_Tela ( livros_Filtrados );

	if ( categoria == 'disponivel' )
	{
		const valor_Total = Calcular_Valor_Total_De_Disponiveis ( livros_Filtrados )
		Exibir_Valor_Total_Livros ( valor_Total )
	}
}

function Filtrar_Por_Categoria ( categoria )
{
	return livros.filter ( livro => livro.categoria == categoria );
}

function Filtrar_Por_Disponibilidade()
{
	return livros.filter ( livro => livro.quantidade > 0 );
}

function Exibir_Valor_Total_Livros ( valor_Total )
{
	elemento_Valor_Total_Disponivel.innerHTML =
	`
		<div class="livros__disponiveis">
				<p>Todos os livros disponíveis por R$ <span id="valor">${valor_Total}</span></p>
		</div>
	`
}
