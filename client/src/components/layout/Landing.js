import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


 class Landing extends Component {

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }


  render() {
    return ( 
        <div className="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">devsSocial
            </h1>
            <p className="lead"> Create a developer profile/portfolio, share posts and interact with other developers</p>
            <hr />
            <Link to="/register" className="btn btn-lg btn-light mr-2 text-danger">Sign Up</Link>
            <Link to="/login" className="btn btn-lg btn-light text-success">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps)(Landing);