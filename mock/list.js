export default {
    'get /dev/list': function(req,res) {
        const listData = {
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
            ],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },{
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age'
                },{
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ]
        };
        res.json(listData);
    }
}