import React from 'react';
import { Greet } from '../Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      Extract props of other component: {props.name} with{' '}
      {props.isLoggedIn ? ' logged in ' : ' offline'}
    </div>
  );
};
