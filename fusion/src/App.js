import './App.css';
import FusionForm from "./components/forms/fusion_form";

function App() {
  /*
  some notes:
  The following code can be improved by making the input component fully generic, which responds and acts according to the input type.
  Some of the validation behavior was not clear from the instructions, so I implemented it in the UI and also printed the error to the console."
   */

  return (
      <FusionForm/>
  );
}

export default App;
