# Projeto de Controle de Metas
> Gabriel Ferreira Jorge, aluno do Colégio Civico Militar Júlio Mesquita, atualmente cursando o 3º Ano na área de exatas.

## Descrição
<p>Este é um projeto desenvolvido com o objetivo de estipularmos uma data limite para o alcance de metas, retornando quanto tempo nos resta até este objetivo, tais objetivos foram estipulados em conjunto com a matéria de Projeto de Vida.<br> 
<p>Entretanto, por já ter uma base na área de programação optei por desenvolver minha própria versão deste trabalho.</p>
<p>Como já informado, o desenvolvimento inicial do projeto envolvia definir uma meta e a sua data limite de alcance, onde teriamos um contador que mostraria a contagem regressiva até aquela meta, tendo as divisões dentro de UM arquivo HTML, sendo o resultado esperado este:</p>

<img src = "Captura de tela 2024-02-22 172230.png">

<hr>

## Alterações
<p>Na minha versão do projeto temos uma navegação por botões e links, ao invés de uma navegação por DIV's como foi feita nas aulas do curso.</p>

> Código:
>   <!--Sessão de botões, para fazer linkagem dos arquivos HTML-->
    <section class="botoes">
      <a href="index.html" class="botao"><span>Inicio</span></a>
      <a href="curso-alura.html" class="botao">Curso Alura</a>
      <a href="projeto-javascript.html" class="botao">Projeto JavaScript</a>
      <a href="intercambio.html" class="botao">Intercâmbio</a>
      <a href="curriculo.html" class="botao">Currículo</a>
      <a href="user.html" class="botao">Sua Vez</a>
    </section>
> Logo, com este bloco de códigos temos a primeira interação com o usuario onde ele é capaz de navegar pela página. 
> Nesta sessão tambem temos a aplicação da estilização dos botões, resultando o seguinte:

<img src=https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/Captura%20de%20tela%202024-02-28%20153122.png>

<p>Uma segunda alteração é que eu adicionei mais um tipo de interação com o usuario, onde ele pode definir uma meta e a sua data de alcance e vizualisar quanto tempo falta até aquele objetivo. Para isto foi-se criada uma função separada. </p>

> Código:
>
    // Função para calcular e exibir a contagem regressiva para um objetivo específico (usuário)
    function usercalctemp() {
    try {
    
    // Obter a data limite do campo "tempo"
    const tempoLimite = new Date(document.getElementById("tempo").value);
    
    // Validar a data
    if (!tempoLimite || isNaN(tempoLimite.getTime())) {
      return "Data inválida.";
    }

    // Calcular o tempo restante
    const tempoAtual = new Date();
    const tempoFinal = tempoLimite - tempoAtual;

    // Se a data já passou, exibe "Prazo Finalizado."
    if (tempoFinal < 0) {
      return "Prazo Finalizado.";
    }

    // Cálculo de segundos, minutos, horas e dias
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    // Formatação dos valores para exibição
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    dias = dias.toString().padStart(2, "0");
    horas = horas.toString().padStart(2, "0");
    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");

    // Exibir a contagem regressiva no elemento "cont5"
    const elemento = document.getElementById("cont5");
    if (elemento) {
      elemento.innerHTML = `${dias} <span class="cdt">Dias</span> ${horas} <span class="cdt">Horas</span> ${minutos} <span class="cdt">Minutos</span> ${segundos} <span class="cdt">Segundos</span>`;
    }} catch (error) {
    console.error(error);
    alert("Erro ao calcular a contagem regressiva.");
    }
    }
> O que resulta na seguinte sessão da página:
<img src=https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/Captura%20de%20tela%202024-02-29%20152759.png>

<hr>

## Funcionamento

<p>O funcionamento do site pe simples, ele opera através de botôes que altera entre as páginas do site, onde o resultado mostrado é a contagem regressiva do tempo até o alvance das minhas metas, onde você recebe uma breve descrição do que se trata aquela meta, ou qual é a meta naquela aba, e visualiza o contador do tempo, que opera em contante atualização para atualizar o tempo restante.</p>

- Navegação por Clicks;
- Mudança de abas por Botões;
- Vizualização;
> Metas e Contador Regressivo
- Interação Usuario;
> Definição de uma meta e data de alcance para ela, retornando a vizualizalção de quanto tempo falta até lá.

<hr>

## Acesso

<p>Tá esperando o que ?! Veja e teste da maneira que achar melhor, acesse o site por https://gabrielferreirajorge.github.io/Controle-de-metas/, e navegue do jeito que achar melhor, se tiver alguma ideia de algo que possa ser melhorado não hesite em falar, ainda estou aprendendo e querendo melhorar então sinta-se a vontade para dar opiniões.</p>
<p>Caso tenha alguma dúvida com relação de quais foram meus códigos, tenho eles disponibilizados no repositório:</p>

- CSS:
> https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/style.css
- JAVASCRIPT:
> https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/script.js
- HTML:
> [inicio] https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/index.html;<br>
> [curso-alura] https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/curso-alura.html;<br>
> [projeto-javascript] https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/projeto-javascript.html;<br>
> [intercambio] https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/intercambio.html;<br>
> [curriculo] https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/curriculo.html;<br>
> [sua-vez] https://github.com/GabrielferreiraJorge/Controle-de-metas/blob/main/user.html<br>

<hr>

## Créditos
<p>Este trabalho é resultado do curso oferecido pela Alura e pelo professor Marcelo Paludetto Rodrigues, com o objetivo de revisar alguns conceitos de HTML, CSS e JAVASCRIPT. Os códigos da minha versão se basearam nos conhecimentos divulgados no curso e na tutelagem do professor Wesley nas aulas presenciais. </p>
