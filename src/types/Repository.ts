/**
 * Represents a repository with its details.
 */
interface Repository {
  repositoryName: string; // The name of the repository
  visibility: string; // The visibility of the repository
  language: string; // The main language of the repository
  size: number; // The size of the repository in KB
  last_updated: string; // The last updated date of the repository
}

export default Repository;
