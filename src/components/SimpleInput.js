import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (e) => {
    // 1. useState: 입력하는 키마다 유효성 검증
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, 'enteredName');

    // 2. useRef: 제출 시 한 번에 유효성 검증
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue, 'enteredValue');
    setEnteredName(''); // 새로 불러왔을 때 빈 값으로 초기값 설정
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName} // 새로 불러왔을 때 빈 값으로 초기값 설정
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
