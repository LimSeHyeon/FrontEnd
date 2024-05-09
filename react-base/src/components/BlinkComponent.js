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
}