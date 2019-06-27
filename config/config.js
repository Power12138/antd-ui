export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [{
            path:'/',
            component: './HelloWorld'
        },{
            path:'helloworld',
            component: './HelloWorld'
        },{
            path: '/tree',
            component: 'tree/tree.js'
        },{
            path: '/card',
            component: 'card/card.js'
        },{
            path: '/dashboard',
            routes: [
                {path: '/dashboard/analysis', component: 'Dashboard/Analysis'},
                {path: '/dashboard/monitor', component: 'Dashboard/Monitor'},
                {path: '/dashboard/workplace', component: 'Dashboard/Workplace'}
            ]
        },{
            path: '/puzzlecard',
            component: './puzzlecard'
        }
    ]
    },{
        path: '/foo',
        component: './tabs'
    }],
};