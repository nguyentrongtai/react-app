import { Layout } from "antd";
import "@assets/scss/footer.scss";

const { Footer } = Layout;
export default function FooterLayout() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      ©2022 Created by Taytra.Mylove@gmail.com
    </Footer>
  );
}
