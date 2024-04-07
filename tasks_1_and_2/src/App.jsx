import "./App.css";
import "./ParentComponent";
import ParentComponent from "./ParentComponent";
// from task 2
import User from "./User";

function App() {
  return (
    <>
      <ParentComponent />
      yeah, that's it
      <User />
    </>
  );
}

export default App;
