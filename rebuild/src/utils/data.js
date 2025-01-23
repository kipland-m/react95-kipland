export default class DataService {
 _data = {
    projectRepo: "https://github.com/kipland-m/react95-kipland",
    react95Repo: "https://github.com/React95/React95",
  };

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}

