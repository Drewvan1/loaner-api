import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import SearchBox from './SearchBox'
import { setSearchField } from '../actions'

import './navbar.css'


import { fetchUser } from '../actions'

const mapStateToProps = (state) => {
    return {
        user: state.requestUser.user,
        userIsPending: state.requestUser.userIsPending,
        userError: state.requestUser.userError
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onRequestUser: () => dispatch(fetchUser()),
        onSearchChange: (e) => dispatch(setSearchField(e.target.value))
    }
}

class Navbar extends Component {

    componentDidMount(){
        this.props.onRequestUser()
    }

    renderContent(){
        const { onSearchChange } = this.props
        const loginJSX = 
            <div className={"flex-grow pa3 flex items-center"}>
                <a className={"f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"} href="/auth/google">Sign In With Google</a>
            </div>

        const logoutJSX = 
            <div className={"flex-grow pa3 flex items-center"}>
                <a className={"f6 link dib white dim mr3 mr4-ns"} href="/test">{this.props.user.name}</a>
                <a className={"f6 link dib white dim mr3 mr4-ns"} href="/api/reservations/new">Reserve Loaner</a>
                <a className={"f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"} href="/api/logout">Logout</a>
                <SearchBox onSearchChange = {onSearchChange}/>
            </div>

        return (this.props.user ? logoutJSX: loginJSX)
    }


    render(){
        return(
            <nav className={"flex justify-between bb b--white-10 bg-dark-blue"}>
                
                {/* <Link to={this.props.user ? '/loaners' : '/'}>
                    Van's Honda
                </Link> */}
                {this.renderContent()}
            </nav>
        )
    }

}

export default connect(mapStateToProps, MapDispatchToProps)(Navbar);