import {Tabs} from 'antd';
import React from 'react';

const TabPane = Tabs.TabPane;

class MyTab extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            activeKey: '3',
        }
    }

    fallback = (activeKey) => {
        this.setState({activeKey});
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeKey} onChange={this.fallback}>
                <TabPane tab={this.props.name} key="1">Content of Tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
            </Tabs>
        )
    }
}

export default MyTab;
