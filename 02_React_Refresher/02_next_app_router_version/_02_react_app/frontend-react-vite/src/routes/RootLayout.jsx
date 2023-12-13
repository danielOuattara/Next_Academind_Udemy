import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export default function RootLayout(props) {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
