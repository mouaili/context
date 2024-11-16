import React, { Component } from 'react';
import Profile from './components/Profile';
import { MyContext } from './components/ReactContext/MyContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Lisa',
        age: 22,
        person: 'How is my friend',
        job: 'JavaScript Developer',
      },
    };
  }

  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <MyContext.Provider value={this.state.user}>
            <Profile />
          </MyContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
