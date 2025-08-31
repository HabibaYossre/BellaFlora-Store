import React from 'react'
import { GiBigDiamondRing } from "react-icons/gi";

 function Occassion({icon,name}) {
  return (
     <div className="ocasssion">
            <div className="icon-container">
                {icon}
            </div>
            <div className="ocasssion-name">Weddings</div>
        </div>
  )
}
export default Occassion;