import React from 'react';
import ContentData from './ContentData';
import { MyContext } from './ReactContext/MyContext';

const ProfileData = () => {
  return (
    <MyContext.Consumer>
      {info => {
        console.log(info);
        return (
          <div>
            <p>
              <a
                className="btn btn-primary mt-4 d-block m-auto"
                data-bs-toggle="collapse"
                href="#collapseExemple"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Informations about {info.name} ?
              </a>
            </p>

            <ContentData />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default ProfileData;
