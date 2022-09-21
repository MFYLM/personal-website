import React, { useState } from "react";
import "./MainContent.css";

function MainContent() {
    const [experiences, setExperiences] = useState([
        {
            title: "Tutor",
            detail: "My Tutor experience",
            isShow: false
        },
        {
            title: "UCI Machine Learning Hackathon",
            detail: "Joined ML Hackathon hosted by UCI ICS department, and made a recognization system for detecting different type of problems such as classification or regression for UCI database",
            isShow: false
        },
        {
            title: "IdeaBox",
            detail: "Used React to build up a website which allows user to create ideas and edit them on the website",
            isShow: false
        },
        {
            title: "Sotto",
            detail: "Developed deployed website for company Sotto, embedded Stripe payment, Calendly and connected React frontend to Express and Node.js backend",
            isShow: false
        }
    ]);



    const showExperiences = experiences.map((exp) => {
        if (exp.isShow)
            return <li onClick={ () => {
                var newExps = [...experiences];
                for (let i = 0; i < newExps.length; ++i)
                {
                    if (newExps[i] === exp)
                        newExps[i].isShow = !experiences[i].isShow;
                }
                setExperiences(newExps)
            }}><p>{exp.title}</p><p>{exp.detail}</p></li>
        else
            return <li onClick={ () => {
                var newExps = [...experiences];
                for (let i = 0; i < newExps.length; ++i)
                {
                    if (newExps[i] === exp)
                        newExps[i].isShow = !experiences[i].isShow;
                }
                setExperiences(newExps)
            }}><p>{exp.title}</p></li>
    });

    return (
        <div className="content">
            <div className="experiences">
                <h2>Experiences</h2>
                <ul>
                    {showExperiences}
                </ul>
            </div>
            <div className="my-work">
                <div className="text">
                    <h2>Projects</h2>
                </div>
                <div className="projects">
                    <div className="cards">
                        <div className="card">
                            <a href="https://sotto-mentalhealth-solution.netlify.app" target="_blank">
                                <div class="logo">
                                    <img src="./asset/Sotto Logo.png"/>
                                    <h3>Company: sotto</h3>
                                </div>
                                <div class="container">
                                    <article>
                                        A website that allows users to contact with special mental health coach to provide a better and more engaged process of solving mental health problem
                                    </article>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://sotto-mentalhealth-solution.netlify.app" target="_blank">
                                <div class="logo">
                                    <img src="./asset/Sotto Logo.png"/>
                                    <h3>Company: sotto</h3>
                                </div>
                                <div class="container">
                                    <article>
                                        A website that allows users to contact with special mental health coach to provide a better and more engaged process of solving mental health problem
                                    </article>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://sotto-mentalhealth-solution.netlify.app" target="_blank">
                                <div class="logo">
                                    <img src="./asset/Sotto Logo.png"/>
                                    <h3>Company: sotto</h3>
                                </div>
                                <div class="container">
                                    <article>
                                        A website that allows users to contact with special mental health coach to provide a better and more engaged process of solving mental health problem
                                    </article>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MainContent;