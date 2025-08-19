Student Registration App

A simple React + TypeScript web application where students can register by filling out a form with their details (Name, Email, Age, and Course). After successful submission, the user can view all registered students on a Details Page.

This project is designed as a beginner-friendly practice application to demonstrate:

Form handling in React

State management using useState

Navigation between pages using React Router

Displaying data in a table format

Conditional rendering (showing success message after submission)

🚀 Features

Student Registration Form with validation

Success message after form submission

"Show Details" button visible only after submission

Details Page to view all registered students in a clean table

Built with React, TypeScript, and React Router

🛠️ Tech Stack

React (Frontend library)

TypeScript (Static typing)

React Router DOM (Page navigation)

Tailwind CSS / Basic CSS (Styling)

📂 Project Structure
src/
  components/
    DataTable/
      DataTable.tsx       # Displays student details in a table
    InputField/
      InputField.tsx      # Reusable input component (optional)
  pages/
    FormPage.tsx          # Student registration form
    DetailsPage.tsx       # Displays list of registered students
  App.tsx                 # Main app with routes

⚡ How It Works

Open the app → You see the Student Registration Form.

Fill in details → Click Submit.

A Success Message appears with a Show Details button.

Clicking Show Details → navigates to /details and shows all students.

📸 Demo Flow (Steps)

Start at: http://localhost:3000/

Fill form → Submit ✅

Success Message shown → Button → Navigate to Details Page

🏃‍♂️ Getting Started
1. Clone the repository
git clone command
cd my-app

2. Install dependencies
npm install

3. Run the project
npm start


App runs on http://localhost:3000/.

🎯 Learning Outcomes (Good for Resume)

Hands-on experience with React + TypeScript

Implemented Form Validation & State Management

Practiced React Router Navigation

Used Conditional Rendering to control UI flow

Created a simple Data Table to display records
