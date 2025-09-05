import { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { UserContext } from "./context/UserContext";

function App() {
  const [username, setUsername] = useState("queso");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const userData = { username, updateUsername };

  return (
    <>
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
