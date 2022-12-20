import { CgNotes } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineCategory, MdOutlineComputer } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';

export const menus = [
  { name: 'Dashboard', link: '/', icon: RxDashboard },
  { name: 'Users', link: '/users', icon: FiUsers },
  { name: 'Category', link: '/', icon: MdOutlineCategory, margin: true },
  { name: 'Product', link: '/', icon: MdOutlineComputer },
  { name: 'Orders', link: '/', icon: CgNotes },
  { name: 'Logout', link: '/login', icon: RiLogoutBoxLine, margin: true },
];
