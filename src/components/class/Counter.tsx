import { Component } from 'react';

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 1987
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <p>
          {this.props.message}, countValue= {this.state.count}
        </p>
      </div>
    );
  }
}
