function Calcular_Valor_Total_De_Disponiveis ( livros )
{
	return livros.reduce (( acc, livro ) => acc + livro.preco, 0 ).toFixed ( 2 )
}