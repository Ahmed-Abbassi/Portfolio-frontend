import React from 'react'
import communityManagementVideo from '../videos/commManagement.mp4'
function VideoImportHandler({videoId}) {
    const videos = {
    "commManagement": communityManagementVideo, 
    // Add more video mappings as needed
  };
  console.log("nav params : ", videoId);
  return (
   <video
      src={videos[videoId]}
      controls
      autoPlay
      style={{ width: "100%" }}
    />
  )
}

export default VideoImportHandler