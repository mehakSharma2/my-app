Student Registration App

A simple React + TypeScript web application where students can register by filling out a form with their details (Name, Email, Age, and Course). After successful submission, the user can view all registered students on a Details Page.

This project is designed as a beginner-friendly practice app to demonstrate:

Form handling in React

State management using useState

Navigation between pages using React Router

Conditional rendering (showing success message only after submission)

Data display in a table format

🚀 Features

Student Registration Form with basic validation

Success message appears after submission

“Show Details” button visible only after successful submission

Details Page with a clean table of all registered students

Built with React, TypeScript, and React Router

🛠️ Tech Stack

React – Frontend framework

TypeScript – Type safety and cleaner code

React Router DOM – Navigation between pages

Tailwind CSS / Plain CSS – Styling

📂 Project Structure
src/
  components/
    DataTable/
      DataTable.tsx       # Displays student details in a table
    InputField/
      InputField.tsx      # Reusable input field component
  pages/
    FormPage.tsx          # Student registration form
    DetailsPage.tsx       # Displays list of registered students
  App.tsx                 # Main app with routing setup

⚡ How It Works

Start at / → Student Registration Form

Fill in details → Click Submit

✅ Success message is displayed + Show Details button appears

Clicking Show Details → navigates to /details → shows registered students in a table

📸 Demo Flow

Homepage → Fill out the form

Submit → Success message shown

Show Details → Table with student data

🏃 Getting Started
1. Clone the repository
git clone <repo-url>
cd my-app

2. Install dependencies
npm install

3. Run the app
npm start



🎯 Learning Outcomes

Learned React + TypeScript fundamentals

Implemented form validation and state management

Practiced routing and conditional rendering

Displayed tabular data with a DataTable component

Built a fresher-level full React app
