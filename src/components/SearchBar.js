import React from 'react';

class SearchBar extends React.Component {
  state = { text: '' };

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <div className='ui segment'>
        <div className='ui form'>
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input
              type='text'
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
