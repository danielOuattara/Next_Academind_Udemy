import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import NewPost, { action as submitPost } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Posts, { loader as fetchPostsData } from "./routes/Posts";
import ErrorPage from "./components/error-page";
import PostDetails, { loader as fetchSinglePost } from "./routes/PostDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: fetchPostsData,
        children: [
          { path: "/create-post", element: <NewPost />, action: submitPost },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: fetchSinglePost,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
