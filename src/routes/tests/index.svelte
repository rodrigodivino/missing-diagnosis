<script>
    import UsabilityQuestion from "../../components/UsabilityQuestion.svelte";
    import {questions} from "./questions"

    let group = 'nullity'; // proposed
    let data = [];
    let index = 0;

    function handleQuestionComplete(event) {
        console.log('complete', event.detail);
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
    <UsabilityQuestion on:complete={handleQuestionComplete} id={questions[index].id} options={questions[index].options}
                       questionImages={questions[index].questionImages[group]} questionText={questions[index].questionText}/>
</div>

