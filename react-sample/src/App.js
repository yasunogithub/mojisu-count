import logo from './logo.svg';
import './App.css';
import unicodeLength from 'unicode-length';

import React, {Component} from 'react';

const App = () => <Counter />;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, textValue: 'initial value'};
  }

  handleTextChange(textValue) {
    this.setState({textValue});
  }

  handleCountChange(textLength) {
    this.setState({count: textLength});
  }

  render() {
    return (
      <React.Fragment>
        <div>文字数： {this.state.count}</div>
        <textarea
          type="text"
          onChange={e => this.handleTextChange(e.target.value)}
          onKeyUp={e => this.handleCountChange(unicodeLength.get(e.target.value))}
        />
      </React.Fragment>
    );
  }
}

export default App;
