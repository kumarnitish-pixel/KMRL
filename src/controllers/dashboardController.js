// Get dashboard data based on role
const getDashboard = async (req, res) => {
  try {
    const role = req.user.role; // comes from JWT middleware

    let dashboardData;

    switch (role) {
      case "head":
        dashboardData = {
          title: "Head Dashboard",
          stats: {
            totalDepartments: 4,
            activeProjects: 12,
            employees: 50,
          },
          features: [
            "View all department performance",
            "Approve budgets",
            "Manage organization goals",
          ],
        };
        break;

      case "dept1":
        dashboardData = {
          title: "Department 1 Dashboard",
          stats: {
            activeProjects: 3,
            teamMembers: 10,
          },
          features: [
            "Manage team tasks",
            "Submit reports to Head",
            "Track deadlines",
          ],
        };
        break;

      case "dept2":
        dashboardData = {
          title: "Department 2 Dashboard",
          stats: {
            activeProjects: 2,
            teamMembers: 8,
          },
          features: [
            "Track maintenance schedules",
            "Report issues to Head",
            "Upload progress reports",
          ],
        };
        break;

      case "dept3":
        dashboardData = {
          title: "Department 3 Dashboard",
          stats: {
            activeProjects: 4,
            teamMembers: 12,
          },
          features: [
            "Plan new initiatives",
            "Manage department KPIs",
            "Collaborate with Dept4",
          ],
        };
        break;

      case "dept4":
        dashboardData = {
          title: "Department 4 Dashboard",
          stats: {
            activeProjects: 3,
            teamMembers: 9,
          },
          features: [
            "Support Dept3 in initiatives",
            "Prepare financial reports",
            "Submit to Head",
          ],
        };
        break;

      default:
        return res.status(403).json({ message: "Access denied" });
    }

    res.json({
      role,
      dashboard: dashboardData,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getDashboard;
