import React from "react";

import * as S from "./style";

export default function MainMap(props) {
    const pinImg =
    props.markerStates.victPoly === 1
      ? "/src/assets/images/pin_blue.png"
      : props.markerStates.victPoly === 2
      ? "/src/assets/images/pin_red.png" 
      : props.markerStates.victPoly === 3
      ? "/src/assets/images/pin_mix.png" 
      : "/src/assets/images/pin.png";

      
      console.log(props.markerName + ":" + props.selectedMarker);
      
    return ( 
        <S.MapMarkWrap
        src={ props.markerName === props.selectedMarker
            ? "/src/assets/images/pin_click.png"
            : props.markerStates.markerName === props.markerName
            ? pinImg
            : "/src/assets/images/pin.png"}
        onClick={() => 
            props.handleMarkerClick(props.markerName)        
        }
        top={props.markerStates === props.markerName ? props.clickaftertop : props.clickbeforetop}
        left={props.markerStates === props.markerName ? props.clickafterleft : props.clickbeforeleft}
        
        
        >            

            

        </S.MapMarkWrap>
    );
}

