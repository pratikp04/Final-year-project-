import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

/* ================= DATA ================= */

const statusData = [
  { name: "Pending", value: 36 },
  { name: "In Progress", value: 42 },
  { name: "Resolved", value: 98 }
];

const categoryData = [
  { name: "Road", value: 45 },
  { name: "Garbage", value: 30 },
  { name: "Lighting", value: 25 }
];

const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

/* ================= COMPONENT ================= */

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>

      {/* HERO WELCOME CARD */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "#fff",
          padding: "30px 40px",
          borderRadius: 20,
          marginBottom: 40,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        }}
      >
        <h2 style={{ marginBottom: 8 }}>
          Welcome back, Admin 👋
        </h2>
        <p style={{ opacity: 0.85 }}>
          Here’s an overview of the city-wide complaint system.
        </p>
      </div>

      {/* STATS */}
      <div style={{ display: "flex", gap: 20, marginBottom: 50 }}>
        <StatCard title="Total Issues" value="1247" />
        <StatCard title="High Priority" value="89" color="#dc2626" />
        <StatCard title="Resolved" value="856" color="#16a34a" />
      </div>

      {/* RECENT COMPLAINTS */}
      <Section title="Recent Complaints">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1021</td>
              <td>Road Damage</td>
              <td>Pending</td>
              <td style={{ color: "#dc2626" }}>High</td>
            </tr>
            <tr>
              <td>#1020</td>
              <td>Street Light</td>
              <td>Resolved</td>
              <td style={{ color: "#f59e0b" }}>Medium</td>
            </tr>
            <tr>
              <td>#1019</td>
              <td>Garbage</td>
              <td>In Progress</td>
              <td style={{ color: "#16a34a" }}>Low</td>
            </tr>
          </tbody>
        </table>
      </Section>

      {/* QUICK ACTIONS */}
      <Section title="Quick Actions">
        <div style={{ display: "flex", gap: 15 }}>
          <ActionBtn onClick={() => navigate("/admin/issues")}>
            View All Issues
          </ActionBtn>
          <ActionBtn onClick={() => navigate("/admin/assign")}>
            Assign Complaints
          </ActionBtn>
          <ActionBtn onClick={() => navigate("/admin/reports")}>
            Generate Report
          </ActionBtn>
        </div>
      </Section>

      {/* ANALYTICS */}
      <Section title="Analytics Overview">
        <div style={{ display: "flex", gap: 30 }}>
          <ChartCard title="Complaints by Status">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={statusData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Complaints by Category">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryData} dataKey="value" outerRadius={90}>
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </Section>
    </div>
  );
}

/* ================= REUSABLE UI ================= */

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 50 }}>
      <h3 style={{ marginBottom: 15 }}>{title}</h3>
      {children}
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
      }}
    >
      <h4 style={{ marginBottom: 10 }}>{title}</h4>
      <h2 style={{ color: color || "#111827" }}>{value}</h2>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
      }}
    >
      <h4 style={{ marginBottom: 15 }}>{title}</h4>
      {children}
    </div>
  );
}

function ActionBtn({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: "12px 20px",
        borderRadius: 12,
        border: "none",
        background: "#2563eb",
        color: "#fff",
        fontSize: 14,
        cursor: "pointer",
        boxShadow: "0 6px 16px rgba(37,99,235,0.4)"
      }}
    >
      {children}
    </button>
  );
}

/* ================= STYLES ================= */

const tableStyle = {
  width: "100%",
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  borderCollapse: "collapse",
  overflow: "hidden"
};
