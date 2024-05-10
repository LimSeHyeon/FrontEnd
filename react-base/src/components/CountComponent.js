import React, { useCallback, useEffect, useState} from 'react';

export default function CountComponent() {
    const [count, setCount] = useState(0);
    const [value1, setValue1] = useState(true);

    const ChangeValue = () => {
        setValue1((v) => !v);
    }

    // const addCount = () => {
    //     setCount(count => {
    //         return count+1
    //     });
    // }

    //dependency array가 바뀌면 함수를 다시 정의한다 !
    const addCount = useCallback(() => {
        setCount(count+1);
    }, [count]);



    // 이렇게도 됨
    // const addCount = () => {
    //     setCount(count+1);
    // }

    //useEffect 인자 2개
    // 첫번째 : 함수,
    // 두번째 : dependency array : state 혹은 props => props가 변하면 함수 실행
    // 리턴값 : 컴포넌트가 없어질 때, 혹은 새로 생길 때 실행하기 위한 함수
    useEffect(()=> {
        console.log("데이터 받아오기! (이 함수는 한 번만 실행됩니다.");
        return () => {
            console.log("메모리를 잡아먹으면 리소스 해제 하는 함수를 return 해 주어야 합니다.")
        }
    }, [])

    useEffect(() => {
        console.log(`카운트가 증가할 때마다 실행! \n -count: ${count}`);
        return () => {
            console.log('기존 값을 반환합니다', count);
        }
    }, [count])
    return (
        <div>
            <div>
                <div>{value1}</div>
                <button onClick={ChangeValue}>State 변경</button>   
            </div>
            
            <div>
                <div>{count}</div>
                <button onClick={addCount}>1 증가</button>
            </div>
            
        </div>
    )
}