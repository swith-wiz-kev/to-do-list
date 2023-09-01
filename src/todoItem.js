const todoItemFactory = (initialDetails) => {
  let todoDetails = initialDetails;

  return {
    get details() {
      return todoDetails;
    },
    set details(value) {
      todoDetails = value;
    },
  };
};
export default todoItemFactory;
