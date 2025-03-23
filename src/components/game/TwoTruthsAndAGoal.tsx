import React, { useState, useEffect } from 'react';
import './TwoTruthsAndAGoal.css';

const statementsList = [
    { text: "I managed an ice cream company and invented a flavor called 'The Elvis.'", type: 'truth' },
    { text: "I have a rare genetic condition known as KT Syndrome.", type: 'truth' },
    { text: "I lived in a retrofitted van for an entire summer.", type: 'truth' },
    { text: "I wrote a 60-page script titled 'Olim Chadashim' (New Immigrants).", type: 'truth' },
    { text: "I was published in a scientific journal.", type: 'truth' },
    { text: "I released a DJ mix that received over 5,000 plays.", type: 'truth' },
    { text: "I backpacked across Europe with four friends after graduating high school.", type: 'truth' },
    { text: "I performed stand-up comedy at a local venue.", type: 'truth' },
    { text: "I can do muscle-ups and flag stands.", type: 'truth' },
    { text: "I attended dozens of music festivals.", type: 'truth' },
    { text: "I hitchhiked my way into Burning Man.", type: 'truth' },
    { text: "I slept in a diner for an entire weekend just for the experience.", type: 'truth' },
    { text: "I lived in a startup house where residents took turns sleeping.", type: 'truth' },
    { text: "I have a dog named Naya.", type: 'truth' },

    // Goals (written like truths)
    { text: "I bench pressed twice my body weight.", type: 'goal' },
    { text: "I visited all seven continents.", type: 'goal' },
    { text: "I averaged over 100 monthly visitors to my personal blog.", type: 'goal' },
    { text: "I watched every Star Trek series and movie.", type: 'goal' },
    { text: "I got married and have three pets.", type: 'goal' },
];


type Statement = {
    text: string;
    type: 'truth' | 'goal';
};

export default function TwoTruthsAndAGoal() {
    const [currentStatements, setCurrentStatements] = useState<Statement[]>([]);
    const [selected, setSelected] = useState<number | null>(null);
    const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

    useEffect(() => {
        loadNewStatements();
    }, []);

    const loadNewStatements = () => {
        const truths = statementsList.filter(s => s.type === 'truth');
        const goals = statementsList.filter(s => s.type === 'goal');

        const selectedTruths = shuffleArray(truths).slice(0, 2);
        const selectedGoal = shuffleArray(goals)[0];

        const combined = shuffleArray([...selectedTruths, selectedGoal]);
        setCurrentStatements(combined);
        setSelected(null);
        setResult(null);
    };

    const handleSelect = (index: number) => {
        if (selected !== null) return;

        const isGoal = currentStatements[index].type === 'goal';
        setSelected(index);
        setResult(isGoal ? 'correct' : 'wrong');

        setTimeout(() => {
            loadNewStatements();
        }, 1000);
    };

    return (
        <div className="two-truths-container pad-bottom pad-top">
            <div className='container'>
                <h1 className="game-title">Click to see if item is an accomplishment or goal</h1>
            </div>
            <div className="statements-container">
                {currentStatements.map((statement, index) => (
                    <div
                        key={index}
                        className={`statement-card ${selected === index && result === 'correct' ? 'correct' : ''} ${selected === index && result === 'wrong' ? 'wrong' : ''}`}
                        onClick={() => handleSelect(index)}
                    >
                        {statement.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

const shuffleArray = (array: any[]) => {
    return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};
