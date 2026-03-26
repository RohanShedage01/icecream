import "./Button.css";

function Button({ children, onClick, type = "button", disabled = false, className = "" }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;;
