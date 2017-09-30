import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './components/SearchPanel';
import PeopleList from './components/PeopleList';

class App extends React.Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    const { people, getPeople } = this.props;
    return (
      <div>
        <h1>People</h1>
        <SearchPanel search={getPeople} />
        <PeopleList people={people} />
      </div>
    );
  }
}

App.propTypes = {
  getPeople: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
};

export default App;
