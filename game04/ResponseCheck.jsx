import React, { useState, useRef } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);
  const timeout = useRef(null); // 이 값들을 변경하는건 setState와 달리, re-render 안됨.
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭하세요');
      }, Math.floor(Math.random() * 1000) + 2000);
      startTime.current = new Date();
    } else if (state === 'ready') {
      // 성급하게 클릭
      clearTimeout(this.timeout);
      setState('waiting');
      setMessage('워워. 성급하군. 초록색이 된 후에 클릭하라구-.');
    } else if (state === 'now') {
      endTime.current = new Date();

      setState('waiting');
      setMessage('클릭해서 시작하세요!');
      setResult((prevResult) => [...prevResult, endTime.current - startTime.current]);
    }
  };
  const onReset = () => {
    setResult([]);
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {result.length === 0 ? null : <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>}
    </>
  );
};

export default ResponseCheck;
