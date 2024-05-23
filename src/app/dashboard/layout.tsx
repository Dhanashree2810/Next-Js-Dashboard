import type { ReactNode } from "react";
const DashboardLayout = ({
  blogs,
  profile,
  children
}: {
  blogs: ReactNode;
  profile: ReactNode;
  children: React.ReactNode;
}) => {
  console.log("Dashboard Layout");

  return (
    <div className="flex items-start justify-between">
        {children}
    </div>
  );
};

export default DashboardLayout;
