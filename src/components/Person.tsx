import React from 'react';

type PersonProps = {
  name: {
    fName: string;
    lName: string;
  };
};

export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.fName} {name.lName}
    </div>
  );
};
