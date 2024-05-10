import React, { useState, useMemo } from 'react';

//소수를 계산하는 함수
function calculatePrimes(limit) {
    console.log(`limit: ${limit}에 대한 소수 계산`);
    const primes = [];
    for(let i = 2; i <= limit; i++) {
        let isPrime = true;
        for(let j = 2; j<i; j++) {
            if(i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) primes.push(i);
    }
    console.log("소수 계산 완료")
    return primes;
}

//이 상태면 count가 증가해도 소수 계산을 다시 하게 됨
export default function PrimeCalculator(props) {
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);

    // const primes = calculatePrimes(limit);
    // dependency array가 바뀔 때마다 함수의 리턴값을 저장하는 것 !
    const primes = useMemo(()=> {
        return calculatePrimes(limit)
    }, [limit]);
    
    const addCount = () => {
        setCount(count+1);
    }
    return (
    <div>
        {count}
        <button onClick={addCount}>카운트 증가</button>
        <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
        />
        <p>계산된 소수 : {primes.join(', ')}</p>
    </div>
    );
}