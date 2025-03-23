let ordenar_Por_Preco = document.getElementById ( 'btnOrdenarPorPreco' )

ordenar_Por_Preco.addEventListener ( 'click', Ordenar_Livros_Por_Preco )

function Ordenar_Livros_Por_Preco ()
{
	let livros_Ordenados = livros.sort(( a, b ) =>
		a.preco - b.preco
	)
	Exibir_Livros_Na_Tela ( livros_Ordenados );
}