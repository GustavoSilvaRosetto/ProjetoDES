

function scrollTo(element) {
	document.querySelector(element).scrollToIntoView({ behavior: "smooth"});
}

	document.querySelector("#conteudo1").addEventListener("Click", function (event){
	event.preventDefault();


	scrollTo("#conteudo1");

	console.log ("Quem Somos");



	document.querySelector("#conteudo2").addEventListener("Click", function (event){
	event.preventDefault();


	scrollTo("#conteudo2");

	console.log ("Planos");


	document.querySelector("#conteudo3").addEventListener("Click", function (event){
	event.preventDefault();


	scrollTo("#conteudo3");

	console.log ("Mensalidade atrasada");


});