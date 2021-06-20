<script>
    import UsabilityQuestion from "../../components/UsabilityQuestion.svelte";
    import {questionnaires} from "./questionnaires";
    import {questions} from "./questions"
    import JsonUrl from 'json-url'
    import Tutorial from "../tutorials/Tutorial.svelte";

    const codec = JsonUrl('lzw');

    let group = null;
    let userID = Math.random().toString();
    let quantitativeData = [];
    let index = 0;
    let compressedResult = null;
    $: quantitativeComplete = index >= questions.length;
    let qualitativeComplete = false;
    let openComplete = false;
    $: testComplete = quantitativeComplete && qualitativeComplete && openComplete;

    let instructionsMode = true;

    function handleQuestionComplete(event) {
        quantitativeData.push(event.detail);
        index += 1;
    }

    const decompress = 'woXCsHF1YW50aXRhxIZ2ZUTEiWHCnsKDwqbEhHN3ZXLCoWLCq2VsYXBzZWRUaW1lw4tAMMKKfsO5w5siw5HComlkwqVRMS1pacSRxJPElcSXZMSaxJzEnsSgxKLEpMOLP8OwBBjCk3TCvGrEr2TCpMSzxLXEuG7ElMSWwqHEvMSbxJ3En8ShxKPEpT_DtMOdLxrCn8K-d8WMxLI3xLXEt8SSxZLEusWVxL3FmMWAxZvFg8OlcMKjw5cKPXHFjMWOMsWQxarFk8S7xa7Ev8WaxYI_w7xiTcOSw7HCqcO8xbpRxafFqcS5xZTFlsS-xZnFgcWcw64cwqwIMSbDqcWlUcW8xLbFkcW_xa3Fl8aCxpbFg8OxP3zDrcKRaHPGnzTFqMajxaxjxoHGlcWxxYTGrWhywrAhxo0zxb3GkcaAxqbGuMaEw6_FocK-dsOIwrTGjcayxpDFq8WUxrbHhcWwxoTDqMa7xr3Gv8SwxLLHgcaixb7FrMaTxa_Gg8SlQATCl8KNT8OfO2TGnzbGs8efx5LGt8eVxZzDs1PDt8OOw5kWwofGjTXHgseRx4TGlMezxYPDtMK0OVgQYk7Gn8e9x57Hg8alyIHHo8WDw7YMScK6XjU_xo3HrmnCr8SCYWzEh8SJacSLxI3EiMKawoLFunN1czHHsHLCp25ldXRyyJ_IqMSwwqTIqnMyyK7CpWFncmVlyLfFjci6M8iuyLDIssi0yLbIqcirNMiuwqhkaXPIv8mByYPJjXM1yZDJksmUyYDJgsmEyLnIqzbJiMixyLPItWzJoMi6N8mbyZPJlcmfyZg4yazJncmWyanIqznJssmuyZfHm8i6MTDJpMmKyafCrWTEiWVDb21wbGV0xKDCszI4LzA1LzIwMjEgMTU6NTY6NDnCpcmAb3VwyLB1bMigdHnCpsirxJZJRMKzMC4yOTPKtTI0MTfKujPKnTExNg'
    codec.decompress(decompress).then(result => {
        console.log('resultado: ', result)
    })
    $: if (openComplete) {
        const dateCompleted = new Date().toLocaleString();
        codec.compress({quantitativeData, qualitativeData, dateCompleted, group}).then(result => {
            compressedResult = JSON.stringify({
                quantitativeData,
                qualitativeData,
                dateCompleted,
                group,
                positiveRemarks: savedPositiveRemarks,
                negativeRemarks: savedNegativeRemarks
            });
        });
    }

    let resultTextArea = null;
    let positiveRemarks = null;
    let negativeRemarks = null;
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
        if (questionnaireAnswers.map(d => d.answer).every(ans => ans !== '')) {
            qualitativeIncomplete = false;
            qualitativeData = questionnaireAnswers;
            qualitativeComplete = true;
        } else {
            qualitativeIncomplete = true;
        }
    }

    let emailSent = null;

    function handleEmailClick() {
        emailSent = true;
    }

    let planilhaVisited = false;

    function handlePlanilhaClick() {
        planilhaVisited = true;
    }

    function handlePGroupClick() {
        group = 'proposed';
    }

    function handleNGroupClick() {
        group = 'nullity';
    }

    function handleTutorialReady() {
        instructionsMode = false;
    }

    let qualitativeForm = null;

    function sendMail() {
        const answers = resultTextArea.value

        const subject = "Teste de Usabilidade";
        const body = answers;

        const link = "mailto:rodrigodivino.ufpa@gmail.com?"
            + "&subject=" + subject
            + "&body=" + body;

        window.open(link);
    }

    let savedPositiveRemarks = null;
    let savedNegativeRemarks = null;
    let incompleteOpen = false;

    function handleOpenClick() {
        savedPositiveRemarks = positiveRemarks.value;
        savedNegativeRemarks = negativeRemarks.value;
        console.log(positiveRemarks.value)
        console.log(negativeRemarks.value)
        if (positiveRemarks.value.length > 1 && negativeRemarks.value.length > 1) {
            incompleteOpen = false;
            openComplete = true;
        } else {
            incompleteOpen = true;
        }
    }
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
        display: block;
        font-size: 16px;
        font-weight: bold;
        padding: 30px 0 0 4.25%;
        margin-bottom: 10px;
    }

    form .likert {
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0 0 35px;
        display: block;
        border-bottom: 2px solid #efefef;
    }

    form .likert:last-of-type {
        border-bottom: 0;
    }

    form .likert:before {
        content: '';
        position: relative;
        top: 11px;
        left: 9.5%;
        display: block;
        background-color: #efefef;
        height: 4px;
        width: 78%;
    }

    form .likert li {
        display: inline-block;
        width: 19%;
        text-align: center;
        vertical-align: top;
    }

    form .likert li input[type=radio] {
        display: block;
        position: relative;
        top: 0;
        left: 50%;
        margin-left: -6px;

    }

    p.warn {
        color: firebrick;
        font-size: 20px;
    }

    button.qualitative-finish, button.open-finish {
        margin-bottom: 50px;
    }

    button.copy-button {
        bottom: 10px;
        max-width: 500px;
        margin: 5px auto;
    }

    button.send-email-button {
        bottom: 10px;
        max-width: 500px;
        margin: 5px auto;
    }

    form .likert li label {
        width: 100%;
    }

    button.email-confirmation {
        margin: 10px auto;
        max-width: 300px;
    }

    button.planilha-button {

    }

    button.group-button {
        min-width: 30px;
        min-height: 30px;
    }

    h2.mobile-warn {
        color: firebrick;
    }
</style>

<svelte:head>
    <title>Usability Testing</title>
</svelte:head>

<div class="container">
    {#if instructionsMode}
        {#if !group}
            <h1>Teste de Usabilidade de Visualizações de Dados Faltantes</h1>
            <h2 class="mobile-warn"> Importante: Este teste de usabilidade não é compatível com dispositivos móveis.
                Certifique-se de estar em um computador ou notebook.</h2>
            <ul>
                <li>Este teste de usabilidade contém 14 questões de múltipla escolha.</li>
                <li>Em cada questão, você verá uma ou mais imagens de visualizações de dados, e um conjunto com
                    alternativas de múltipla escolha.
                </li>
                <li>Em cada questão, selecione a alternativa que melhor explique os dados apresentados na imagem.</li>
                <li>O teste dura cerca de 30 minutos.</li>
                <li>Estamos testando a visualização, e não você! não há respostas certas ou erradas.</li>
                <li>Não retroceda páginas, ou seu progresso será perdido. Após iniciar o teste, siga até o final.</li>
            </ul>

            <h2 class="mobile-warn"> Importante: Não pule os vídeos, e leia as informações de cada página do teste com
                calma.</h2>


            <h3>Assista o vídeo à seguir, que demonstra o procedimento completo deste teste de usabilidade.</h3>


            <iframe width="560" height="315" src="https://www.youtube.com/embed/zSX0nXWKgfs"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            <h3>Para prosseguir, <a
                    href="https://docs.google.com/spreadsheets/d/1UHNYK-Cty8Q8gpMsUXawd98lxwn0mkMhMYj9F9Os7EE/edit?usp=sharing"
                    target=”_blank”> acesse este
                link</a> e siga as instruções da planilha. Quando retornar, clique no botão abaixo.</h3>


            <button class="planilha-button" on:click={handlePlanilhaClick}> Já acessei a planilha, li as instruções, e
                voltei
            </button>

            {#if planilhaVisited}
                <h3>O meu grupo é:</h3>
                <button class="group-button P-button" on:click={handlePGroupClick}>P</button>
                <button class="group-button N-button" on:click={handleNGroupClick}>N</button>
            {/if}
        {:else}
            <Tutorial on:ready={handleTutorialReady} url1="https://www.youtube.com/embed/tremKl7AFK8"
                      url2={(group === 'proposed') ? "https://www.youtube.com/embed/Y3TJnNavvoo" : "https://www.youtube.com/embed/QNOJhRkYoPQ" }
                      url3={(group === 'proposed') ? "https://www.youtube.com/embed/bxCIW4HtZkM" : "https://www.youtube.com/embed/D4pCgo4Yjhw" }/>
        {/if}
    {:else}
        {#if testComplete}
            {#if compressedResult}
                <div class="final-flex">
                    <h1> Para finalizar:</h1>
                    <h2> Envie o seguinte código para e-mail "rodrigodivino.ufpa@gmail.com" com o assunto "Teste de
                        Usabilidade"</h2>
                    <h3>Os dados contém informações apenas sobre as questões do teste.
                        Ao enviar, você concorda que membros do LABVIS analisem esses dados internamente para melhorar o
                        design da visualização.
                    </h3>
                    <label for="result"></label>
                    <textarea bind:this={resultTextArea} readonly id='result'>{compressedResult}</textarea>
                    <button class="copy-button" on:click={handleCopyClick}>Copiar para Área de Transferência</button>

                    <p>Envie os resultados através de qualquer cliente e-mail. O botão abaixo é um atalho para abrir o
                        cliente padrão com o e-mail pronto para envio.</p>
                    <button class="send-email-button" on:click={sendMail}>Abrir Cliente de e-mail</button>

                    <button class="email-confirmation" on:click={handleEmailClick}>Ok, já enviei o e-mail.</button>

                    {#if emailSent}
                        <h1> Fim do teste. Muito obrigado por sua participação! </h1>
                    {/if}
                </div>
            {:else}
                <h3> O seu resultado está sendo gerado. Aguarde...</h3>
            {/if}
        {:else}
            {#if quantitativeComplete}
                {#if qualitativeComplete}
                    <h3>Escreva abaixo comentários sobre o que você achou de POSITIVO durante o uso da visualização.
                        Escreva no mínimo uma frase no campo abaixo.
                    </h3>
                    <label for="positive"></label>
                    <textarea required bind:this={positiveRemarks} id='positive'></textarea>
                    <br><br><br>
                    <h3>Escreva abaixo comentários sobre o que você achou de NEGATIVO durante o uso da visualização.
                        Escreva no mínimo uma frase no campo abaixo.
                    </h3>
                    <label for="negative"></label>
                    <textarea required bind:this={negativeRemarks} id='negative'></textarea>

                    {#if incompleteOpen}
                        <p class="warn">Por favor, escreva no mínimo uma frase em cada um dos campos.</p>
                    {/if}
                    <br>
                    <p>Após preencher os campos, clique no botão abaixo para prosseguir.</p>
                    <button class="open-finish" on:click={handleOpenClick}>Continuar</button>
                {:else}
                    <h1>Marque abaixo as opções com as quais você mais se identificou durante o uso da
                        visualização:</h1>
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
                                    <input type="radio" name={questionnaire.id} value="agree">
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
                        <p class="warn">Para prosseguir, marque uma resposta em todas as {questionnaires.length}
                            perguntas.</p>
                    {:else}
                        <p>Quando terminar de marcar as respostas, clique no botão abaixo:</p>
                    {/if}
                    <button class="qualitative-finish" on:click={handleSaveClick}> Continuar</button>
                {/if}

            {:else}
                {#each questions as question,i}
                    {#if i === index}
                        <UsabilityQuestion group={group} index={index+1} maxIndex={questions.length}
                                           id={question.id} on:complete={handleQuestionComplete}
                                           options={question.options}
                                           questionImages={question.questionImages[group]}
                                           questionText={question.questionText}/>
                    {/if}
                {/each}
            {/if}
        {/if}
    {/if}


</div>

