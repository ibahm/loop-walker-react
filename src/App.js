import React, {useState} from "react";
import Grid from "./components/Grid";
import Logs from "./components/Logs";
import Guide from "./components/Guide";

const App = () => {
  const [anim, setAnim] = useState(false);
  const [count, setCount] = useState(0); 
  const [valid, setValid] = useState(true);
  const [visited, setVisited] = useState([])
  const [path, setPath] = useState([1,1,2,2,0,0,3,3]);
  return (
    <div className="container">
      <Logs
        count={count}
        visited={visited}
        path={path}
      />
      <Grid 
        anim={anim} 
        setAnim={setAnim} 
        count={count} 
        setCount={setCount}
        valid={valid}
        setValid={setValid}
        visited={visited}
        setVisited={setVisited}
        path={path}
        setPath={setPath}
      />
      <Guide/>
    </div>
  );
}

export default App;
