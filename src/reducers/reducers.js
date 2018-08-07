const initialState = {
  sidebarAuth: [
    {
      title: "Dashboard",
      value: "dashboard",
      path: "/dashboard"
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
