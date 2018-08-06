const initialState = {
  sidebar: [
    {
      title: "Home",
      value: "home",
      path: "/"
    },
    {
      title: "Users",
      value: "users",
      path: "/users"
    }
  ]
};

export const reducer = (state = initialState, action) => {
  return state;
};
