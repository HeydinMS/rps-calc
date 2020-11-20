import React from 'react';

class Result extends React.Component{
    render() {
        let counts = this.props.state;
        let turns = 9;
        for (let action in counts) {
            let actionCount = counts[action];
            turns -= actionCount;
        }
        let probabilityNextTurn = {
            'rock': (3-counts.rock)/turns,
            'paper': (3-counts.paper)/turns,
            'scissor': (3-counts.scissor)/turns
        }
        

        let probabilities = {
            'rock': {
                'win': probabilityNextTurn.scissor,
                'draw': probabilityNextTurn.rock,
                'lose': probabilityNextTurn.paper
            },
            'paper':{
                'win': probabilityNextTurn.rock,
                'draw': probabilityNextTurn.paper,
                'lose': probabilityNextTurn.scissor
            },
            'scissor': {
                'win': probabilityNextTurn.paper,
                'draw': probabilityNextTurn.scissor,
                'lose': probabilityNextTurn.rock
            }
        }

        function getHighestProbability(probabilities, target) {
            let highestPercent = 0;
            let highest = []
            for (let action in probabilities) {
                let outcome = probabilities[action][target].toFixed(2);
    
                if (outcome > highestPercent) {
                    highestPercent = outcome
                    highest = [action];
                } else if (outcome === highestPercent) {
                    highest.push(action);
                }
            }
            return highest;
        } 

        let highestWin = getHighestProbability(probabilities, 'win');
        let bestGuess;
        if (highestWin.length > 1) {
            let newProbabilities = [];
            for (let action of highestWin) {
                newProbabilities[action] = probabilities[action];
            }
            bestGuess = getHighestProbability(newProbabilities, 'draw');
        } else {
            bestGuess = highestWin;
        }
        
        let ret;
        if (bestGuess.length === 1) {
            ret = (
                <div className="result">
                    <div className='statement'>
                        <p>
                            Best guess would be <b>{bestGuess[0].toUpperCase()}</b>.
                            </p>
                    </div>
                  <Table probabilities={probabilities}/>
                </div>
            )
        } else if (bestGuess.length === 3) {
            ret = (
                <div className="result">
                    <div className='statement'>
                        <p>
                            All options have the same chance of winning.
                            </p>
                    </div>
                    <Table probabilities={probabilities}/>
                </div>
            )
        } else {
            ret = (
                <div className="result"> 
                    <div className='statement'>
                        <p>
                            <b>bestGuess[0]</b>, and <b>bestGuess[1]</b> are equally likely to win and or result in a draw
                        </p>
                    </div>
                    <Table probabilities={probabilities}/>
                </div>
                
            )
        }
        return ret;
    };
};

class Table extends React.Component {
    render() {
        return (
            <table className='rps-table result-table'>
                <tbody>
                    <tr>
                        <th>Action</th>
                        <th>Win</th>
                        <th>Draw</th>
                        <th>Lose</th>
                    </tr>
                    <TableRow name='rock' probabilities={this.props.probabilities.rock}/>
                    <TableRow name='paper' probabilities={this.props.probabilities.paper}/>
                    <TableRow name='scissor' probabilities={this.props.probabilities.scissor}/>
                </tbody>
            </table>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return(
            <tr className='action-row'>
                <td>{this.props.name.toUpperCase()}</td>
                <td>{(this.props.probabilities.win * 100).toFixed(2)}%</td>
                <td>{(this.props.probabilities.draw * 100).toFixed(2)}%</td>
                <td>{(this.props.probabilities.lose * 100).toFixed(2)}%</td>
            </tr>
        );
    }
    
}

export default Result;