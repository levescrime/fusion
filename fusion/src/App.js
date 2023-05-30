import './App.css';
import FusionForm from "./components/forms/fusion_form";

function App() {
  /*
  some notes:
  The following code can be improved by making the input component fully generic, which responds and acts according to the input type.
  some of the validation behaviour was not clear by the instructions so I implemented in the UI as well as printing the error to the console.
   */

  return (
      <FusionForm/>
  );
}

export default App;
