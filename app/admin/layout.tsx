import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 mr-5 p-5">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
