const projectFactory = (initialDetails) => {
  let projectDetails = initialDetails;

  return {
    get details() {
      return projectDetails;
    },
    set details(value) {
      projectDetails = value;
    },
  };
};
export default projectFactory;
