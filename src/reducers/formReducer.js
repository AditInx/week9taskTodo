export const initialState = {
  taskInput: "",
  isEditing: false,
  editId: null,
};

export function formReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, taskInput: action.payload };
    case "START_EDIT":
      return {
        ...state,
        isEditing: true,
        taskInput: action.payload.text,
        editId: action.payload.id,
      };
    case "CANCEL_EDIT":
      return { ...state, isEditing: false, editId: null, taskInput: "" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
