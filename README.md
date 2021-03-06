
# Estudos-CJRM

Repositório de Estudos em Javascript do curso CJRM

oraganizando 19/07/2021

### Índice

<br> [Aula 02-02 - A condicional if](#Aula02-02)
<br> [Aula 02-03 - Else e else if statements](#Aula02-03)
<br> [Aula 02-04 - Operadores lógicos && e ||](#Aula02-04)

<hr>

[topo](#)
## Aula02-02 - A condicional if <a name="Aula02-02"></a> 

A estutura condicional if é muito utilizada e uma das mais simples, if em portugues é "SE".

SE certa condição for atingida o que está dentro do bloco será executado.

```javascript
Sintaxe
if(condição){
bloco de comandos
}

----->

Exemplo:
const age = 19;
if(age > 18) {
console.log('Você tem mais de 18 anos')
}

//Você tem mais de 18 anos
```

<hr>

[topo](#)
## Aula02-03 - Else e else if statements <a name="Aula02-03"></a>


"Else" e "Else if" são utilizados após a primeira verificação "If", a tradução dos dois é "Senão" e "Senão" se, basicamente eles funcionam para dar mais opções ao código, retornando mensagens ao usuário ou permitindo verifcações antes da execução do bloco de código correto para cada situação.

"Else if" permite que se faça uma nova condição/verificação antes da tomada de ação, por isso sua sintaxe é identica ao "If", já o "Else" é utilizado como último recurso depois de todas as condições terem falhado.

```javascript
Sintaxe
if(){ }
else if() { }
else { }

----- >

Exempplo:
const password = 'oi123';

if(password.length >= 12) {
	console.log('Sua senha é muito forte!')
} else if(password.length >= 8){
	console.log('Essa senha é boa mas pode melhorar')
} else {
	console.log('A senha deve conter 8 ou mais caracteres')
}

//A senha deve conter 8 ou mais caracteres

```

<hr>

[topo](#)
## Aula02-04 - Operadores lógicos && e || <a name="Aula02-04"></a> 


Os operadores lógicos &&(E) e ||(OU) adicionam um novo nível nas verificações das estruturas de repetições e outros métodos de programação.

(E) && ⇒ Quando utilizado só retorna TRUE se todas as condições estabelecidas sejam atendidas.

(OU) || ⇒ Retorna TRUE caso pelo menos uma das condições sejam atendidas.

```javascript
const password = '1234567';

ex1 - if(password.length >= 12 && password.includes(1)) {
	console.log('Sua senha é muito forte!')
ex2 - } else if(password.length >= 8 || password.includes(1)){
	console.log('Essa senha é boa mas pode melhorar')
      } else {
	console.log('A senha deve conter 8 ou mais caracteres')
      }

//Essa senha é boa mas pode melhorar

ex1 = Retorna false porque password tem o número 1 incluso,
mas não atinge 12 caracteres,
como estamos E todas as condições tem que ser atendidas.

ex2 = retorna true porque apesar de password não ter 8 caracteres,
nesse caso ele tem o número 1 incluso,
e como estamos usando OU apenas uma condição é o bastante,

```
