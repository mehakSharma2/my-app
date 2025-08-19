import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import DetailsPage from "./pages/DetailsPage";

export type Student = {
  id: number;
  name: string;
  email: string;
  age: string;
  course: string;
};

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<FormPage students={students} setStudents={setStudents} />}
        />
        <Route path="/details" element={<DetailsPage students={students} />} />
      </Routes>
    </Router>
  );
};

export default App;
