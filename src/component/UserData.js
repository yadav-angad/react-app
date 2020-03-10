import React from 'react';

export const UserData = props => {
  const id = props.match.params.id;
  const queryParams = new URLSearchParams(props.location.search);
  const name = queryParams.get("fName");

  return (
      <div className="content divLeftAlign" id="content">
        <p>{id} User Page {name}</p>
      </div>
  );
};

export default UserData;