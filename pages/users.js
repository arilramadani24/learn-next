import Header from '../components/header';
import Sidebar from '../components/Sidebar';

export default function Users() {
  return (
    <>
      <Header title={'Admin Page | Users'} />
      <div className="flex">
        <Sidebar />
        <div>
          <h2>Users</h2>
        </div>
      </div>
    </>
  );
}
