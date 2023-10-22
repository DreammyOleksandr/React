import logo from "../images/react.png"
const Header = () => {
  return (
    <div className="py-2 pt-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img
        src={logo}
        style={{ height: "55px", verticalAlign: "top" }}
        alt="Oops..."
      ></img>
      <span className="h2 pt-4 m-2" style={{ color: "lightGray" }}>
        React Course - Cyclopedia
      </span>
    </div>
  );
};
export default Header;