import React from "react";
import "../styles/Transformation.css"

const transformationData = [
    {
        title: "Personal Training",
        desc: "Achieve your fitness goals with personalized training! Tailored workouts, expert guidance, and continuous support to help you build strength, lose fat, and transform your body.",
        img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
        button: "Buy Now",
        },
        {
        title: "Online Coaching",
        desc: "Transform your fitness from anywhere! Personalized workout plans, nutrition guidance, and continuous support—tailored to your goals.",
        img: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?auto=format&fit=crop&w=800&q=80",
        button: "Buy Now",
        },
        {
        title: "Fat Loss Program",
        desc: "Lose 0.5 to 1 kg of fat per week without losing muscle mass! Get personalized workouts and nutrition plans.",
        img: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        button: "Buy Now",
        },
        {
        title: "Muscle Building Programs",
        desc: "Achieve muscle growth and strength with customized plans. Build the body you’ve always wanted!",
        img: "https://plus.unsplash.com/premium_photo-1664474667047-a20f4e60339a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        button: "Buy Now",
        },
        {
        title: "Body Recomposition Plan",
        desc: "Lose fat and build muscle at the same time with my Body Recomposition Plan!",
        img: "https://images.unsplash.com/photo-1734715690116-ad4f8a465579?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        button: "Buy Now",
        }
    ];  

    const Transformation = () => (
    <div className="transformation-page">
        <section className="consultation-section">
        <h2>Get a Free Consultation</h2>
        <p>Let's talk about your fitness goals and map out your transformation journey!</p>
        <button className="consultation-button">Click Here</button>
        </section>

        <section className="programs-section">
        <div className="card-grid">
            {transformationData.map((item, index) => (
            <div className="card" key={index}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="card-button">{item.button}</button>
            </div>
            ))}
        </div>
        </section>
    </div>
);

export default Transformation;
