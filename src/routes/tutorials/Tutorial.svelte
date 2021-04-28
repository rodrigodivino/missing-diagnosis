<script>
    export let url1;
    export let url2;
</script>

<style>

    iframe {
        margin: 10px 0 20px 0;
    }

    button.finish-tutorial {
        margin-bottom: 50px;
    }

</style>

<h1> Bem vindo ao tutorial.</h1>

<p> Aqui você verá como funciona a visualização que será utilizada ao longo deste teste.</p>
<p> Os vídeos a seguir contém informações sobre a visualização. Sinta-se à vontade para pausar e retroceder os vídeos, ou assistir novamente caso desejar. É recomendado assisti-los no modo tela cheia.</p>
<p> Ao terminar os vídeos, clique no botão ao fim da página. </p>

<h1> Elementos Visuais</h1>

<p>O vídeo à seguir apresenta a visualização, e explica os elementos visuais envolvidos.</p>

<div>
    <iframe width="560" height="315" src={url1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h1> Exemplos de como interpretar a visualização </h1>

<p>O vídeo à seguir mostra exemplos práticos de como usar a visualização. Atenção, pois as questões do teste serão bem semelhantes as do vídeo: </p>

<div>
    <iframe width="560" height="315" src={url2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<button class="finish-tutorial"> Assisti aos vídeos e estou pronto para utilizar a visualização. </button>
