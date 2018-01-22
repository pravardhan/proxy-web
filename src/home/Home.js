import React from 'react';
import {connect} from 'react-redux';
import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import JsonView from '../common/components/JsonView';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/about" >about</Link>
        <h1 >You are on the home page.. {this.props.home.user.login}</h1>
        {this.props.home.load && <JsonView /> }
      </div>
    );
  }
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type:ACTION.HOME.GETHOME});
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

export default connect(mapStateToProps)(Home);