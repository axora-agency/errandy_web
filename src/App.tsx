import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouting } from "./routing";
import { PathnameProvider } from "./providers";
import { Toaster } from "./components/ui/sonner";

const { BASE_URL } = import.meta.env;

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <PathnameProvider>
        <AppRouting />
        <Toaster />
      </PathnameProvider>
    </BrowserRouter>
  );
}

export default App;
