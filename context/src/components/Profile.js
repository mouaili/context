import React, { Component } from 'react';
import lisa from '../images/portrait.avif';
import ProfileData from './ProfileData';
import { MyContext } from './ReactContext/MyContext';

export default class Profile extends Component {
  render() {
    /**
    Props information
    */

    return (
      <MyContext.Consumer>
        {data => {
          console.log(data);
          return (
            <div className="col">
              <h1 className="text-success fw-semibolder text-center">
                {data.person} ?
              </h1>

              <img
                className="d-block m-auto img-thumbnail"
                style={{ width: '300px', height: '352px' }}
                src={lisa}
                alt="lisa profile"
              />

              <ProfileData />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
