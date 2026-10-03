export default function Button({ children, onClick }) {
  return (
    <button
      type="submit"
      className="btn btn-warning rounded-pill PageButton text-white fw-bold mt-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}