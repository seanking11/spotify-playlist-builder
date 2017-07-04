import React, { Component } from 'react';
import { connect }      from 'react-redux';
import { Table } from 'react-bootstrap'
import {
  getMyInfo,
  setTokens,
  getMyRecent
}   from '../actions/actions';
import PlaylistTable from './PlaylistTable'

/**
 * Our user page
 * Displays the user's information
 */
class User extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {dispatch, params} = this.props;
    const {accessToken, refreshToken} = params;
    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getMyRecent());
  }

  /** Render the user's info */
  render() {
    const { accessToken, refreshToken, user, tracks } = this.props;
    const { loading } = tracks
    if (loading) {
      return <h2>Loading...</h2>;
    } else {
      console.log(tracks.items)
        return (
          <div className="user">
            <h2>{`Logged in as`}</h2>
            <div className="user-content"></div>
            <hr />
            <PlaylistTable items={tracks.items} />
          </div>
        );
      }
  }
}

export default connect(state => state)(User);
