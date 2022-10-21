import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const appBar = [
  {
    key: 1,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    key: 2,
    label: "List",
    link: "/list",
  },
  {
    key: 3,
    label: "Logout",
    link: "/home",
  },
];

export default function HeaderLayout(params) {
  const history = useNavigate();
  const handleClickNavBar = (el) => {
    console.log(el);
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
