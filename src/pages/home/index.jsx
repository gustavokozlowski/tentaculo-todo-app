import { Outlet } from "react-router-dom";
// import { ModalComponent } from "../../components/modal";
export function Home() {
  return (
    <main className="container-home">
      <Outlet />
    </main>
  );
}
