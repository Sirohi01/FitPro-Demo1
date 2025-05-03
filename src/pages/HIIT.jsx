    import React from "react";
    import "../styles/HIIT.css";

    const hiitExercises = [
        {
            name: "Jump Squats",
            desc: "Targets glutes, quads, and hamstrings. Enhances explosive strength.",
            video: "https://www.youtube.com/embed/Azl5tkCzDcc",
        },
        {
            name: "Mountain Climbers",
            desc: "Burn calories and strengthen the core with this full-body cardio move.",
            video: "https://www.youtube.com/embed/nmwgirgXLYM",
        },
        {
            name: "Burpees",
            desc: "A total body HIIT move combining squats, pushups, and jumps.",
            video: "https://www.youtube.com/embed/dZgVxmf6jkA",
        },
        {
            name: "High Knees",
            desc: "Elevate heart rate while engaging core and legs.",
            video: "https://www.youtube.com/embed/OAJ_J3EZkdY",
        },
        {
            name: "Plank Jacks",
            desc: "A combination of a plank and jumping jack that targets the core and shoulders.",
            video: "https://www.youtube.com/embed/8Do3ssZ23Mc",
        },
        {
            name: "Lunges",
            desc: "Targets the legs and glutes, improving balance and strength.",
            video: "https://www.youtube.com/embed/wrwwXE_x-pQ",
        },
        {
            name: "Skater Jumps",
            desc: "A lateral movement that targets the legs, glutes, and core while improving agility.",
            video: "https://www.youtube.com/embed/5gtLC5BgN7Q",
        },
        {
            name: "Push-Ups",
            desc: "A classic bodyweight exercise targeting the chest, triceps, and shoulders.",
            video: "https://www.youtube.com/embed/IODxDxX7oi4",
        },
        {
            name: "Russian Twists",
            desc: "Engages the core and obliques for rotational strength.",
            video: "https://www.youtube.com/embed/wkD8rjkodUI",
        },
        {
            name: "Jumping Jacks",
            desc: "A cardio exercise that increases heart rate and works the whole body.",
            video: "https://www.youtube.com/embed/c4DAnQ6DtF8",
        },
        {
            name: "Tuck Jumps",
            desc: "Targets the legs, glutes, and core with explosive movements.",
            video: "https://www.youtube.com/embed/-bnJGikRGsM",
        },
        {
            name: "Box Jumps",
            desc: "Improves leg strength and explosiveness by jumping onto a raised surface.",
            video: "https://www.youtube.com/embed/52r_Ul5k03g",
        },
    ];
    

    const HIIT = () => (
    <div className="hiit-page">
        <h2>🔥 HIIT Training Program</h2>
        <p>
        High-Intensity Interval Training (HIIT) is one of the best ways to burn fat, improve cardiovascular endurance,
        and maintain muscle in minimal time.
        </p>

        <section className="hiit-details">
        <ul>
            <li>⚡ Quick 20-30 min intense sessions</li>
            <li>🔥 Torch fat while preserving muscle</li>
            <li>👊 Workouts for Beginner to Advanced</li>
            <li>⏱️ Built-in timer suggestions</li>
        </ul>
        </section>

        <section className="hiit-section">
        <h3>📋 How HIIT Works</h3>
        <p>
            HIIT alternates between periods of high-intensity effort and short recovery times. For example, 40 seconds of
            intense work followed by 20 seconds of rest. This method keeps your heart rate high and helps burn calories
            even after the workout ends.
        </p>
        </section>

        <section className="hiit-section">
        <h3>🗓️ Weekly HIIT Plan Example</h3>
        <ul>
            <li><strong>Monday:</strong> Full-body circuit</li>
            <li><strong>Wednesday:</strong> Lower body blast</li>
            <li><strong>Friday:</strong> Core & Cardio</li>
            <li><strong>Sunday:</strong> Full-body finisher (Optional)</li>
        </ul>
        </section>

        <section className="hiit-section">
        <h3>⏲️ Timer Recommendations</h3>
        <p>Use these free apps to time your HIIT sets:</p>
        <ul>
            <li><a href="https://www.tabatatimer.com/" target="_blank" rel="noreferrer">TabataTimer.com</a></li>
            <li><a href="https://intervaltimer.com/" target="_blank" rel="noreferrer">IntervalTimer.com</a></li>
            <li>Or search "HIIT Timer" on Google Play or App Store</li>
        </ul>
        </section>

        <section className="hiit-section">
        <h3>🎯 Who Should Do HIIT?</h3>
        <p>
            HIIT is perfect for busy individuals, athletes, and those who want to burn fat quickly while preserving muscle.
            It’s scalable—whether you're a beginner or an expert.
        </p>
        </section>

        <section className="hiit-section">
        <h3>💪 Featured HIIT Exercises</h3>
        <div className="hiit-exercises">
            {hiitExercises.map((exercise, index) => (
            <div className="exercise-card" key={index}>
                <iframe
                src={exercise.video}
                title={exercise.name}
                frameBorder="0"
                allowFullScreen
                ></iframe>
                <h4>{exercise.name}</h4>
                <p>{exercise.desc}</p>
            </div>
            ))}
        </div>
        </section>

        <section className="hiit-section">
        <h3>🏆 Benefits of HIIT</h3>
        <ul>
            <li>🔥 Efficient fat burning</li>
            <li>💓 Boosts heart health</li>
            <li>⚙️ Increases metabolism</li>
            <li>🕒 Saves time</li>
            <li>🧠 Improves mental endurance</li>
        </ul>
        </section>
    </div>
    );

    export default HIIT;
