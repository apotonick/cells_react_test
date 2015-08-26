import React from 'react';

class LightSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switchPosition: "on"
    };

    this.onClick = () => {
      this.state.switchPosition == "on" ? this.setState({switchPosition: "off"}) : this.setState({switchPosition: "on"})
    };
  }

  render() {
    var classes = this.state.switchPosition + " lightSwitch";
    return(
      <div className={classes} onClick={this.onClick}></div>
    );
  }
}

function renderComponent() {
  var nodes = document.getElementsByClassName("lightSwitchContainer");

  for (var i = 0; i < nodes.length; i++) {
    React.render(React.createElement(LightSwitch), nodes[i]);
  }
}

document.addEventListener("DOMContentLoaded", renderComponent);
