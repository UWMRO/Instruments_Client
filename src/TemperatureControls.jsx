import React from 'react';

// 1. React renders our App component
// 2. App tells React it wants a TemperatureControls instance
// 3. React creates a new TemperatureControls object
// 4. React creates a new HTML element and _mounts_ the TemperatureControls object on it
// 5. React calls TemperatureControls.render() to fill in the HTML element
// 6. React calls TemperatureControls.componentDidMount() since it did mount

class TemperatureControls extends React.Component {
  state = {
    temperature: 0
  }

  // 1 time setup
  componentDidMount() {
    this.refreshTemperature()
  }

  async refreshTemperature() {
    const response = await fetch('/temperature')
    const data = await response.json()
    console.log(data)
    // change state member variable and re-render
    this.setState({ temperature: data.temperatures.sensor })
  }

  // refresh content on first time setup and on any change
  render() {
    return (
      <div>
        <h3>Temperature Controls</h3>
        <div>{this.props.foo} - {this.props.value}</div>
        <div>
          <b>Current temperature:</b> {this.state.temperature}°C
        </div>
        <div>
          <button onClick={this.refreshTemperature}>Refresh</button>
        </div>
      </div>
    )
  }
}

export default TemperatureControls;
