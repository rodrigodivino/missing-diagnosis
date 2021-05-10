import {EMAIL} from "../secrets/EMAIL";
import {NAME} from "../secrets/NAME";

var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/missing-diagnosis',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/rodrigodivino/missing-diagnosis.git',
        user: {
            name: NAME,
            email: EMAIL
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
