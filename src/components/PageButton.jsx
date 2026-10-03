import { NavLink } from "react-router-dom";

export default function PageButton({ children, to }) {
  return (
    <NavLink to={to} className="btn btn-warning rounded-pill PageButton text-white fw-bold mt-2">
      {children}
    </NavLink>
  );
}
