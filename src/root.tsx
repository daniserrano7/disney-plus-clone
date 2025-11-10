import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="color-font-subtle font-primary">
      <Outlet />
    </div>
  );
}
