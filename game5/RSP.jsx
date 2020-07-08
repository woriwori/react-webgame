import React, { Component, useRef, useState, useEffect } from 'react';

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};
const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};
const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => v[1] === imgCoord)[0];
};

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState('0');
  const [score, setScore] = useState(0);
  const interval = useRef();
  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord == rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord == rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };
  const onClickBtn = (choice) => (e) => {
    e.preventDefault();

    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('비겼습니다.');
    } else if ([-1, 2].includes(diff)) {
      setResult('이겼습니다.');
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult('졌습니다.');
      setScore((prevScore) => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 2000);
  };
  /* 
  componentDidMount 와 같은건, 함수 내에서 state별로 분기처리를함.
  useEffect는 useEffect 를 여러번 사용하면 됨.
  */
  useEffect(() => {
    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    interval.current = setInterval(changeHand, 100);
    return () => {
      // componentWiiUnmount
      clearInterval(interval.current);
    };
  }, [imgCoord]); // []에 넣은 값들이 바뀔 때 useEffect가 실행된다.

  return (
    <>
      <div
        id="computer"
        style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
      <button id="rock" className="btn" onClick={onClickBtn('바위')}>
        바위
      </button>
      <button id="scissor" className="btn" onClick={onClickBtn('가위')}>
        가위
      </button>
      <button id="paper" className="btn" onClick={onClickBtn('보')}>
        보
      </button>
      <div>{result}</div>
      <div>점수 : {score}</div>
    </>
  );
};

export default RSP;
