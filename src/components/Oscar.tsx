import React from 'react';

type OscarProps = {
  children: React.ReactNode; // >= react 17, needn't import
};

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
