import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class SignUp extends Component {
  render() {
    return (
 //     <div>
 //       <Link to='/'>Home</Link>
 //       <Link to='/signup'>SignUp</Link>
 //       <Link to='/login'>LogIn</Link>
 //       <div>
         <MuiThemeProvider muiTheme={getMuiTheme()}>
           <RaisedButton label='Sign Up' primary={true} />
        </MuiThemeProvider>
 //      </div>        
 //     </div>
      );
  }
}

export default SignUp;