import React from "react";

function Profile(){
  var profileTop = {

      left:'0%',
      width: '33%',
      height: '25%',
      position: 'absolute',
      background: 'blue',
      border: '2px solid blue',
      marginLeft: '2%',
      marginTop: '2%',

  }
  var profileBottom = {
      top: '30%',
      left:'0%',
      width: '33%',
      height: '15%',
      position: 'absolute',
      background: 'white',
      border: '2px solid lightgray',
      marginLeft: '2%',
      marginTop: '2%',
  }

  return (
    <div>
      <div style={profileTop}></div>
      <div style={profileBottom}></div>
      </div>
  );
}

export default Profile;
