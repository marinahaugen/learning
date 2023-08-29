import './App.css';
import React, {useReducer} from 'react';
import {useInput} from "./useInput";
import { useTrees } from './index';
import { useFetch } from './useFetch';


const initialState = {
  message: "hi",
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: `HEY! I just said ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`
      };
      default:
        return {
          message: "default"
        }
  }
}

function App({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`)

  const { trees } = useTrees();
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const [checked, toggle] = useReducer((checked) => !checked, false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  }

  if (loading) return <h1>Loading...</h1>

  if (error)
    return (<pre>{JSON.stringify(error, null, 2)}</pre>);

  return (
    <>
      <h1>Trees I've heard of:</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>

      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder='Sound...'/>
        <input {...colorProps} type="color"/>
        <button>ADD</button>
      </form>

      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
      <input type="checkbox" value={checked} onChange={toggle}/>

      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <img src={data.avatar_url} alt={data.login}/>
      </div>
    </>
  );
}

export default App;
