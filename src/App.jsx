import { useState } from "react";

import LoadingIcon from "./components/LoadingIcon";
import Keyboard from "./components/Keyboard";
import MainContext from "./context";

function App() {
  const [notes, setNotes] = useState({});
  const [isAppLoading, setIsAppLoading] = useState(false);
  return (
    <MainContext.Provider
      value={{ notes, setNotes, isAppLoading, setIsAppLoading }}
    >
      <LoadingIcon />
      <Keyboard />
    </MainContext.Provider>
  );
}

export default App;
