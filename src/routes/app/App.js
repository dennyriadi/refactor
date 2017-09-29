import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    const { people } = this.props;
    return (
      <div>
        <h1>People</h1>
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
