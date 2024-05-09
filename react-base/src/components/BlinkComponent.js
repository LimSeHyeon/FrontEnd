// import React, { useEffect, useState } from 'react';

// export default function BlinkComponent({text}) {
//     const [showText, setShowText] = useState(true);
//     // const X = useState(초기값)
//     // X[0]: state 자체, X[1]: state를 바꿀 수 있는 함수

//     useEffect(()=>{
//         const timeoutId = setInterval(()=>{
//         setShowText(showText=>!showText);
//         }, 1000)
//         return () => {clearInterval(timeoutId)}
//         }, [])
//         return (
//         <div>
//             {showText? text : null}
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';

export default function BlinkComponent({text}) {
    const [showText, setShowText] = useState(true);

    // 한번 등록해 놓고 값만 바꾸기
    
    useEffect(() => {
        const timeoutId = setInterval(()=>{
            console.log("호출");
            setShowText(showText=>{
                return !showText
            });
        }, 1000)
        return () => {clearInterval(timeoutId)}
    }, [showText])

    return (
        <div>
            {showText? text : null}
        </div>
    )
    

    //3초마다 인터벌 해제 후 재등록
    // useEffect(()=>{
    //     const intervalId = setInterval(()=>{
    //         console.log("호출");
    //         setShowText(!showText);
    //     }, 3000);
    //     return ()=>{clearInterval(intervalId);}
    // }, [showText]);

    // return (
    //     <div>
    //         {showText? text : null}
    //     </div>
    // )
}