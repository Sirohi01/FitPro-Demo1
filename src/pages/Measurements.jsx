// src/pages/Measurements.jsx
import React, { useState } from "react";
import "../styles/Measurement.css";

const Measurements = () => {
    const [bmi, setBmi] = useState(null);
    const [bmr, setBmr] = useState(null);
    const [oneRepMax, setOneRepMax] = useState(null);
    const [waistToHipRatio, setWaistToHipRatio] = useState(null);
    const [bodyFatPercentage, setBodyFatPercentage] = useState(null);
    const [leanBodyMass, setLeanBodyMass] = useState(null);
    const [skeletalMuscleMass, setSkeletalMuscleMass] = useState(null);
    const [fatWeight, setFatWeight] = useState(null);

    const calculateBMI = (weight, height) => {
        const bmi = weight / (height * height);
        setBmi(bmi.toFixed(2));
    };

    const calculateBMR = (weight, height, age, gender) => {
        const bmr =
            gender === "male"
                ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
                : 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
        setBmr(bmr.toFixed(2));
    };

    const calculate1RM = (weight, reps) => {
        const oneRepMax = weight * (1 + reps / 30);
        setOneRepMax(oneRepMax.toFixed(2));
    };

    const calculateWaistToHipRatio = (waist, hip) => {
        const ratio = waist / hip;
        setWaistToHipRatio(ratio.toFixed(2));
    };

    const calculateBodyFatPercentage = (weight, waist, wrist, hip, forearm, gender) => {
        let bodyFatPercentage;
        if (gender === "male") {
            bodyFatPercentage =
                86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
        } else {
            bodyFatPercentage =
                163.205 * Math.log10(waist + hip - wrist) - 97.684 * Math.log10(height) - 78.387;
        }
        setBodyFatPercentage(bodyFatPercentage.toFixed(2));
    };

    const calculateLeanBodyMass = (weight, bodyFatPercentage) => {
        const leanBodyMass = weight * (1 - bodyFatPercentage / 100);
        setLeanBodyMass(leanBodyMass.toFixed(2));
    };

    const calculateSkeletalMuscleMass = (weight, bodyFatPercentage) => {
        const skeletalMuscleMass = weight * (1 - (bodyFatPercentage / 100));
        setSkeletalMuscleMass(skeletalMuscleMass.toFixed(2));
    };

    const calculateFatWeight = (weight, bodyFatPercentage) => {
        const fatWeight = (weight * bodyFatPercentage) / 100;
        setFatWeight(fatWeight.toFixed(2));
    };

    return (
        <div className="measurements-page">
            <h2>Body Measurements</h2>
            <p>
                Track your fitness progress with key measurements that help you assess strength, weight, and body composition.
            </p>

            <div className="measurements-info">
                <div className="measurement">
                    <h3>BMI (Body Mass Index)</h3>
                    <p>
                        BMI is a simple tool to assess whether you're underweight, normal weight, overweight, or obese,
                        based on your height and weight.
                    </p>
                    <label>
                        Enter weight (kg):
                        <input type="number" placeholder="Weight in kg" />
                    </label>
                    <label>
                        Enter height (m):
                        <input type="number" placeholder="Height in meters" />
                    </label>
                    <button onClick={() => calculateBMI(70, 1.75)}>Calculate BMI</button>
                    <p>Your BMI: {bmi ? bmi : "Not Calculated"}</p>
                </div>

                <div className="measurement">
                    <h3>BMR (Basal Metabolic Rate)</h3>
                    <p>
                        BMR calculates the number of calories your body needs to maintain basic functions at rest.
                    </p>
                    <label>
                        Enter weight (kg):
                        <input type="number" placeholder="Weight in kg" />
                    </label>
                    <label>
                        Enter height (cm):
                        <input type="number" placeholder="Height in cm" />
                    </label>
                    <label>
                        Enter age:
                        <input type="number" placeholder="Age in years" />
                    </label>
                    <label>
                        Select gender:
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <button onClick={() => calculateBMR(70, 175, 25, "male")}>Calculate BMR</button>
                    <p>Your BMR: {bmr ? bmr : "Not Calculated"}</p>
                </div>

                <div className="measurement">
                    <h3>1RM (One Rep Max)</h3>
                    <p>
                        The 1RM is the maximum amount of weight you can lift for one repetition of a given exercise.
                    </p>
                    <label>
                        Enter weight lifted (kg):
                        <input type="number" placeholder="Weight in kg" />
                    </label>
                    <label>
                        Enter reps performed:
                        <input type="number" placeholder="Reps" />
                    </label>
                    <button onClick={() => calculate1RM(100, 5)}>Calculate 1RM</button>
                    <p>Your 1RM: {oneRepMax ? oneRepMax : "Not Calculated"}</p>
                </div>

                <div className="measurement">
                    <h3>Waist-to-Hip Ratio</h3>
                    <p>
                        The waist-to-hip ratio is a measurement used to assess the risk of heart disease. A higher ratio
                        indicates a higher risk.
                    </p>
                    <label>
                        Enter waist measurement (cm):
                        <input type="number" placeholder="Waist in cm" />
                    </label>
                    <label>
                        Enter hip measurement (cm):
                        <input type="number" placeholder="Hip in cm" />
                    </label>
                    <button onClick={() => calculateWaistToHipRatio(85, 100)}>Calculate Waist-to-Hip Ratio</button>
                    <p>Your Waist-to-Hip Ratio: {waistToHipRatio ? waistToHipRatio : "Not Calculated"}</p>
                </div>

                <div className="measurement">
                    <h3>Body Fat Percentage</h3>
                    <p>
                        Body fat percentage represents the proportion of fat in your body. It helps assess fitness levels
                        and health risks.
                    </p>
                    <label>
                        Enter weight (kg):
                        <input type="number" placeholder="Weight in kg" />
                    </label>
                    <label>
                        Enter waist measurement (cm):
                        <input type="number" placeholder="Waist in cm" />
                    </label>
                    <label>
                        Enter wrist measurement (cm):
                        <input type="number" placeholder="Wrist in cm" />
                    </label>
                    <label>
                        Enter hip measurement (cm):
                        <input type="number" placeholder="Hip in cm" />
                    </label>
                    <label>
                        Enter forearm measurement (cm):
                        <input type="number" placeholder="Forearm in cm" />
                    </label>
                    <button onClick={() => calculateBodyFatPercentage(70, 80, 15, 95, 25, "male")}>
                        Calculate Body Fat Percentage
                    </button>
                    <p>Your Body Fat Percentage: {bodyFatPercentage ? bodyFatPercentage : "Not Calculated"}</p>
                </div>

                <div className="measurement">
                    <h3>Lean Body Mass</h3>
                    <p>
                        Lean Body Mass (LBM) is the weight of everything in the body except fat, including muscles, bones, and organs.
                    </p>
                    <label>
                        Enter weight (kg):
                        <input type="number" placeholder="Weight in kg" />
                    </label>
                    <label>
                        Enter body fat percentage (%):
                        <input type="number" placeholder="Body Fat Percentage" />
                    </label>
                    <button onClick={() => calculateLeanBodyMass(70, 20)}>Calculate Lean Body Mass</button>
                    <p>Your Lean Body Mass: {leanBodyMass ? leanBodyMass : "Not Calculated"}</p>
                </div>

                <div className="measurement">
                    <h3>Skeletal Muscle Mass</h3>
                    <p>
                        Skeletal Muscle Mass (SMM) is an estimate of the muscle mass in your body, used for tracking fitness progress.
                    </p>
                    <label>
                        Enter weight (kg):
                        <input type="number" placeholder="Weight in kg" />
                    </label>
                    <label>
                        Enter body fat percentage (%):
                        <input type="number" placeholder="Body Fat Percentage" />
                    </label>
                    <button onClick={() => calculateSkeletalMuscleMass(70, 20)}>
                        Calculate Skeletal Muscle Mass
                    </button>
                    <p>Your Skeletal Muscle Mass: {skeletalMuscleMass ? skeletalMuscleMass : "Not Calculated"}</p>
                </div>

                <div className="measurement">
                    <h3>Fat Weight</h3>
                    <p>
                        Fat Weight is the amount of fat in your body. It helps assess how much fat is present compared to lean mass.
                    </p>
                    <label>
                        Enter weight (kg):
                        <input type="number" placeholder="Weight in kg" />
                    </label>
                    <label>
                        Enter body fat percentage (%):
                        <input type="number" placeholder="Body Fat Percentage" />
                    </label>
                    <button onClick={() => calculateFatWeight(70, 20)}>Calculate Fat Weight</button>
                    <p>Your Fat Weight: {fatWeight ? fatWeight : "Not Calculated"}</p>
                </div>
            </div>

            <div className="measurement-tips">
                <h4>Measurement Tips</h4>
                <ul>
                    <li>Always measure at the same time of day for consistency.</li>
                    <li>Ensure you are hydrated before taking measurements.</li>
                    <li>For body fat percentage, use a skinfold caliper or consult a professional for accuracy.</li>
                    <li>1RM is most accurate when performed under proper supervision.</li>
                </ul>
            </div>
        </div>
    );
};

export default Measurements;
