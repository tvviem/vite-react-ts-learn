import { PersonProps } from './Person.types';

export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h2>
        {name.fName} {name.lName}
      </h2>
    </div>
  );
};
