import NavigationItem from './NavigationItem';

export interface NavItemType {
  href: string;
  label: string;
}

const items = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/settings', label: 'Setting' },
];

const Navigation = () => {
  return (
    <nav className="flex flex-col text-sm gap-3">
      {items.map((item, index) => (
        <NavigationItem key={index} navItem={item} />
      ))}
    </nav>
  );
};

export default Navigation;
