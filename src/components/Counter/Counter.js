import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CounterApp extends Component {

    static defaultProps = {
        initialValue: 0,
        step: 1
    };

    static propTypes = {
        step: PropTypes.number,
        initialValue: PropTypes.number
    };

    state = {
        counter: {
            value: this.props.initialValue
        }
    };

    handleIncrement = () => {
        this.setState((state, props) => {
            return {
                counter: { value: state.counter.value + props.step }
            }
        });

    };

    handleDecrement = () => {
        this.setState({
            counter: {value: this.state.counter.value - this.props.step}
        })
    };

    render() {
        const {value} = this.state.counter;
        return (
            <Counter
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                value={value}
            />
        )
    }
}

const Counter = ({handleIncrement, handleDecrement, value}) => (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <p style={{fontSize: '40px', fontFamily: 'monospace'}}>{value}</p>
    </div>
)
