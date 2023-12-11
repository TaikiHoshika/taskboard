import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./pages/task/Task";
import Dashboard from "./pages/dashboard/Dashboard";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Dashboard />} />
                <Route path="/task" element={<Task />} />
            </Route>
            <Route path="*" element={<h1>404<br />Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
);