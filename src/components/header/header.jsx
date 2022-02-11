import { useSelector } from 'react-redux';

const Header = () => {
  const github = useSelector((state) => state.github);
  return (
    <header>
      {github.zen}
    </header>
  );
};

export default Header;
