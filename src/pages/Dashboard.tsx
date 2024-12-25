import Grid from "@mui/material/Grid2";
import Navbar from "../components/Navbar";
import RepositoriesCard from "../components/RepositoriesCard";

/**
 * Dashboard component renders the Dashboard page layout.
 * @component
 * @returns {JSX.Element} The rendered Dashboard page.
 */
const Dashboard = (): JSX.Element => {
  return (
    <Grid
      container
      sx={{ height: "100vh", textAlign: "start", overflow: "hidden" }}
    >
      {/* Sidebar for Desktop & Navbar in tablet and phone screens */}
      <Grid size={{ xs: 12, md: 3, lg: 2 }}>
        <Navbar />
      </Grid>

      {/* Main/Repositories Content */}
      <Grid size={{ xs: 12, md: 9, lg: 10 }} p={{ xs: 0, md: 3 }}>
        <RepositoriesCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
