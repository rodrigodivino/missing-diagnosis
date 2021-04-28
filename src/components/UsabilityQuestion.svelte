<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let id;
    export let questionText;
    export let questionImages;
    export let options;
    export let index;
    export let maxIndex;

    let answer = null;
    let active = false;


    let startTime = null;
    let elapsedTime = null;

    function handleActiveClick() {
        startTime = new Date().getTime();
        active = true;
    }

    function handleFinishClick() {
        const endTime = new Date().getTime();
        elapsedTime = (endTime - startTime) / 1000;
        dispatch('complete', {
            answer, elapsedTime, id
        });
    }


</script>

<style>
    div.image-wrapper {
        display: flex;
        align-content: center;
        justify-content: center;
    }

    div.button-wrapper {
        min-width: 300px;
        min-height: 100px;
        flex-direction: column;
        justify-content: center;
    }

    button.active-button {
        margin-bottom: 2px;
    }

    button.finish-button {
        margin-top: 2px;
    }


</style>

<header>
    <h2>{`${index}/${maxIndex} - ${questionText}`}</h2>

        {#if active}
            <div class="image-wrapper">
            {#each questionImages as questionImage}
                <img src="./logo-512.png"/>
            {/each}
            </div>
        {:else}
            <div class="button-wrapper">
                <p>Leia o enunciado e as alternativas para ter uma idéia da questão.</p>
                <p>Quando estiver pronto, clique em "começar" para mostrar a visualização.</p>
                <button type="button" class="active-button" on:click={handleActiveClick}>Começar</button>
            </div>
        {/if}

    <form>
        {#each options as option}
            <input bind:group={answer} type="radio" id={option.id} name="answer" value={option.id}>
            <label for={option.id}> {option.optionText} </label><br>
        {/each}
    </form>


    {#if active && answer}
        <button type="button" class="finish-button" on:click={handleFinishClick}>Confirmar e continuar</button>
    {/if}

</header>
