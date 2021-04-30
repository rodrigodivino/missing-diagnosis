export let questions = [
    // {
    //     id: 'Q1-i',
    //     questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    //     questionImages: {
    //       nullity: ['./tests/q1/Q1-i.n.svg'],
    //       proposed: ['./tests/q1/Q1-i.p.svg'],
    //     },
    //     options: [
    //         {id: 'a', optionText: 'Quando há valores faltantes na Dimensão 6, os valores da Dimensão 3 costumam ser baixos.'},
    //         {id: 'b', optionText: 'Quando há valores faltantes na na Dimensão 6, os valores da Dimensão 3 costumam ser medianos.'},
    //         {id: 'c', optionText: 'Quando há valores faltantes na na Dimensão 6, os valores da Dimensão 3 costumam ser altos.'},
    //         {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 6 e os valores da Dimensão 3.'}
    //     ],
    // },
    // {
    //     id: 'Q1-ii',
    //     questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    //     questionImages: {
    //         nullity: ['./tests/q1/Q1-ii.n.svg'],
    //         proposed: ['./tests/q1/Q1-ii.p.svg'],
    //     },
    //     options: [
    //             {id: 'a', optionText: 'Quando há valores faltantes na na Dimensão 4, os valores da Dimensão 2 costumam ser baixos.'},
    //             {id: 'b', optionText: 'Quando há valores faltantes na na Dimensão 4, os valores da Dimensão 2 costumam ser medianos.'},
    //             {id: 'c', optionText: 'Quando há valores faltantes na na Dimensão 4, os valores da Dimensão 2 costumam ser altos.'},
    //             {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 4 e os valores da Dimensão 2.'}
    //         ],
    // },
    // {
    //     id: 'Q2-i',
    //     questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    //     questionImages: {
    //         nullity: ['./tests/q2/Q2-i.n.svg'],
    //         proposed: ['./tests/q2/Q2-i.p.svg'],
    //     },
    //     options: [
    //         {id: 'a', optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 1 costumam ser “kappa”.'},
    //         {id: 'b', optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 1 costumam ser “tau”.'},
    //         {id: 'c', optionText: 'Quando há valores faltantes na Dimensão 2, os valores da Dimensão 1 costumam ser “delta”.'},
    //         {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 2 e os valores da Dimensão 1.'},
    //     ],
    // },
    // {
    //     id: 'Q2-ii',
    //     questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    //     questionImages: {
    //         nullity: ['./tests/q2/Q2-ii.n.svg'],
    //         proposed: ['./tests/q2/Q2-ii.p.svg'],
    //     },
    //     options: [
    //         {id: 'a', optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser “tau”,'},
    //         {id: 'b', optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser “delta”,'},
    //         {id: 'c', optionText: 'Quando há valores faltantes na Dimensão 5, os valores da Dimensão 2 costumam ser “omega”,'},
    //         {id: 'd', optionText: 'Não há relação entre os valores faltantes da Dimensão 5 e os valores da Dimensão 2.'}
    //     ],
    // },
    // {
    //     id: 'Q3-i',
    //     questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
    //     questionImages: {
    //         nullity: ['./tests/q3/Q3-i.n.svg'],
    //         proposed: ['./tests/q3/Q3-i.p.svg'],
    //     },
    //     options: [
    //         {id: 'a', optionText: 'Quando há valores faltantes na Dimensão 2, há mais valores que o normal faltando na Dimensão 5.'},
    //         {id: 'b', optionText: 'Quando há valores faltantes na Dimensão 2, há menos valores que o normal faltando na Dimensão 5.'},
    //         {id: 'c', optionText: 'Não há relação entre os valores faltantes da Dimensão 2 e os valores faltantes da Dimensão 5.'}
    //     ],
    // },
   // {
   //      id: 'Q3-ii',
   //      questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
   //      questionImages: {
   //          nullity: ['./tests/q3/Q3-ii.n.svg'],
   //          proposed: ['./tests/q3/Q3-ii.p.svg'],
   //      },
   //      options: [
   //          {id: 'a', optionText: 'Quando há valores faltantes na Dimensão 4, há mais valores que o normal faltando na Dimensão 2.'},
   //          {id: 'b', optionText: 'Quando há valores faltantes na Dimensão 4, há menos valores que o normal faltando na Dimensão 2.'},
   //          {id: 'c', optionText: 'Não há relação entre os valores faltantes da Dimensão 4 e os valores faltantes da Dimensão 2.'}
   //      ],
   //  },
    {
        id: 'Q4-i',
        questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
        questionImages: {
            nullity: ['./tests/q4/Q4-iA.n.svg','./tests/q4/Q4-iB.n.svg'],
            proposed: ['./tests/q4/Q4-i.p.svg'],
        },
        options: [
            {id: 'a', optionText: 'Os valores faltantes na Dimensão 5 TÊM relação com os valores da Dimensão 2, e os valores faltantes na Dimensão 2 TÊM relação com os valores da Dimensão 5.'},
            {id: 'b', optionText: 'Os valores faltantes na Dimensão 5 TÊM relação com os valores da Dimensão 2, mas os valores faltantes na Dimensão 2 NÃO têm relação com os valores da Dimensão 5.'},
            {id: 'c', optionText: 'Os valores faltantes na Dimensão 5 NÃO têm relação com os valores da Dimensão 2, mas os valores faltantes na Dimensão 2 TÊM relação com os valores da Dimensão 5.'},
            {id: 'd', optionText: 'Os valores faltantes na Dimensão 5 NÃO têm relação com os valores da Dimensão 2, e os valores faltantes na Dimensão 2 NÃO têm relação com os valores da Dimensão 5.'}
        ],
    },
//     {
//         id: 'Q4-ii',
//         questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
//         questionImages: {
//             nullity: ['logo-512.png'],
//             proposed: ['logo-512.png'],
//         },
//         options: [
//             {id: 'a', optionText: 'Lorem Ipsum'},
//             {id: 'b', optionText: 'Lorem Ipsum'},
//             {id: 'c', optionText: 'Lorem Ipsum'},
//             {id: 'd', optionText: 'Lorem Ipsum'}
//         ],
//     },
//     {
//         id: 'Q5-i',
//         questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
//         questionImages: {
//             nullity: ['logo-512.png'],
//             proposed: ['logo-512.png'],
//         },
//         options: [
//             {id: 'a', optionText: 'Lorem Ipsum'},
//             {id: 'b', optionText: 'Lorem Ipsum'},
//             {id: 'c', optionText: 'Lorem Ipsum'},
//             {id: 'd', optionText: 'Lorem Ipsum'}
//         ],
//     },
//     {
//         id: 'Q5-ii',
//         questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
//         questionImages: {
//             nullity: ['logo-512.png'],
//             proposed: ['logo-512.png'],
//         },
//         options: [
//             {id: 'a', optionText: 'Lorem Ipsum'},
//             {id: 'b', optionText: 'Lorem Ipsum'},
//             {id: 'c', optionText: 'Lorem Ipsum'},
//             {id: 'd', optionText: 'Lorem Ipsum'}
//         ],
//     },
//     {
//         id: 'Q6-i',
//         questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
//         questionImages: {
//             nullity: ['logo-512.png'],
//             proposed: ['logo-512.png'],
//         },
//         options: [
//             {id: 'a', optionText: 'Lorem Ipsum'},
//             {id: 'b', optionText: 'Lorem Ipsum'},
//             {id: 'c', optionText: 'Lorem Ipsum'},
//             {id: 'd', optionText: 'Lorem Ipsum'}
//         ],
//     },
//     {
//         id: 'Q6-ii',
//         questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
//         questionImages: {
//             nullity: ['logo-512.png'],
//             proposed: ['logo-512.png'],
//         },
//         options: [
//             {id: 'a', optionText: 'Lorem Ipsum'},
//             {id: 'b', optionText: 'Lorem Ipsum'},
//             {id: 'c', optionText: 'Lorem Ipsum'},
//             {id: 'd', optionText: 'Lorem Ipsum'}
//         ],
//     },
//     {
//         id: 'Q7-i',
//         questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
//         questionImages: {
//             nullity: ['logo-512.png'],
//             proposed: ['logo-512.png'],
//         },
//         options: [
//             {id: 'a', optionText: 'Lorem Ipsum'},
//             {id: 'b', optionText: 'Lorem Ipsum'},
//             {id: 'c', optionText: 'Lorem Ipsum'},
//             {id: 'd', optionText: 'Lorem Ipsum'}
//         ],
//     },
//     {
//         id: 'Q7-ii',
//         questionText: 'Qual alternativa parece descrever melhor os dados visualizados?',
//         questionImages: {
//             nullity: ['logo-512.png'],
//             proposed: ['logo-512.png'],
//         },
//         options: [
//             {id: 'a', optionText: 'Lorem Ipsum'},
//             {id: 'b', optionText: 'Lorem Ipsum'},
//             {id: 'c', optionText: 'Lorem Ipsum'},
//             {id: 'd', optionText: 'Lorem Ipsum'}
//         ],
//     },
]
