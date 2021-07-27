import { FC } from 'react';

const Button: FC<{}> = ({ children }) => {
	return <button className="foo">{children} ???? </button>;
};

export { Button };
