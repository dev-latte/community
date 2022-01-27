import React from "react";
import { connect } from "react-redux";
import user from "../modules/user";

const UserContainer = () => {

}

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        user: () => dispatch(user())
    }),


)(UserContainer);