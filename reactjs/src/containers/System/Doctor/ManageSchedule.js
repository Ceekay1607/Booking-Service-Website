import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from "../../../redux";

class ManageSchedule extends Component {
    render() {
        return (
            <>
                <div>
                    manage schedule
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedin: state.user.isLoggedin
    }
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);

