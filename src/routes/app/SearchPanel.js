import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';

const SearchPanel = props => {
  const {
    age,
    ageRange,
    gender,
    search,
    setAge,
    setAgeRange,
    setGender,
  } = props;

  const onChange = e => {
    const { name, value } = e.target;
    const funcMap = {
      gender: setGender,
      ageRange: setAgeRange,
      age: setAge,
    };

    return funcMap[name](value);
  };

  const handleClick = () => {
    search({ age, ageRange, gender });
  };

  return (
    <div className="container-fluid">
      <div className="form-group">
        <label className="col-2">Gender:</label>
        <select name="gender" className="custom-select mr-2" onChange={onChange}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label className="col-2">Age: </label>
        <select name="ageRange" className="custom-select mr-2" onChange={onChange}>
          <option value="">Equal</option>
          <option value="lt">Younger than</option>
          <option value="gt">Older than</option>
        </select>
        <input
          name="age"
          type="number"
          min="0"
          className="form-control w-50 d-inline-block"
          placeholder="eg. 30, blank for all ages"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

SearchPanel.defaultProps = {
  age: '',
  ageRange: '',
  gender: '',
};

SearchPanel.propTypes = {
  age: PropTypes.string,
  ageRange: PropTypes.string,
  gender: PropTypes.string,
  search: PropTypes.func.isRequired,
  setAge: PropTypes.func.isRequired,
  setAgeRange: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
};

const enhance = compose(
  withState('gender', 'setGender', ''),
  withState('ageRange', 'setAgeRange', ''),
  withState('age', 'setAge', '')
);

export default enhance(SearchPanel);
