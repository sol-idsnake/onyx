const initialState = {
  sidebarAuth: [
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
  ],
  sidebarNotAuth: [
    {
      title: "Login",
      value: "login",
      path: "/login"
    },
    {
      title: "Register",
      value: "register",
      path: "/register"
    }
  ]
};

export default function reducer(state = initialState, action) {
  return state;
}
