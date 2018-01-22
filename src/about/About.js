import React from 'react';
import { Link } from 'react-router-dom';
import '../../utils/font.less';

export default class About extends React.Component {
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
    setTimeout(()=>{
      console.log("yess");
    },1000);
  }
}
