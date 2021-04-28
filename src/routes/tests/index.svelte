<script>
    import UsabilityQuestion from "../../components/UsabilityQuestion.svelte";
    import {questionnaires} from "./questionnaires";
    import {questions} from "./questions"
    import JsonUrl from 'json-url'

    const codec = JsonUrl('lzw');

    let group = 'nullity'; // proposed
    let userID = Math.random().toString();
    let quantitativeData = [];
    let index = 0;

    let compressedResult = null;
    $: quantitativeComplete = index >= questions.length;
    let qualitativeComplete = false;
    $: testComplete = quantitativeComplete && qualitativeComplete;

    function handleQuestionComplete(event) {
        quantitativeData.push(event.detail);
        index += 1;
    }

    const decompress = 'woLCsHF1YW50aXRhxIZ2ZUTEiWHCksKFwqbEhHN3ZXLCoWHCq2VsYXBzZWRUaW1lw4s_w698w63CkWhywrDComlkwqRRMS1pwqVncm91cMKnbnVsbMSHecKmdcSfcklEwrIwLjc2NTk3NzAzNjIxNDAwxY_EkcSTxJXEl2TEmsScxJ7EoMSixKTEpsO2LQ5WBBjCk8SvZMKlxLPEtcS2xLjEusS8xL7FgMWCxYTFhsWIxYrFjMWOxZDFksWUxZbFmMWaOcKvxIJhxYHEiMSKxIzEjsKawoLFr8Kkc8WFMcSSbsSUxJbCr3N0xLluZ19kaXNhxLhlZcaRxLDGk8WFMsaXxplyxpvGnW_Gn8ahxqPGpXLGp8apxLHGlHMzxq7FnsKoxqLGpMamxqjGksa8NMa_xJbHgca2x4TGusarczXHiXLHi8eDxrjHhcaqxrw2x5LGscaexqDHgsa3xrnHhsWFN8eSx5THoMeXxrvFhTjHpcefx43HonM5x5vGnMedxrXHlcehxLDCpca8MTDHrMeMx5Y-x7_FsMiBx4PHpMiFx6bGpceJx4vIjMarP8O0w7XDgsKPXCjDtse2yJfGuMe5x5vGvMe9x5_InseCx6PIhMeGx6fGpsimxqrHjsOxxrHDt8OOw5kXx5Y1yJjHusecxr3Hvsaax6HIgseEx6XIh8eoyIrFk8inx47JhcWaxZwCx7bJisizx5rGu8e8x57Gv8i5x6LIg8eFyIbHh8eoxqfJmMmBx67HsMeyx7THljbJi8i1yaTInMmQyJ_Iu8mqyKPIiMmXxqnHjcaEw7XHkceTx5XEocWiybbJociZyY3It8mmx4HJqMmTyKLJlci_yIvJsMSXw7QxJsSaw5TDvseWN8m3yaPIm8mPyIDIusmpyZTJrMWQyoHHrMiow7JeNT_IkMKRx7bKocqMyYzItsmlyJ3KkcmSyKHFiw-dsOJxpBRNMaTxanHvMa-x6HIgMWzyILHhceoyIbHiciJx4zFlsiMxq4_w7V4w5TDvcOzwrZGx5nImMe6yJrGvcegx7_Hgcifx4THp8iFx4jHq8iJx67Hjciox5DDuiTDnciQyJLIljXImca8x5_HvseAx6PIusemyITHh8eqyIjFksaByYLGrceQw7ZNw5LDscKpw7vDp8eZyYvItMmNx73Gv8eixp3HpciDx4bHqciHxqjGgMiLyZvGh8O2FHrDoUfCrhTIljbJjMeeyajInci5x4PJk8muyKPIv8apybPHj8aHw7PGtMaxxrPHmcm-yabKgMicyLjJkcqEya3Iosi-yZfEiMaqyKfJtMSXw6Z2xorGjBDIljfJv8ibyLfJkMmryKDIvMmVybDHrMqexqzKi8SXw63CocOKw4DCgxJvx5nKqMqTyqrJj8mqyIHIu8mUya8'
    codec.decompress(decompress).then(result => {
        console.log('resultado: ', result)
    })
    $: if (quantitativeComplete) {
        codec.compress({quantitativeData, qualitativeData}).then(result => {
            compressedResult = result;
        });
    }

    let resultTextArea = null;
    let qualitativeIncomplete = false;
    function handleCopyClick() {
        resultTextArea.select();
        resultTextArea.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    let qualitativeData;
    function handleSaveClick() {
        const questionanireIds = questionnaires.map(q => q.id);
        const questionnaireAnswers = questionanireIds.map(id => {
            return {
                id,
                answer: qualitativeForm.elements[id].value
            }
        })
        if(questionnaireAnswers.map(d=>d.answer).every(ans => ans !== '')){
            qualitativeIncomplete = false;
            qualitativeData = questionnaireAnswers;
            qualitativeComplete = true;
        } else {
            qualitativeIncomplete = true;
        }
    }

    let qualitativeForm = null;
</script>

<style>
    div.container {
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 20px;
    }

    textarea {
        min-width: 500px;
        min-height: 200px;
    }

    div.final-flex {
        display: flex;
        flex-direction: column;
    }

    form .statement {
        display:block;
        font-size: 14px;
        font-weight: bold;
        padding: 30px 0 0 4.25%;
        margin-bottom:10px;
    }
    form .likert {
        list-style:none;
        width:100%;
        margin:0;
        padding:0 0 35px;
        display:block;
        border-bottom:2px solid #efefef;
    }
    form .likert:last-of-type {border-bottom:0;}
    form .likert:before {
        content: '';
        position:relative;
        top:11px;
        left:9.5%;
        display:block;
        background-color:#efefef;
        height:4px;
        width:78%;
    }
    form .likert li {
        display:inline-block;
        width:19%;
        text-align:center;
        vertical-align: top;
    }
    form .likert li input[type=radio] {
        display:block;
        position:relative;
        top:0;
        left:50%;
        margin-left:-6px;

    }
    p.warn {
        color: firebrick;
        font-size: 20px;
    }

    button.qualitative-finish {
        margin-bottom: 10px;
    }

    form .likert li label {width:100%;}
</style>

<svelte:head>
    <title>Usability Testing</title>
</svelte:head>

<div class="container">
    {#if testComplete}
        {#if compressedResult}
            <div class="final-flex">
                <h1> Para finalizar:</h1>
                <h2> Envie-me o seguinte código pelo e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de
                    Usabilidade"</h2>
                <label for="result"></label>
                <textarea bind:this={resultTextArea} readonly id='result'>{compressedResult}</textarea>
                <button on:click={handleCopyClick}>Copiar para Área de Transferência</button>
            </div>
        {:else}
            <h3> O seu resultado está sendo gerado. Aguarde...</h3>
        {/if}
    {:else}
        {#if quantitativeComplete}
            <h1>Marque abaixo as opções com as quais você mais se identificou durante o uso da visualização:</h1>
            <form bind:this={qualitativeForm}>
                {#each questionnaires as questionnaire, i}
                    <label class="statement">{questionnaire.questionnaireText}</label>
                    <ul class='likert'>
                        <li>
                            <input type="radio" name={questionnaire.id} value="strong_disagree">
                            <label>Discordo Bastante</label>
                        </li>
                        <li>
                            <input type="radio" name={questionnaire.id} value="disagree">
                            <label>Discordo</label>
                        </li>
                        <li>
                            <input type="radio" name={questionnaire.id} value="neutral">
                            <label>Neutro</label>
                        </li>
                        <li>
                            <input type="radio" name={questionnaire.id}  value="agree">
                            <label>Concordo</label>
                        </li>
                        <li>
                            <input type="radio" name={questionnaire.id} value="strong_agree">
                            <label>Concordo Bastante</label>
                        </li>
                    </ul>
                {/each}
            </form>
            {#if qualitativeIncomplete}
                <p class="warn">Para prosseguir, marque uma resposta em todas as {questionnaires.length} perguntas.</p>
                {:else}
                <p>Quando terminar de marcar as respostas, clique no botão abaixo:</p>
            {/if}
            <button class="qualitative-finish" on:click={handleSaveClick}> Salvar Respostas </button>
        {:else}
            {#each questions as question,i}
                {#if i === index}
                    <UsabilityQuestion userID={userID} group={group} index={index+1} maxIndex={questions.length}
                                       id={question.id} on:complete={handleQuestionComplete}
                                       options={question.options}
                                       questionImages={question.questionImages[group]}
                                       questionText={question.questionText}/>
                {/if}
            {/each}
        {/if}


    {/if}

</div>

