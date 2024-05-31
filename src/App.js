import "./App.css";
import { UseReducer } from "./useReducer";
// import { ClassState } from "./ClassState/ClassState";
import { UseState } from "./UseState/UseState";

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      {/* <ClassState name="ClassState" /> */}
      <UseReducer name="Use Reducer"/>

    </div>
  );
}

export default App;
