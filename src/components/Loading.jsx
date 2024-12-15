import React from "react";
import './styles/Loading.css'

const Loading = ()=>{
    return(
        <svg className="spinner" 
     
     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <defs>
        <radialGradient id="a" cx="100%" r="74.064%" fx="100%" fy="50%">
      <stop stop-color="#FFFFFF" offset="0%"/>
      <stop stop-color="#FFFFFF" stop-opacity=".4" offset="100%"/>
    </radialGradient>
  </defs>
  <path fill="url(#a)" fill-opacity=".8" fill-rule="evenodd" d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z"/>
</svg>
    )
}

export default Loading