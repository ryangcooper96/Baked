import { useEffect, useState } from "react";
import collection from "../../utils/company";
import "./App.css";

function App() {
  // state
  const [result, setResult] = useState({});

  // useEffect
  useEffect(() => {
    async function getResult() {
      const data = await collection.get();
      setResult({ ...data });
      console.log(data);
    }
    getResult();
  }, []);

  return <div className="App">App</div>;
}

export default App;
