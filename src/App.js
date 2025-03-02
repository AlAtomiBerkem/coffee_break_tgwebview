import React from 'react';
import NavBar from "./components/NavBar";

function App() {
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState('текст внутри инпута');


    return (
        <>
            <NavBar />
        </>
    )
}
export default App;