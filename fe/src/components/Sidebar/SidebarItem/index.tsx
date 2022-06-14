import { IconBaseProps } from 'react-icons';
import { Container } from './styles'

interface SidebarItemProps {
  name: string;
  label: string;
  endSection?: boolean;
  icon: React.ComponentType<IconBaseProps>;
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

export const SidebarItem = ({ 
  icon: Icon, 
  name,
  label,
  endSection,
  selectedItem, 
  setSelectedItem 
}: SidebarItemProps) => {
  const handleChangeSelectedItem = (value: string) => {
    setSelectedItem(value);
  }

  return (
    <>
      <Container isSelected={selectedItem.toLowerCase() === name.toLowerCase()} endSection={endSection} onClick={() => handleChangeSelectedItem(name)}>
        <Icon /> {label}
      </Container>
    </>
  );
}