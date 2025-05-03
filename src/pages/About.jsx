    import React from 'react';

    const AboutUs = () => {
    return (
        <section className="about-page">
        <div className="about-header">
            <h2>About Our Fitness Mission</h2>
            <p>Your transformation journey begins here. We’re committed to making fitness accessible, effective, and fun for everyone.</p>
        </div>

        <div className="about-grid">
            <div className="about-card">
            <h3>💪 Our Vision</h3>
            <p>To empower every individual to achieve a healthier lifestyle through smart training and tech-enabled guidance.</p>
            </div>

            <div className="about-card">
            <h3>📈 What We Offer</h3>
            <ul>
                <li>Personalized workout plans</li>
                <li>Body tracking tools (BMI, BMR, 1RM)</li>
                <li>Expert tips and video tutorials</li>
                <li>Motivational transformation stories</li>
                <li>Calorie & water intake tracker</li>
            </ul>
            </div>

            <div className="about-card">
            <h3>🤝 Why Choose Us?</h3>
            <p>With a focus on science-backed fitness, engaging UI, and community support, we’re not just an app — we’re your fitness companion.</p>
            </div>
        </div>

        <div className="about-cta">
            <h3>Ready to Transform?</h3>
            <p>Join thousands who trust us with their fitness journey.</p>
            <button>Explore Plans</button>
        </div>
        </section>
    );
    };

    export default AboutUs;
