import { Logo } from "../logo";
import { HashLink } from "react-router-hash-link";
import "../../assets/css/header.css";
import { Link } from "react-router-dom";

export function Header() {
  const navlinks = [
    { title: "home", to: "/home" },
    { title: "tarefas", to: "/todo-list" },
    { title: "calendário", to: "/calendar" },
  ];
  return (
    <header className="container-header">
      <div className="content-header">
              <Logo />
        <nav className="container-navbar">
          <div className="content-navbar">
            {navlinks.map((navlink, index) => (
                <Link
                key={index}
                smooth
                to={`${import.meta.env.VITE_PUBLIC_URL + navlink.to}`}
                className="link-navbar"
                >
                {navlink.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
