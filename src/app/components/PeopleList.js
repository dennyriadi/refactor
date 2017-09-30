import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const PeopleList = ({ people }) => {
  const styleByGender = person => person.gender === 'male' ? 'info' : 'warning';

  return (
    <div className="container-fluid">
      <ul className="list-group">
        {
          R.map(person =>
            <li
              key={uuid()}
              className={`list-group-item list-group-item-${styleByGender(person)}`}>
              {`${person.name} (${person.age})`}
            </li>
          )(people)
        }
      </ul>
    </div>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleList;