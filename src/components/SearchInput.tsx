import { SxProps, TextField, TextFieldProps } from "@mui/material";
import { useEffect, useState } from "react";
import Repository from "../types/Repository";

/**
 * Props for the SearchInput component.
 *
 * @interface SearchInputProps
 * @property {Repository[]} allRepositories - The list of all repositories to search from.
 * @property {(repositories: Repository[]) => void} updateFilteredRepositories - Function to update the filtered repositories based on the search input.
 * @property {JSX.Element} [icon] - Optional icon to display inside the search input field.
 * @property {SxProps} [sx] - Optional styling properties for the search input field.
 * @property {TextFieldProps} [props] - Optional additional properties for the TextField component.
 */
interface SearchInputProps {
  allRepositories: Repository[];
  updateFilteredRepositories: (repositories: Repository[]) => void;
  icon?: JSX.Element;
  sx?: SxProps;
  props?: TextFieldProps;
}

/**
 * A search input field that filters repositories based on the search text.
 *
 * @param {SearchInputProps} props - The props for the SearchInput component.
 * @returns {JSX.Element} A search input field component.
 */
const SearchInput = ({
  allRepositories,
  updateFilteredRepositories,
  icon,
  sx,
  ...props
}: SearchInputProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");

  /**
   * Handles the input change event and updates the search text.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
  };

  // Filter repositories based on the search text
  useEffect(() => {
    if (!searchText) {
      updateFilteredRepositories(allRepositories);
      return;
    }
    if (searchText) {
      const filteredRepositories = allRepositories.filter((repository) =>
        repository.repositoryName.includes(searchText)
      );

      updateFilteredRepositories(filteredRepositories);
    }
  }, [searchText]);

  return (
    <TextField
      {...props}
      value={searchText}
      onChange={handleInputChange}
      placeholder="Search Repositories"
      size="small"
      sx={sx}
      slotProps={{
        input: {
          startAdornment: icon,
        },
      }}
    />
  );
};

export default SearchInput;
