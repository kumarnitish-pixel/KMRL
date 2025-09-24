// src/pages/Dashboard.jsx
import { Card, CardContent } from "../Components/ui/Card";
import { Bell, FileText, Users, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../Components/Navbar";


const data = [
  { name: "Mon", docs: 10, alerts: 2 },
  { name: "Tue", docs: 6, alerts: 1 },
  { name: "Wed", docs: 14, alerts: 3 },
  { name: "Thu", docs: 9, alerts: 4 },
  { name: "Fri", docs: 11, alerts: 2 },
];

export default function Dashboard() {
  return (
   <>
   <Navbar/>
    <div className="p-6 space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-md rounded-2xl">
          <CardContent className="flex items-center p-4 space-x-3">
            <FileText className="text-blue-500" size={28} />
            <div>
              <p className="text-gray-500 text-sm">Documents</p>
              <h2 className="text-xl font-bold">124</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardContent className="flex items-center p-4 space-x-3">
            <AlertTriangle className="text-red-500" size={28} />
            <div>
              <p className="text-gray-500 text-sm">Alerts</p>
              <h2 className="text-xl font-bold">12</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardContent className="flex items-center p-4 space-x-3">
            <Users className="text-green-500" size={28} />
            <div>
              <p className="text-gray-500 text-sm">Active Users</p>
              <h2 className="text-xl font-bold">37</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardContent className="flex items-center p-4 space-x-3">
            <Bell className="text-yellow-500" size={28} />
            <div>
              <p className="text-gray-500 text-sm">Reports</p>
              <h2 className="text-xl font-bold">8</h2>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Weekly Document & Alert Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="docs" fill="#3b82f6" />
              <Bar dataKey="alerts" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Documents */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Documents</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between">
              <span>Safety Circular - Fire Drill</span>
              <span className="text-sm text-gray-500">2h ago</span>
            </li>
            <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between">
              <span>Vendor Invoice - Spare Parts</span>
              <span className="text-sm text-gray-500">5h ago</span>
            </li>
            <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between">
              <span>Incident Report - Station X</span>
              <span className="text-sm text-gray-500">1d ago</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
   </>
  );
}
