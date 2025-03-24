import React, { useState, useEffect } from 'react';
import './TwoTruthsAndAGoal.css';
import statementsList, { Statement } from './statementsList';

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
            <h1 className="game-title pad-bottom">
                Click an option to see if it's a{' '}
                <span style={{ color: 'green' }}>fact</span> or{' '}
                <span style={{ color: 'red' }}>goal</span>.
            </h1>

            <div className="statements-container">
                {currentStatements.map((statement, index) => {
                    const isSelected = selected === index;
                    const isCorrect = result === 'correct';
                    const isWrong = result === 'wrong';

                    return (
                        <div key={index} className="container">
                            <div
                                className={`statement-card ${isSelected && isCorrect ? 'correct' : ''} ${isSelected && isWrong ? 'wrong' : ''} ${selected !== null ? 'disabled' : ''}`}
                                onClick={() => handleSelect(index)}
                            >
                                {statement.text}
                                {isSelected && (
                                    <div className="overlay-text">
                                        {isCorrect ? 'NOT YET!' : 'TRUE'}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const shuffleArray = (array: any[]) =>
    array
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
