import { Routes, Route } from "react-router-dom";
import {
  AllMeetUpPage,
  NewMeetUpPage,
  FavoritePage,
  NotFoundPage,
} from "./pages";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUpPage />} />
          <Route path="/new-meetup" element={<NewMeetUpPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
