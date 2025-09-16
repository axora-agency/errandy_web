import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouting } from "./routing";
import { PathnameProvider } from "./providers";

const { BASE_URL } = import.meta.env;

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <PathnameProvider>
        <AppRouting />
      </PathnameProvider>
    </BrowserRouter>
  );
}

export default App;
