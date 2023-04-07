import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // 컴포넌트가 리렌더링될 때마다 실행 x
  // 함수 재사용하기 위해.
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onSubmit은 인풋에서 Enter를 눌러도 된다.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화.

      // submit 이벤트는 브라우저 리렌더링, 이를 방지 하기 위해 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
