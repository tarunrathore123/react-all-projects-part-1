import React from "react";
import CardList from "../../components/card-list/card-list.component";
import banner from "../../assets/7458.jpg";
import "../../../src/logo.svg";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      searchField: "",
    };
  }

  componentDidMount = async () => {
    await fetch("https://open-api-for-all.herokuapp.com/jobs")
      .then((response) => response.json())
      .then((users) => this.setState({ jobs: users }));
  };
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { jobs, searchField } = this.state;
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="container">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            onChange={this.onSearchChange}
          />
        </div>

        {/* <CardList games={this.state.games} >
              
            </CardList> */}
        <CardList games={filteredJobs}></CardList>
      </div>
    );
  }
}

export default HomePage;
