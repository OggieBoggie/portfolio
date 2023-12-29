import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import * as React from 'react';

interface MenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle} className="text-white focus:outline-none">
      {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
    </button>
  );
};

export default MenuButton;