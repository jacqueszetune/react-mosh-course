import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);

    return <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color='success' onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
}

export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "Plano", "São Paulo", "Buenos Aires", "Amsterdam"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
// }

// export default App;