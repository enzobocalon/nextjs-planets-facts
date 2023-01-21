import React, { createContext, useState } from 'react';

interface IModes {
  isActive: number;
  setIsActive: React.Dispatch<React.SetStateAction<number>>
}

type ProviderProps = {
  children: React.ReactNode
}

export const ActionContext = createContext({} as IModes);

const ActionProvider = ({children}: ProviderProps) => {
	const [isActive, setIsActive] = useState(1);

	return (
		<ActionContext.Provider
			value={{
				isActive,
				setIsActive
			}}
		>
			{children}
		</ActionContext.Provider>
	);
};

export default ActionProvider;
