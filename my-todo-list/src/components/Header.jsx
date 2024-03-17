import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>오늘은 📅</h2>
      <div>{new Date().toDateString()}</div>
    </div>
  );
};

export default Header;
