import React from 'react';

class NoData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  clickHandler(event) {
    
  }

 render() {
    
    return (
      <div>
        <img className={this.props.className} src={this.props.src} key={0} onClick={console.log('clicked me!')}/>
      </div>
    );
  }
}

export default NoData;
