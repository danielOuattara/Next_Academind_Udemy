import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostsList";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModalHandler = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  return (
    <main>
      <MainHeader toggleModalHandler={toggleModalHandler} />
      <PostList
        modalIsOpen={modalIsOpen}
        toggleModalHandler={toggleModalHandler}
      />
    </main>
  );
}

export default App;
