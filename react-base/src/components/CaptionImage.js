import React from 'react';

// export default function CaptionImage(props) {
//     return (
//         <div>
//             <img src={props.imgUrl} alt={props.caption} />
//             <p>{props.caption}</p>
//         </div>
//     )
// }
//기본값 설정 가능
export default function CaptionImage({imgUrl, caption="기본값"}) {
    return (
        <div>
            <img src={imgUrl} alt={caption} />
            <p>{caption}</p>
        </div>
    )
}