import React from 'react'

class RPS extends React.Component{
    render() {
        return (
            <div className="rps-container">
                <button className='btn btn-primary rps-button' onClick={() => this.props.onIncrement(this.props.name)}>
                    Increment
                </button>
                <div className="rps-display">
                    {this.props.count}
                </div>
                <button className='btn btn-primary rps-button' onClick={() => this.props.onDecrement(this.props.name)}>
                    Decrement
                </button>
            </div>
        )
    }
};

export default RPS;