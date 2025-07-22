import React from "react";

const TwoColumnInline = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem",
    }}>
      <header style={{
        backgroundColor: "#4a90e2",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}>
        <h1>My Page Header</h1>
      </header>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // two equal columns :contentReference[oaicite:1]{index=1}
        gap: "1rem",
      }}>
        <div style={{
          backgroundColor: "#f0f0f0",
          padding: "1rem",
          borderRadius: "4px",
        }}>
          <p>This is column 1.</p>
        </div>
        <div style={{
          backgroundColor: "#f0f0f0",
          padding: "1rem",
          borderRadius: "4px",
        }}>
          <p>This is column 2.</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnInline;
