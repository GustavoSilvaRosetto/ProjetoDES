

function Comparar()
{
	Senha = document.getElementById('Senha').value;
	ConfSenha = document.getElementById('Confsenha').value;

	if (Senha != ConfSenha)
	{
		alert('Favor confirmar a senha escolhida');
		return false;
	}
}