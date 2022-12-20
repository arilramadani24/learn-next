import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ title, content }) => {
  return (
    <div>
      <Header title={title} />
      <Sidebar />
      <div>{content}</div>
    </div>
  );
};

export default Layout;
