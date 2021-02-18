import React, { Component } from "react";
import wp_arr from './DisplayMapClass';

var data=[];

export default class Parameters extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sensor: '',
        noi: null,
        dh: null,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
  
    handleSubmit(event) {
      // alert('Selected Sensor: ' + this.state.sensor + ' ' + 'No.Of Images: ' + this.state.noi + ' ' + 'Drone Height: ' + this.state.dh);
      data.push({
        sensor: this.state.sensor,
        no_of_images: this.state.noi,
        drone_height:this.state.dh
      });
      event.preventDefault();
      console.log(data);
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
        <br></br>
        Latitude: <h5 id='lat'></h5>
        Longitude: <h5 id='lon'></h5>
        <label>
          Select Sensor:
          <select type='text' name='sensor' onChange={this.handleChange}>
            <option value="sensor1">Sensor1</option>
            <option value="sensor2">Sensor2</option>
            <option value="sensor3">Sensor3</option>
            <option value="sensor4">Sensor4</option>
          </select><br></br>
        </label>
        <label>
          No. Of Images:
          <input type="number" name='noi' onChange={this.handleChange} />
        </label><br></br>
        <label>
          Drone Height(m):
          <input type="number" name='dh' onChange={this.handleChange} />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      );
    }
  }

