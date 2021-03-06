import {shuffle} from 'd3-array';

const easy = [{
    id: 'Q1-i',
    answer: 'a',
    questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    questionImages: {
        nullity: ['./tests/q1/Q1-i.n.svg'],
        proposed: ['./tests/q1/Q1-i.p.svg'],
    },
    options: [
        {
            id: 'a',
            optionText: 'Quando há valores faltantes na Dimensão 6, os valores da Dimensão 3 costumam ser baixos.'
        },
        {
            id: 'b',
            optionText: 'Quando há valores faltantes na Dimensão 6, os valores da Dimensão 3 costumam ser medianos.'
        },
        {
            id: 'c',
            optionText: 'Quando há valores faltantes na Dimensão 6, os valores da Dimensão 3 costumam ser altos.'
        },
        {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 6 e os valores da Dimensão 3.'}
    ],
},
    {
        id: 'Q1-ii',
        answer: 'b',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q1/Q1-ii.n.svg'],
            proposed: ['./tests/q1/Q1-ii.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Quando há valores faltantes na Dimensão 4, os valores da Dimensão 2 costumam ser baixos.'
            },
            {
                id: 'b',
                optionText: 'Quando há valores faltantes na Dimensão 4, os valores da Dimensão 2 costumam ser medianos.'
            },
            {
                id: 'c',
                optionText: 'Quando há valores faltantes na Dimensão 4, os valores da Dimensão 2 costumam ser altos.'
            },
            {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 4 e os valores da Dimensão 2.'}
        ],
    },
    {
        id: 'Q2-i',
        answer: 'b',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q2/Q2-i.n.svg'],
            proposed: ['./tests/q2/Q2-i.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 1 costumam ser “kappa”.'
            },
            {
                id: 'b',
                optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 1 costumam ser “tau”.'
            },
            {
                id: 'c',
                optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 1 costumam ser “delta”.'
            },
            {
                id: 'd',
                optionText: 'Não há relação entre os valores faltantes da Dimensão 2 e os valores da Dimensão 1.'
            },
        ],
    },
    {
        id: 'Q2-ii',
        answer: 'c',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q2/Q2-ii.n.svg'],
            proposed: ['./tests/q2/Q2-ii.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser “tau”,'
            },
            {
                id: 'b',
                optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser “delta”,'
            },
            {
                id: 'c',
                optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser “omega”,'
            },
            {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 5 e os valores da Dimensão 2.'}
        ],
    },
    {
        id: 'Q7-i',
        answer: 'b',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q7/Q7-i.n.svg'],
            proposed: ['./tests/q7/Q7-i.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Quando há valores faltantes na Dimensão 6, os valores da Dimensão 2 costumam ser baixos.'
            },
            {
                id: 'b',
                optionText: 'Quando há valores faltantes na Dimensão 6, os valores da Dimensão 2 costumam ser medianos.'
            },
            {
                id: 'c',
                optionText: 'Quando há valores faltantes na Dimensão 6, os valores da Dimensão 2 costumam ser altos.'
            },
            {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 6 e os valores da Dimensão 2.'}
        ],
    },
    {
        id: 'Q7-ii',
        answer: 'a',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q7/Q7-ii.n.svg'],
            proposed: ['./tests/q7/Q7-ii.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser baixos.'
            },
            {
                id: 'b',
                optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser medianos.'
            },
            {
                id: 'c',
                optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser altos.'
            },
            {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 5 e os valores da Dimensão 2.'}
        ],
    }];
const medium = [{
    id: 'Q3-i',
    answer: 'a',
    questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    questionImages: {
        nullity: ['./tests/q3/Q3-i.n.svg'],
        proposed: ['./tests/q3/Q3-i.p.svg'],
    },
    options: [
        {
            id: 'a',
            optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 5 costumam estar faltando.'
        },
        {
            id: 'b',
            optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 5 costumam estar presentes.'
        },
        {
            id: 'c',
            optionText: 'Não há relação entre os valores faltantes da Dimensão 2 e os valores faltantes da Dimensão 5.'
        }
    ],
},
    {
        id: 'Q3-ii',
        answer: 'c',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q3/Q3-ii.n.svg'],
            proposed: ['./tests/q3/Q3-ii.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Quando há valores faltantes na Dimensão 4, os valores da Dimensão 2 costumam estar faltando.'
            },
            {
                id: 'b',
                optionText: 'Quando há valores faltantes na Dimensão 4, os valores da Dimensão 2 costumam estar presentes.'
            },
            {
                id: 'c',
                optionText: 'Não há relação entre os valores faltantes da Dimensão 4 e os valores faltantes da Dimensão 2.'
            }
        ],
    },
    {
        id: 'Q4-i',
        answer: 'b',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q4/Q4-iA.n.svg', './tests/q4/Q4-iB.n.svg'],
            proposed: ['./tests/q4/Q4-i.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Os valores faltantes na Dimensão 5 TÊM relação com os valores da Dimensão 2, e os valores faltantes na Dimensão 2 TÊM relação com os valores da Dimensão 5.'
            },
            {
                id: 'b',
                optionText: 'Os valores faltantes na Dimensão 5 TÊM relação com os valores da Dimensão 2, mas os valores faltantes na Dimensão 2 NÃO têm relação com os valores da Dimensão 5.'
            },
            {
                id: 'c',
                optionText: 'Os valores faltantes na Dimensão 5 NÃO têm relação com os valores da Dimensão 2, mas os valores faltantes na Dimensão 2 TÊM relação com os valores da Dimensão 5.'
            },
            {
                id: 'd',
                optionText: 'Os valores faltantes na Dimensão 5 NÃO têm relação com os valores da Dimensão 2, e os valores faltantes na Dimensão 2 NÃO têm relação com os valores da Dimensão 5.'
            }
        ],
    },
    {
        id: 'Q4-ii',
        answer: 'c',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q4/Q4-iiA.n.svg', './tests/q4/Q4-iiB.n.svg'],
            proposed: ['./tests/q4/Q4-ii.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Os valores faltantes na Dimensão 3 TÊM relação com os valores da Dimensão 6, e os valores faltantes na Dimensão 6 TÊM relação com os valores da Dimensão 3.'
            },
            {
                id: 'b',
                optionText: 'Os valores faltantes na Dimensão 3 TÊM relação com os valores da Dimensão 6, mas os valores faltantes na Dimensão 6 NÃO têm relação com os valores da Dimensão 3.'
            },
            {
                id: 'c',
                optionText: 'Os valores faltantes na Dimensão 3 NÃO têm relação com os valores da Dimensão 6, mas os valores faltantes na Dimensão 6 TÊM relação com os valores da Dimensão 3.'
            },
            {
                id: 'd',
                optionText: 'Os valores faltantes na Dimensão 3 NÃO têm relação com os valores da Dimensão 6, e os valores faltantes na Dimensão 6 NÃO têm relação com os valores da Dimensão 3.'
            }
        ],
    }];
const hard = [{
    id: 'Q5-i',
    answer: 'c',
    questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    questionImages: {
        nullity: ['./tests/q5/Q5-i.n.svg'],
        proposed: ['./tests/q5/Q5-i.p.svg'],
    },
    options: [
        {
            id: 'a',
            optionText: 'Das dimensões mostradas, apenas a Dimensão 3 tem valores faltantes que possuem relação com os valores da Dimensão 1.'
        },
        {
            id: 'b',
            optionText: 'Das dimensões mostradas, apenas as Dimensões 3 e 4 têm valores faltantes que possuem relação com os valores da Dimensão 1.'
        },
        {
            id: 'c',
            optionText: 'Das dimensões mostradas, apenas as Dimensões 3, 4, e 5 têm valores faltantes que possuem relação com os valores da Dimensão 1.'
        },
        {
            id: 'd',
            optionText: 'Das dimensões mostradas, apenas as Dimensões 3, 4, 5, e 6 têm valores faltantes que possuem relação com os valores da Dimensão 1.'
        }
    ],
},
    {
        id: 'Q5-ii',
        answer: 'b',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q5/Q5-ii.n.svg'],
            proposed: ['./tests/q5/Q5-ii.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Das dimensões mostradas, apenas a Dimensão 3 tem valores faltantes que possuem relação com os valores da Dimensão 2.'
            },
            {
                id: 'b',
                optionText: 'Das dimensões mostradas, apenas as Dimensões 3 e 4 têm valores faltantes que possuem relação com os valores da Dimensão 2.'
            },
            {
                id: 'c',
                optionText: 'Das dimensões mostradas, apenas as Dimensões 3, 4, e 5 têm valores faltantes que possuem relação com os valores da Dimensão 2.'
            },
            {
                id: 'd',
                optionText: 'Das dimensões mostradas, apenas as Dimensões 3, 4, 5, e 6 têm valores faltantes que possuem relação com os valores da Dimensão 2.'
            }
        ],
    },
    {
        id: 'Q6-i',
        answer: 'c',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q6/Q6-iMAIN.n.svg', './tests/q6/Q6-iA.n.svg', './tests/q6/Q6-iB.n.svg', './tests/q6/Q6-iC.n.svg', './tests/q6/Q6-iD.n.svg'],
            proposed: ['./tests/q6/Q6-i.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores da Dimensão 1.'
            },
            {
                id: 'b',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores das Dimensões 1 e 2'
            },
            {
                id: 'c',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores das Dimensões 1, 2, e 3.'
            },
            {
                id: 'd',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores das Dimensões 1, 2, 3, e 4.'
            }
        ],
    },
    {
        id: 'Q6-ii',
        answer: 'b',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q6/Q6-iiMAIN.n.svg' ,'./tests/q6/Q6-iiA.n.svg', './tests/q6/Q6-iiB.n.svg', './tests/q6/Q6-iiC.n.svg', './tests/q6/Q6-iiD.n.svg'],
            proposed: ['./tests/q6/Q6-ii.p.svg'],
        },
        options: [
            {
                id: 'a',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores da Dimensão 1.'
            },
            {
                id: 'b',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores das Dimensões 1 e 2'
            },
            {
                id: 'c',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores das Dimensões 1, 2, e 3.'
            },
            {
                id: 'd',
                optionText: 'Das dimensões mostradas, os valores faltantes da Dimensão 6 tem relação apenas com os valores das Dimensões 1, 2, 3, e 4.'
            }
        ],
    }];

export let questions = [
    ...shuffle(easy),
    ...shuffle(medium),
    ...shuffle(hard)
]
