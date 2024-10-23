import { Outlet } from 'react-router';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function Layout({ tab, setTab, products, carts ,setToken}) {
  return <div>
    <Header />
    <Navbar products={products} carts={carts} tab={tab} setTab={setTab} setToken={setToken}/>

    <Outlet />
    <Footer />
  </div>
}

export default Layout;
