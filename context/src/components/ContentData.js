import React from 'react';
import { MyContext } from './ReactContext/MyContext';

const ContentData = () => {
  return (
    <MyContext.Consumer>
      {user => {
        console.log(user);
        return (
          <div className="collapse" id="collapseExemple">
            <div className="card card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Name : <strong className="text-danger">{user.name}</strong>
                </li>
                <li className="list-group-item">
                  Age : <strong className="text-danger">{user.age}</strong>{' '}
                  years
                </li>
                <li className="list-group-item">
                  Job : <strong className="text-danger">{user.job}</strong>{' '}
                </li>
              </ul>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default ContentData;
