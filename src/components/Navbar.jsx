import React from "react";

function Navbar(){
  var navbar = {
    fontFamily: 'sans-serif',
    display: 'inline-block',
    border: '2px solid #ecf0f1',
    padding: '20px',
    margin: '0px',
    fontName: 'arial',
    textAlign: 'center',
    marginBottom: '2%',
    marginTop: '2%',
    // borderRadius: '16px'
  }

  var searchbar = {
    fontFamily: 'sans-serif',
    display: 'inline-block',
    border: '2px solid lightblue',
    padding: '10px',
    marginTop: '15px',
    width: '250px',
    fontName: 'arial',
    textAlign: 'center',
    borderRadius: '32px',
    float: 'right',
    textAlign: 'left',
    marginBottom: '2%',
    marginTop: '4%',
  }
  var tweetbar = {
    fontFamily: 'sans-serif',
    display: 'inline-block',
    border: '2px solid lightblue',
    padding: '10px',
    marginLeft: '30px',
    marginTop: '15px',
    width: '80px',
    fontName: 'arial',
    textAlign: 'center',
    borderRadius: '32px',
    float: 'right',
    marginBottom: '2%',
    marginTop: '4%',
  }




  return (
    <div>
      <span style={navbar}>Home</span>
      <span style={navbar}>Notification</span>
      <span style={navbar}>Messages</span>
      <span style={tweetbar}>Tweet</span>
      <span style={searchbar}>Search</span>
      <hr/>

    </div>
  );
}


export default Navbar;
