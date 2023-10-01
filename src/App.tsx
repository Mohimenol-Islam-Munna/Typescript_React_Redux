import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import useAppDispatch from "./redux-store/hooks/useAppDispatch";
import useAppSelector from "./redux-store/hooks/useAppSelector";
import { fetchUserListAction } from "./redux-store/actions/handlers/anotherHandlers/userActions";
import { singleUserSuccessAction } from "./redux-store/slices/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const { userListLoading, userListError, userListData, singleUserData } =
    useAppSelector((store) => store.userState);

  console.log("singleUserData :", singleUserData);

  useEffect(() => {
    const options = {
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    };

    dispatch(fetchUserListAction(options));
  }, []);

  type User = {
    name: string;
    age: number;
    address: {
      zilla: string;
      postCode: number;
    };
  };

  const [check, setCheck] = useState<User | null>(null);
  console.log("check state :", check?.address);

  return (
    <div className="App">
      <h2>Typescript with react and redux</h2>
      <Home title="home page" data="home page content" />
      <About title="About Page Go ko" data="ho ho" />
      <Contact title="Contact Page ddddd www" data="data" />
      {!userListLoading &&
        !userListError &&
        userListData &&
        userListData.map((item, index) => (
          <div key={index}>
            <h2>User Name: {item.name}</h2>
            <button
              onClick={() => {
                dispatch(singleUserSuccessAction(item));
              }}
            >
              View
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
