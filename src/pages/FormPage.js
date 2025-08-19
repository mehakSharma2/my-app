import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

function FormPage({ students, setStudents }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    } else {
      setError("");
    }

    if (email === "" || age === "" || course === "") {
      alert("All fields are required");
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

    setName("");
    setEmail("");
    setAge("");
    setCourse("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Student Registration Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6"
      >
        <InputField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error}
        />

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Age"
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course
          </label>
          <select
            className="w-full border p-2 rounded"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select course</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/details")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Show Details
        </button>
      </div>
    </div>
  );
}

export default FormPage;
