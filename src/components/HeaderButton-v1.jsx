import { NavLink } from "react-router-dom";

export default function HeaderButton({ children, to }) {
  return (
    <NavLink to={to} className="btn btn-warning rounded-pill headerButton text-white fw-bold mt-2">
      {children}
    </NavLink>
  );
}
