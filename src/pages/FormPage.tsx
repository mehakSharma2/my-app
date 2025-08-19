import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormPageProps = {
  students: any[];
  setStudents: React.Dispatch<React.SetStateAction<any[]>>;
};

const FormPage: React.FC<FormPageProps> = ({ students, setStudents }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !age || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name,
      email,
      age,
      course,
    };

    setStudents([...students, newStudent]);
    setSubmitted(true);

    setName("");
    setEmail("");
    setAge("");
    setCourse("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Student Registration Form</h2>

      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Age: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <label>Course: </label>
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="">Select</option>
              <option value="React">React</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

     
      {submitted && (
        <div>
          <p style={{ color: "green", fontWeight: "bold" }}>
            ✅ Successfully Submitted!
          </p>
          <button onClick={() => navigate("/details")}>Show Details</button>
        </div>
      )}
    </div>
  );
};

export default FormPage;
