import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import AzureDevopsLogo from "/src/assets/azure-devops-logo.svg?react";
import BitBucketLogo from "/src/assets/bitbucket-logo.svg?react";
import GithubLogo from "/src/assets/github-logo.svg?react";
import GitlabLogo from "/src/assets/gitlab-logo.svg?react";
import SSOLogo from "/src/assets/sso-logo.svg?react";

/**
 * button objects for sass sign-in options.
 */
const sassBtns = [
  {
    icon: <GithubLogo />,
    name: "Sign in with Github",
  },
  {
    icon: <BitBucketLogo />,
    name: "Sign in with Bitbucket",
  },
  {
    icon: <AzureDevopsLogo />,
    name: "Sign in with Azure Devops",
  },
  {
    icon: <GitlabLogo />,
    name: "Sign in with GitLab",
  },
];

/**
 * button objects for self-hosted sign-in options.
 */
const selfHostedBtns = [
  {
    icon: <GitlabLogo />,
    name: "Self Hosted GitLab",
  },
  {
    icon: <SSOLogo />,
    name: "Sign in with SSO",
  },
];

/**
 * SignInCard component renders the sign-in card layout.
 * @component
 * @returns {JSX.Element} The rendered sign-in card layout.
 */
const SignInCard = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>("sass");
  const navigate = useNavigate();

  /**
   * Handles the tab change event.
   * @param {string | null} newTab - The new tab value.
   */
  const handleTabChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  /**
   * Handles the sigin buttons click event.
   * - Navigates to the dashboard page.
   */
  const handleBtnClick = () => {
    navigate("/dashboard");
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "42rem",
        minHeight: "30rem",
      }}
    >
      {/* Content */}
      <Stack spacing={1.25} sx={{ px: "1.5rem", py: "2.25rem" }}>
        {/* Header */}
        <Stack spacing={2.25}>
          <Box
            component="img"
            height="2.5rem"
            width="auto"
            src="logo-long.svg"
          />
          <Typography variant="h1">Welcome to CodeAnt AI</Typography>
        </Stack>

        {/* Tabs */}
        <ToggleButtonGroup
          value={selectedTab}
          exclusive
          onChange={handleTabChange}
          size="small"
          fullWidth
        >
          <ToggleButton value="sass" sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">SASS</Typography>
          </ToggleButton>
          <ToggleButton value="self-hosted" sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Self Hosted</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Divider />

      {/* Signin Buttons */}
      <Stack spacing={1} sx={{ py: 3, px: 1, alignItems: "center" }}>
        {/* Renders sass buttons options*/}
        {selectedTab === "sass" &&
          sassBtns.map((btn, idx) => (
            <Button
              key={idx}
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: "27.875rem",
                py: 1,
                fontWeight: 600,
              }}
              startIcon={btn.icon}
              onClick={handleBtnClick}
            >
              {btn.name}
            </Button>
          ))}
        {/* Renders self-hosted buttons options*/}
        {selectedTab === "self-hosted" &&
          selfHostedBtns.map((btn, idx) => (
            <Button
              key={idx}
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: "27.875rem",
                py: 1,
                fontWeight: 600,
              }}
              startIcon={btn.icon}
              onClick={handleBtnClick}
            >
              {btn.name}
            </Button>
          ))}
      </Stack>
    </Paper>
  );
};

export default SignInCard;
