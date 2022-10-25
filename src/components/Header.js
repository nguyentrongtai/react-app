import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const appBar = [
  {
    key: 1,
    label: "Home",
    link: "/home",
  },
  {
    key: 2,
    label: "List",
    link: "/list",
  },
  {
    key: 5,
    label: "About",
    link: "/about",
  },
  {
    key: 4,
    label: "Login",
    link: "/login",
  },
];

export default function HeaderLayout(params) {
  const history = useNavigate();
  const handleClickNavBar = (el) => {
    history(el.link);
  };
  return (
    <Header className="header">
      <div className="logo" />
      {appBar.map((el) => {
        return (
          <span
            onClick={() => handleClickNavBar(el)}
            key={el.key}
            className="menu-item"
          >
            {el.label}
          </span>
        );
      })}
    </Header>
  );
}
