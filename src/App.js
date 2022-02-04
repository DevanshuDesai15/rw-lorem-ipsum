import React, {useState} from 'react';
import para from './data'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [Text, setText] = useState([]);

  const handleSubmit =(e) =>{
    e.preventDefault();

    let amount = parseInt(count);

    if(amount<=0){
      amount=1
    }if(amount>8){
      amount=8;
    }

    setText(para.slice(0,amount));
  }

  return (
    <div className="App">
      <section className='section-center'>
        <h3>Want some new paragraphs other then lorem-ipsum?</h3>
        <h5>** There are total of 8 paragraphs **</h5>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>Paragraphs: </label>
          <input type='number' name='counting' id='counting' value={count} onChange={(e)=> setCount(e.target.value)}/>
          <button className='btn' type='submit'>Generator</button>
        </form>
        <article className='arc'>
          {Text.map((item, index)=>{
            return <p key={index}>{item}</p>
          })}
        </article>
      </section>
    </div>
  );
}

export default App;
