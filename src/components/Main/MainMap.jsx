import React from "react";

import * as S from "./style";

export default function MainMap(props) {
    const pinImg =
    props.markerStates.victPoly === 1
      ? "/src/assets/images/pin_blue.png" // Set the blue pin image for vict_poly = 1
      : props.markerStates.victPoly === 2
      ? "/src/assets/images/pin_red.png" // Set the red pin image for vict_poly = 2
      : props.markerStates.victPoly === 3
      ? "/src/assets/images/pin_mix.png" // Set the red pin image for vict_poly = 2
      : "/src/assets/images/pin.png"; // Default pin image   
      console.log('victPoly value:', props.markerStates.victPoly, props.markerStates.markerName);
      
    return ( 
        <S.MapMarkWrap
        src={props.markerStates.markerName === props.markerName ? pinImg:  '/src/assets/images/pin.png'}
        onClick={() => 
            props.handleMarkerClick(props.markerName)        
        }
        top={props.markerStates === props.markerName ? props.clickaftertop : props.clickbeforetop}
        left={props.markerStates === props.markerName ? props.clickafterleft : props.clickbeforeleft}
        
        
        >            

            

        </S.MapMarkWrap>
    );
}

// export default PMain;
// import React from "react";

// import * as S from "./style";

// export default function MainMap(props) {
//     const pinImg = '/src/assets/images/pin.png';
//     return ( 
//         <S.MapMarkWrap
//         src={props.markerStates.markerName === props.markerName ? 'src/assets/images/pin_click.png' : pinImg}
//         onClick={() => 
//             props.handleMarkerClick(props.markerName)        
//         }
//         top={props.markerStates === props.markerName ? props.clickaftertop : props.clickbeforetop}
//         left={props.markerStates === props.markerName ? props.clickafterleft : props.clickbeforeleft}
        
        
//         >            

            

//         </S.MapMarkWrap>
//     );
// }