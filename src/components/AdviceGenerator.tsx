import { useEffect, useState } from 'react';

import styles from './AdviceGenerator.module.css'

import dice from '../images/icon-dice.svg';

const AdviceGenerator = () => {
  let [quote, setQuote] = useState<string>();
  let [id, setId] = useState<number>();
  let [error, setError] = useState({});

  const getQuote = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(res => {
        setQuote(res.slip.advice);
        setId(res.slip.id);
      })
      .catch(err => setError(err));
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className={styles.card}>
      <h1>ADVICE #{id}</h1>
      <blockquote>{quote}</blockquote>
      <div className={styles.divider}></div>
      <button onClick={getQuote} >
        <img src={dice} alt="button" />
      </button>
    </div>
  )
}

export default AdviceGenerator;