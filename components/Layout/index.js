import Head from "next/head";
import Sidebar from "../Sidebar";

const Layout = ({ title, content }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Sidebar />
      <div>{content}</div>
    </div>
  );
};

export default Layout;
