export default class DataService {
  data = {
    projectRepo: "https://github.com/kipland-m/react95-kipland",
    react95Repo: "https://github.com/React95/React95",
  };

  getProjectInfo() {
    return {
      projectRepo: this.data.projectRepo,
      react95Repo: this.data.react95Repo,
    };
  }

}

