import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';


class Nav extends Component {
    render() {
      return (
        <div className="nav">
    <Link to="/home">
    <img src="/images/user-icon.PNG" className="imgicon" /> 
      
    </Link>
    <Link className ="nav-link">{this.props.user.username}</Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {this.props.user.id ? 'Dash Board' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {this.props.user.id && (
        <>
          <Link className="nav-link" to="/secrets">
            Secrets Page
          </Link>
          <Link className="nav-link" to="/entry">
            Entry Page
          </Link>
          <Link className="nav-link" to="/allusers">
            All User
          </Link>
          <Link className="nav-link" to="/masterdata">
            Master Data
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link to="/home">
    <img src="/images/home-icon.PNG" className="imgicon" /> 
    </Link>
    </div>
  </div>
      )
    }
}

// const Nav = (props) => (
//   <div className="nav">
//     <Link to="/home">
//     <img src="/images/user-icon.PNG" className="imgicon" /> 
//       {/* {this.props.alluserReducer.username} */}
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link-home" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? 'Dash Board' : 'Login / Register'}
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           <Link className="nav-link" to="/secrets">
//             Secrets Page
//           </Link>
//           <Link className="nav-link" to="/allusers">
//             All User
//           </Link>
//           <Link className="nav-link" to="/masterdata">
//             Master Data
//           </Link>
//           <LogOutButton className="nav-link"/>
//         </>
//       )}
//       {/* Always show this link since the about page is not protected */}
//       <Link className="nav-link" to="/about">
//         About
//       </Link>
//       <Link to="/home">
//     <img src="/images/home-icon.PNG" className="imgicon" /> 
//     </Link>
//     </div>
//   </div>
// );

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  alluserReducer: state.alluserReducer,

});

export default connect(mapStateToProps)(Nav);
