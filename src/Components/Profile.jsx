import React from 'react';
import Change_profile from '../Components_1/Change_profile';

const Profile = (props) => {
  return (
    <div>
        This page belongs to:<b>{props.username}</b>
        <Change_profile setUsername={props.setUsername} />
    </div>
  )
}

export default Profile
