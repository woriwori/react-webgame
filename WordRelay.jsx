import React, { Component } from 'react';

class WordRelay extends Component {
  state = {
    word: '제로초',
    value: '',
    result: '',
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.word[this.state.word.length - 1]);
    console.log(this.state.value[0]);
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState((prevState) => ({
        result: '딩동댕',
        word: prevState.value,
        value: '',
      }));
    } else {
      this.setState({
        ...this.state,
        result: '땡',
        value: '',
      });
    }
  };
  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };
  input;
  onRefInput = (c) => {
    this.input = c;
  };
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelay;
