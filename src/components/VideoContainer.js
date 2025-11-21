

  import { useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import VideoImportHandler from "./VideoImportHandler";
;
export default function VideoContainer() {
  const [isOpen, setIsOpen] = useState(false);
  
  const { id } = useParams();
 
  

  

  return (
    <div className="App">
    <Header/>
      <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #1e3a8a, #7e22ce, #ec4899)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 20 }}>
      <h1 style={{ color: "white", fontSize: 48, marginBottom: 20 }}>Ma Démo Vidéo</h1>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "20px 40px",
          fontSize: 20,
          borderRadius: "50px",
          border: "none",
          background: "white",
          color: "#7e22ce",
          cursor: "pointer",
          transition: "transform 0.3s",
        }}
      >
        Play Video
      </button>

      {isOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.95)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          zIndex: 9999,
          flexDirection: "column",
        }}>
          <button
            onClick={() => setIsOpen(false)}
            style={{ color: "white", marginBottom: 20, fontSize: 18 }}
          >
            Close
          </button>
          <VideoImportHandler videoId={id} />

        </div>
      )}
    </div>
    </div>
  );
}
