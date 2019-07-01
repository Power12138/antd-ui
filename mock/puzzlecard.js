// export default {
//     'get /dev/random_joke': {
//         setup: '2',
//         punchline: 'two',
//     },
// };

const random_jokes = [
    {
        setup: '1',
        punchline: 'one',
    },{
        setup: '2',
        punchline: 'two'
    },
];

let random_joke_call_count = 0;

export default {
    'get /dev/random_joke': function(req, res) {
        const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
        random_joke_call_count += 1;
        setTimeout(() => {
            res.json(responseObj);
        },3000);
    },
};
