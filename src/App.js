import "./App.css";
import { ClassState } from "./ClassState/ClassState";
import { UseState } from "./UseState/UseState";

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
