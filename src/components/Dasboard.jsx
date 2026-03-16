import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import "./Dashboard.css";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // ✅ Sample contacts
      setContacts([
        { id: 1, name: "Jane Doe", email: "jane@example.com", phone: "+2348012345678", message: "Interested in enrollment" },
        { id: 2, name: "John Smith", email: "john@example.com", phone: "+2348098765432", message: "Need more info about courses" },
        { id: 3, name: "Mary Johnson", email: "mary@example.com", phone: "+2348023456789", message: "Can I schedule a visit?" }
      ]);

      // ✅ Sample applications
      setApplications([
        { id: 1, applicant_name: "Alice Brown", course: "Truck Driving Basics", status: "Pending" },
        { id: 2, applicant_name: "Bob White", course: "Advanced Logistics", status: "Approved" },
        { id: 3, applicant_name: "Charlie Green", course: "Heavy Vehicle Training", status: "Rejected" }
      ]);

      // ✅ Sample enrolled students
      setStudents([
        { id: 1, name: "Samuel Okoro", course: "Truck Driving Basics", start_date: "2026-03-01" },
        { id: 2, name: "Grace Adeyemi", course: "Advanced Logistics", start_date: "2026-02-15" },
        { id: 3, name: "David Musa", course: "Heavy Vehicle Training", start_date: "2026-01-20" }
      ]);

      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <p className="loading">Loading dashboard...</p>;

  // ✅ Chart Data
  const applicationStatusData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        label: "Applications",
        data: [
          applications.filter(app => app.status === "Approved").length,
          applications.filter(app => app.status === "Pending").length,
          applications.filter(app => app.status === "Rejected").length
        ],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"]
      }
    ]
  };

  const studentsByCourseData = {
    labels: [...new Set(students.map(s => s.course))],
    datasets: [
      {
        label: "Students Enrolled",
        data: [...new Set(students.map(s => s.course))].map(
          course => students.filter(s => s.course === course).length
        ),
        backgroundColor: ["#2196f3", "#9c27b0", "#ffc107"]
      }
    ]
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title fade-in">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-card bounce">
          <h3>Total Contacts</h3>
          <p className="counter">{contacts.length}</p>
        </div>
        <div className="stat-card bounce">
          <h3>Total Applications</h3>
          <p className="counter">{applications.length}</p>
        </div>
        <div className="stat-card bounce">
          <h3>Approved</h3>
          <p className="counter">{applications.filter(app => app.status === "Approved").length}</p>
        </div>
        <div className="stat-card bounce">
          <h3>Enrolled Students</h3>
          <p className="counter">{students.length}</p>
        </div>
      </div>

      {/* Tables Section */}
      <div className="dashboard-grid">
        <section className="card slide-up">
          <h2>Contact Form Submissions</h2>
          <div className="table-wrapper">
            <table className="styled-table colorful-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card slide-up">
          <h2>Enrollment Applications</h2>
          <div className="table-wrapper">
            <table className="styled-table colorful-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Course</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className={`status-${app.status.toLowerCase()}`}>
                    <td>{app.applicant_name}</td>
                    <td>{app.course}</td>
                    <td>{app.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card slide-up">
          <h2>Enrolled Students</h2>
          <div className="table-wrapper">
            <table className="styled-table colorful-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.start_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Charts Section */}
      <div className="dashboard-grid">
        <section className="card slide-up">
          <h2>Application Status Overview</h2>
          <Pie data={applicationStatusData} />
        </section>

        <section className="card slide-up">
          <h2>Students by Course</h2>
          <Bar data={studentsByCourseData} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;