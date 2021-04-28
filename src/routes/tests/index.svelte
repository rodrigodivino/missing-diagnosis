<script>
    import UsabilityQuestion from "../../components/UsabilityQuestion.svelte";
    import {questions} from "./questions"

    let group = 'nullity'; // proposed
    let userID = Math.random().toString();
    let data = [];
    let index = 0;

    $: testComplete = index >= questions.length;

    function handleQuestionComplete(event) {
        data.push(event.detail);
        index += 1;
    }

    $: if(testComplete) {
        console.log(data)
    }

</script>

<style>
    div.container {
        margin-left: 100px;
        margin-top: 20px;
    }

</style>

<svelte:head>
    <title>Usability Testing</title>
</svelte:head>

<div class="container">
    {#if testComplete}
        <h1> Obrigado pela sua participação!</h1>
    {:else}
        <UsabilityQuestion userID={userID} group={group} index={index+1} maxIndex={questions.length} id={questions[index].id} on:complete={handleQuestionComplete} options={questions[index].options}
                           questionImages={questions[index].questionImages[group]}
                           questionText={questions[index].questionText}/>
    {/if}

</div>

