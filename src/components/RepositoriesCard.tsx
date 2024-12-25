import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import Repository from "../types/Repository";
import RepositoryItem from "./RepositoryItem";
import SearchInput from "./SearchInput";

/**
 * A card component that displays a list of repositories.
 *
 * @returns {JSX.Element} A card component.
 */
const RepositoriesCard = (): JSX.Element => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<
    Repository[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Fetches the data asynchronosly.
   */
  const fetchData = async () => {
    //  Set loading to true
    setLoading(true);
    try {
      // Fetchs the data using the fetch API
      const response = await fetch("/data/data.json");

      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parse the response data
      const data: Repository[] = await response.json();

      // Set the repositories and filtered repositories state
      setRepositories(data);
      setFilteredRepositories(data);
    } catch (err: unknown) {
      // If an error occurs, set the error state
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong!");
    } finally {
      // Set loading to false
      setLoading(false);
    }
  };

  /**
   * Updates the filtered repositories based on the search input.
   *
   * @param {Repository[]} repositoriesArr - The filtered repositories array.
   */
  const updateFilteredRepository = (repositoriesArr: Repository[]) => {
    setFilteredRepositories(repositoriesArr);
  };

  // Fetch the data on component mount
  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  return (
    <Paper
      sx={{
        height: "100%",
        maxHeight: "95vh",
        border: { xs: 0, md: "1px solid #E9EAEB" },
        overflow: "hidden",
      }}
    >
      <Stack sx={{ height: "100%" }}>
        {/* Content */}
        <Stack sx={{ borderBottom: "1px solid #E9EAEB" }}>
          <Stack spacing={2.5} sx={{ px: { xs: 2, md: 3 }, py: 2.5 }}>
            {/* Header */}
            <Stack
              component="header"
              spacing={{ xs: 1.5 }}
              direction={{ xs: "column", md: "row" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction="column"
                spacing={{ xs: 0.5 }}
                sx={{ width: "fit-content" }}
              >
                <Typography variant="h2" sx={{ lineHeight: { xs: 1, md: 2 } }}>
                  Repositories
                </Typography>
                <Typography variant="caption">33 total repositories</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Button
                  disableElevation
                  variant="outlined"
                  startIcon={<LuRefreshCw />}
                >
                  Refresh All
                </Button>
                <Button disableElevation startIcon={<IoAdd />}>
                  Add Repository
                </Button>
              </Stack>
            </Stack>
            {/* End Header */}
            {/* Search Box */}
            <Box>
              <SearchInput
                allRepositories={repositories}
                updateFilteredRepositories={updateFilteredRepository}
                icon={<FiSearch size={24} style={{ marginRight: "8px" }} />}
                sx={{
                  minWidth: "30%",
                  borderRadius: 2,
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
          </Stack>
        </Stack>
        <Stack sx={{ flexGrow: 1, overflowY: "scroll" }}>
          {/* Loading Spinner */}
          {loading && (
            <CircularProgress
              style={{ display: "block", margin: "auto auto" }}
            />
          )}
          {/* Error Message */}
          {error && (
            <Typography
              variant="h2"
              color="error"
              sx={{
                textAlign: "center",
                alignSelf: "center",
                justifySelf: "center",
                my: "auto",
              }}
            >
              {error}
            </Typography>
          )}
          {/* Repositories List */}
          {filteredRepositories &&
            filteredRepositories.map((repository, idx) => (
              <RepositoryItem
                key={idx}
                repository={repository}
                isLast={idx === repositories.length - 1}
              />
            ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default RepositoriesCard;
