import React from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";

function DetailsPage({ students }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Submitted Students
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <DataTable data={students} />
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;
