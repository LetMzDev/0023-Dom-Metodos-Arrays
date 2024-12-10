function Aplicar_Desconto ( livros )
{
	const desconto = 0.3;

	let livros_Com_Desconto = livros.map ( livro =>
	{
		return {...livro, preco: livro.preco - ( livro.preco * desconto )} // Faz uma cópia de todo o objeto Livro, ms irá alterar o preço dele
	}
	)

	return livros_Com_Desconto;
}
