import React from "react";

import * as S from "./style";

export default function MainMap(props) {
    const pinImg = '/src/assets/images/pin.png';
    return ( 
        <S.MapMarkWrap
        src={props.markerStates.markerName === props.markerName ? 'src/assets/images/pin_click.png' : pinImg}
        onClick={() => 
            props.handleMarkerClick(props.markerName)        
        }
        top={props.markerStates === props.markerName ? props.clickaftertop : props.clickbeforetop}
        left={props.markerStates === props.markerName ? props.clickafterleft : props.clickbeforeleft}
        
        
        >            

            

        </S.MapMarkWrap>
    );
}