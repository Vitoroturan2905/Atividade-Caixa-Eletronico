<script>
var saldo = 100.5; //Variavel Global
		
		var nomeU = prompt("Digite seu nome: ");
			alert("Óla " +nomeU + " é um prazer te ter aqui!");
		function inicio() {
			
			//ESCOPO
			//Variavel Local
			
			var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Deposito 5.) Transferencia 6.) sair' ));

			switch(escolha){
				case 1:
				ver_saldo();
				break;

				case 2:
				ver_extrato();
				break;

				case 3:
				fazer_saque();
				break;

				case 4:
				fazer_deposito();
				break;

				case 5:
				fazer_transferencia();
				break;

				case 6:
				sair();
				break;
			}}
				

		
		function ver_saldo() {
			senha();
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			senha();
			
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			
			// Not a Number --> Isso é um não-número?
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();

			}if(deposito <= 0){
				alert("Transação NÃO autorizada!");
				inicio();
			} else {
				saldo += deposito;
				//saldo = saldo + deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			senha();
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();

			}if(saque > saldo){
				alert("Transação NÃO autorizada");
				inicio();

			}if(saque == 0){
				alert("Transação NÃO autorizada, digite um numero maior que 0");
				inicio();
			} else {
				saldo -= saque;
				//saldo = saldo - saque;
				ver_saldo();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 4.');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nomeU+ ", foi um prazer ter voce conosco");
				window.close();
			} else {
				inicio();
			}
		}

		function ver_extrato(){
			senha();
			alert("Algumas das suas transações recentes sao: " + "   " + "                                 " +" SUPERMERCADO DIA - R$12,00    " + "   " + "                                            " +" NEGREIROS = R$50,00      " + "   " + "                                                          " +" SHOPEE - R$70,00 ");
		inicio();
		}

		function fazer_transferencia() {
			senha();
			parseFloat( prompt("digite o numero da conta: "));
			var transf = prompt("Qual o valor da transferencia? ");
			if(transf <= 0){
				alert("Transferencia NÃO autorizada! Não pode digitar 0!");
				inicio();
			}if(transf <= saldo){
				alert("Transferencia feita com sucesso");
				saldo -= transf;
				inicio();

			}if(transf > saldo){
				alert("Transferencia NÃO autorizada! Saldo insulficiente!");
			}
			inicio();
			
		};

		function senha(){
		var senhaC = 3589;
		var senha = prompt("para acessar esse serviço digite a sua senha: ");
		if(senha == senhaC){
			alert("Senha correta");
		}else{
			alert("senha incorreta");
			inicio();
		}
		}

		inicio();
	</script>