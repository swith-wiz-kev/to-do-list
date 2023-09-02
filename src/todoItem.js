const todoItemFactory = (initialDetails) => {
  let todoDetails = initialDetails;

  const deleteFromArray = (array) => {
    array.splice(array.indexOf(this), 1);
  };

  return {
    get details() {
      return todoDetails;
    },
    set details(value) {
      todoDetails = value;
    },
    deleteFromArray,
  };
};
export default todoItemFactory;
