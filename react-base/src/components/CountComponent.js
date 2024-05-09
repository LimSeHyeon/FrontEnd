import React, {useState} from 'react';

export default function CountComponent() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count => {
            return count+1
        });
    }
    // 이렇게도 됨
    // const addCount = () => {
    //     setCount(count+1);
    // }
    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>1 증가</button>
        </div>
    )
}