<script>
    export let url1;
    export let url2;
    export let url3;


    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleReadyClick() {
        dispatch('ready');
    }
</script>

<style>

    iframe {
        margin: 10px 0 20px 0;
    }

    button.finish-tutorial {
        margin-bottom: 50px;
    }

    h2.mobile-warn {
        color: firebrick;
    }

</style>

<h1> TUTORIAL </h1>

<ul>
    <li>Este tutorial contém 3 vídeos.</li>
    <li>Os vídeos explicam o problema abordado nas questões, e como funciona a visualização do teste.</li>
    <li>Assista todos os 3 vídeos, e leia as informações desta página com calma.</li>
    <li> Ao terminar os vídeos, clique no botão ao fim da página. </li>
</ul>

<h2 class="mobile-warn"> Importante: Não pule os vídeos, e leia as informações de cada página do teste com
    calma.</h2>

<h1> O Problema de Dados Faltantes </h1>

O vídeo abaixo é uma introdução sobre o problema de dados faltantes (também conhecido como dados perdidos).
<div>
    <iframe width="560" height="315" src={url1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h1> Elementos Visuais</h1>

<p>O vídeo abaixo apresenta a visualização, e explica os elementos visuais envolvidos.</p>

<div>
    <iframe width="560" height="315" src={url2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h1> Exemplos de Como Interpretar a Visualização </h1>

<p>O vídeo abaixo mostra exemplos práticos de como usar a visualização. Atenção, pois as questões do teste serão bem semelhantes as deste vídeo.</p>

<div>
    <iframe width="560" height="315" src={url3} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h2 class="mobile-warn"> Importante: Não pule os vídeos, e leia as informações de cada página do teste com
    calma.</h2>

<button class="finish-tutorial" on:click={handleReadyClick}> Assisti aos vídeos e estou pronto para utilizar a visualização. </button>
