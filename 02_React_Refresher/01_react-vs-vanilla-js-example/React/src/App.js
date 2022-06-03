import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Gatsby" />
      <Todo text="Learn Vue" />
      <Todo text="Learn Vite" />
    </div>
  );
}

export default App;
