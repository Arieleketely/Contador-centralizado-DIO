let contador = 0;

const NUMERO_HTML = document.getElementById('numerohtml');

function incremento() {
	contador++;
	NUMERO_HTML.innerHTML = contador;
}

function decremento() {
	contador--;
	NUMERO_HTML.innerHTML = contador;
}
