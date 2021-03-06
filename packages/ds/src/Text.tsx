import React, { FC } from 'react';

type Props = {
	isBeep?: boolean;
};

const Text: FC<Props> = ({ isBeep, children }) => {
	return isBeep ? (
		<p style={{ color: 'pink' }}>{children}</p>
	) : (
		<span>{children}</span>
	);
};

export { Text };
