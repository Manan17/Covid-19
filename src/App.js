import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { getData } from "./api";
import coronaimage from "./images/corona-image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await getData();
    this.setState({ data: fetchedData });
  }

  handleCountry = async (country) => {
    const data = await getData(country);
    this.setState({ data, country });
  };
  render() {
    return (
      <div className={styles.container}>
        <img src={coronaimage} alt="COVID-19"></img>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountry} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
