import { Chip, Stack, Typography, useTheme } from "@mui/material";
import { formatDistance } from "date-fns";
import { GoDotFill } from "react-icons/go";
import { HiOutlineCircleStack } from "react-icons/hi2";
import Repository from "../types/Repository";

/**
 * Props for the one RepositoryItem component.
 *
 * @interface RepositoryItemProps
 * @property {Repository} repository - The repository data to display.
 * @property {boolean} isLast - Flag indicating if this is the last item in the list.
 */
interface RepositoryItemProps {
  repository: Repository;
  isLast: boolean;
}

/**
 * A single repository item component.
 *
 * @param {RepositoryItemProps} props - The props for the RepositoryItem component.
 * @returns {JSX.Element} A single repository item component.
 */
const RepositoryItem = ({
  repository,
  isLast,
}: RepositoryItemProps): JSX.Element => {
  // Get the MUI theme object
  const theme = useTheme();

  // Get the relative time from today
  const getRelativeTimeFromToday = (dateStr: string) => {
    // Convert the date string to a Date object
    const date: Date = new Date(dateStr);
    // Get the current date in milliseconds
    const todayDate: number = Date.now();

    // Return the relative time from today using date-fns formatDistance function
    return formatDistance(date, todayDate, { addSuffix: true });
  };

  return (
    <Stack
      spacing={1.5}
      sx={{
        p: { xs: 2, md: 3 },
        borderBottom: isLast ? "" : "1px solid #D5D7DA",
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        {/* Repository Name  */}
        <Typography variant="subtitle2">{repository.repositoryName}</Typography>

        {/* Repository Visibility */}
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label={repository.visibility}
        />
      </Stack>
      <Stack direction="row" spacing={{ xs: 3, md: 5 }}>
        {/* Repository main language */}
        <Typography>
          {repository.language}{" "}
          <GoDotFill
            color={theme.palette.primary.main}
            style={{ verticalAlign: "text-top" }}
          />
        </Typography>
        {/* Repository size in KB */}
        <Typography>
          <HiOutlineCircleStack style={{ verticalAlign: "text-bottom" }} />{" "}
          {repository.size} KB{" "}
        </Typography>
        {/* Repository last updated */}
        <Typography>
          Updated {getRelativeTimeFromToday(repository.last_updated)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RepositoryItem;
