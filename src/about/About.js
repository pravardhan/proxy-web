import React from 'react';
import { Link } from 'react-router-dom';
import '../../utils/font.less';
import {connect} from 'react-redux';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <h2 className = "title">This is a About page.</h2>
      </div>
    );
  }
  componentDidMount(){

  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

export default connect(mapStateToProps)(About);
