import {Tree} from 'antd';
import React from 'react';

const {TreeNode} = Tree;

class MyTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedKeys: [],
        }
    }

    //接收原本的展开事件，在state中记录expandedKeys
    onExpand = (expandedKeys) => {
        this.setState({expandedKeys});
    }

    //接收选中事件，修改expandedKeys
    onSelect = (selectedKeys) => {
        const {expandedKeys} = this.state;
        const key = selectedKeys[0];

        if(expandedKeys.includes(key)) {
            //移除key
            this.setState({
                expandedKeys: expandedKeys.filter(k => k !== key),
            });
        } else {
            //添加key
            this.setState({expandedKeys: [...expandedKeys,key]});
        }
    }

    render() {
        return (
            <Tree
            expandedKeys={this.state.expandedKeys}
            selectedKeys={[]}
            onExpand={this.onExpand}
            onSelect={this.onSelect}>
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-1">
                        <TreeNode title="leaf" key="0-1-0"></TreeNode>
                        <TreeNode title="leaf" key="0-1-1"></TreeNode>
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-2">
                        <TreeNode title="leaf" key="0-2-0"></TreeNode>
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}

export default MyTree;