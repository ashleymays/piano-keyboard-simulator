import { useState } from "react";

import LoadingIcon from "./components/LoadingIcon";
import Keyboard from "./components/Keyboard";
import MainContext from "./context";

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  return (
    <MainContext.Provider value={{ isAppLoading, setIsAppLoading }}>
      <LoadingIcon />
      <Keyboard />
    </MainContext.Provider>
  );
}

export default App;
