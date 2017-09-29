import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './components/SearchPanel';

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
        {R.map(R.propOr('Denny', 'name'))(people)}
      </div>
    );
  }
}

App.propTypes = {
  getPeople: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
};

export default App;
