import React, { useState } from "react";
import "./Dashboard.css";

const AdminDashboard = () => {
  // Example submissions (you can replace with real data or props)
  const [submissions] = useState([
    {
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+2348012345678",
      message: "Interested in your services.",
      date: "Sun, Mar 22, 2026, 03:15 PM"
    },
    {
      name: "John Smith",
      email: "john@example.com",
      phone: "+2348098765432",
      message: "Need more information about pricing.",
      date: "Sun, Mar 22, 2026, 03:20 PM"
    }
  ]);

  return (
    <div className="dashboard">
      <section className="card">
        <h2>Contact Form Submissions</h2>
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date Submitted</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, index) => (
                <tr key={index}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.phone}</td>
                  <td>{s.message}</td>
                  <td>{s.date}</td>
                </tr>
              ))}
              {submissions.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No submissions yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
