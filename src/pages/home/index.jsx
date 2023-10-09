import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <main className="container-home">
      <Outlet />
    </main>
  );
}
