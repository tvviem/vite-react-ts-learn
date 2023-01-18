import React from 'react';

type PersonListProps = {
  names: { fName: string; lName: string }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.fName} style={{ color: 'blue', fontSize: '16px' }}>
            {name.fName} {name.lName}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
