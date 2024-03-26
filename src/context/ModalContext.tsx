import { ReactNode, createContext, useContext, useState } from 'react';

type IModalContext = {
	isOpen: boolean;
	type: 'product' | 'information';
	product?: IFood;
	handleOpen: () => void;
	handleClose: () => void;
	handleType: (modalType: 'product' | 'information') => void;
	handleProduct: (modalProduct: IFood) => void;
};

type IModalProvider = {
	children: ReactNode;
};

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IModalProvider) => {
	const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState<'product' | 'information'>('product');
	const [product, setProduct] = useState<IFood>({} as IFood);

	function handleOpen() {
		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
	}

	function handleType(modalType: 'product' | 'information') {
		setType(modalType);
	}

	function handleProduct(modalProduct: IFood) {
		setProduct(modalProduct);
	}

	return (
		<ModalContext.Provider
			value={{
				isOpen,
				handleOpen,
				handleClose,
				type,
				product,
				handleType,
				handleProduct,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export function useModal() {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}

	return context;
}
