import React, {Component} from 'react';
import { Card , Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStatetoProps = (state) => {
    const cardList = state[namespace];
    return {
        cardList,
    };
};

@connect(mapStatetoProps)
export default class PuzzleCardsPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.counter = 100;
    //     this.state={
    //         cardList: [
    //             {
    //                 id: 1,
    //                 setup: 'Did you hear about the two silk worms in a reace?',
    //                 punchline: 'It ended in a tie',
    //             },{
    //                 id: 2,
    //                 setup: 'What happens to a frog car when it breaks down?',
    //                 punchline: 'It gets toad away',
    //             },
    //         ],
    //     }
    // }

    addNewCard = () => {
        this.setState(prevState => {
            const prevCardList = prevState.cardList;
            this.counter += 1;
            const newCard = {
                id: this.counter,
                setup: 'let it is go',
                punchline: 'nice meet to you',
            };
            return {
                cardList: prevCardList.concat(newCard),
            };
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.punchline}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
                <Button onClick={this.addNewCard}>添加卡片</Button>
            </div>
        );
    }
}