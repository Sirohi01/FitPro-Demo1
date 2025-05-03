    import React from "react";
    import home from "../assets/home.jpg";
    const Home = () => (
    <div
        className="hero-section"
        style={{
        backgroundImage: `url(${home})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        padding: "0 2rem",
        }}
    >
        <div className="hero-content" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            Welcome to FitPro
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Your personalized journey to strength, endurance, and transformation starts here!
        </p>
        <button
            style={{
            backgroundColor: "#ff6600",
            color: "#fff",
            border: "none",
            padding: "0.8rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
            onClick={() => window.location.href = "/about"}
        >
            Get Started
        </button>
        </div>
    </div>
    );

    export default Home;
