import React from 'react';

function App() {
     const [count, setCount] = React.useState(0);
     const [value, setValue] = React.useState('текст внутри инпута');

    function addLikes() {
        setCount(count + 1);
    }

    function  addDislikes() {
        setCount(count -1);
    }
  return (
    <div className="App">
        <h1>количество: {count}</h1>
        <h2>{value}</h2>
        <input type="text"
               value={value}
               onChange={event => setValue(event.target.value)}
        />
        <button onClick={addLikes}>Likes</button>
        <button onClick={() => addDislikes()}>Dislikes</button>
    </div>
  );
}

export default App;
