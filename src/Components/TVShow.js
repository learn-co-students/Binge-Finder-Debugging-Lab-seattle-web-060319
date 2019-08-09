import React from 'react';

class TVShow extends React.Component{

  render(){
  return (
    <div>
      <br/>
      <img src={this.props.show.image.medium} onClick={this.handleClick} alt=""/>
    </div>
  );
}

  handleClick = () => {
    this.props.selectShow(this.props.show)
  }
}

export default TVShow;
