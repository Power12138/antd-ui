import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

const namespace = 'listDatas';

const mapStateToProps = (state) => {
    const users = state[namespace].data;
    return {
        users,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryListData`,
            });
        },
    };
};


@connect(mapStateToProps, mapDispatchToProps)
class List extends React.Component {

    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return(
            <Table dataSource={this.props.users} columns={[
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
            ]}></Table>
        )
    }
}

export default List; 