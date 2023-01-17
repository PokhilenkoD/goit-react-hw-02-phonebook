import { Component } from 'react';

export class Filter extends Component {
    props = {
        
    }
  state = {
    filter: '',
  };

  handleChange = evt => {
      this.setState({ filter: evt.target.value });
      
  };
  render() {
      const { filter } = this.state;
      
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input type="text" value={filter} onChange={this.handleChange} />
      </div>
    );
  }
}


