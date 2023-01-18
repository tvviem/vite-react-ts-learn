type GreetProps = {
  name: string;
  messageCount?: number; // optional prop
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${
              props.messageCount ? props.messageCount : 0
            } unread messages `
          : 'Welcome GUEST'}
      </h2>
    </div>
  );
};
