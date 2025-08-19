import React from "react";

type DetailsPageProps = {
  students: any[];
};

const DetailsPage: React.FC<DetailsPageProps> = ({ students }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Submitted Students</h1>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        {students.length === 0 ? (
          <p>No students submitted yet.</p>
        ) : (
          <ul>
            {students.map((s) => (
              <li key={s.id} className="border-b p-2">
                {s.name} - {s.course}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
