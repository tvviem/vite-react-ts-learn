import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.fName} style={{ color: 'red', fontSize: '16px' }}>
            {name.fName} {name.lName}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
