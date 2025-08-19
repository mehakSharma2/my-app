import React from "react";

export default function DataTable({ data }) {
  if (data.length === 0) {
    return <p className="text-gray-500 text-center p-4">No data available</p>;
  }

  return (
    <table className="w-full border-collapse border text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Age</th>
          <th className="border p-2">Course</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            <td className="border p-2 text-center">{row.id}</td>
            <td className="border p-2">{row.name}</td>
            <td className="border p-2">{row.email}</td>
            <td className="border p-2 text-center">{row.age}</td>
            <td className="border p-2">{row.course}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
