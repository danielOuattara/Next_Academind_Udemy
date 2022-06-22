import { Routes, Route } from "react-router-dom";
import {
  AllMeetUpPage,
  NewMeetUpPage,
  FavoritePage,
  NotFoundPage,
} from "./pages";
import MainNavigation from "./components/layout/MainNavigation";

export default function App() {
  return (
    <>
      <MainNavigation />

      <Routes>
        <Route path="/" element={<AllMeetUpPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
