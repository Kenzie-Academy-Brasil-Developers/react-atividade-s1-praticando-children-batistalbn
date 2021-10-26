import "./styles.css";

function CenteredCard({ children, anime }) {
  return (
    <div className={anime}>
      <span>{children}</span>
    </div>
  );
}

export default CenteredCard;
