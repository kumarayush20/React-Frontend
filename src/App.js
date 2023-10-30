import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTable from "./components/ViewTable";
import Login from "./components/Login";
import EditPage from "./components/EditPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<ViewTable />} />
        <Route path="/edit-employee/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
