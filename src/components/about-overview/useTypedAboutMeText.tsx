import { useCallback, useEffect, useState } from 'react'

export enum TypePhase {
    Typing,
    Pausing,
    Deleting,
}

const TYPING_INTERVAL_MIN = 50;
const TYPING_INTERVAL_MAX = 90;
const TYPING_PAUSE_MS = 5000;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 500;

const getRandomTypingInterval = () =>
    Math.floor(Math.random()
        * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)
    ) + TYPING_INTERVAL_MIN;

export const useTypedAboutMeText = (
    aboutMeTextInput: string[]
): {
    typedAboutMeText: string
    selectedAboutMeText: string
    phase: TypePhase
    resume: () => void
} => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState(TypePhase.Typing)
    const [typedAboutMeText, setTypedAboutMeText] = useState('');
    const resume = useCallback(() => {
        if (phase !== TypePhase.Pausing) return
        setPhase(TypePhase.Deleting)
    }, [phase]);

    useEffect(() => {
        switch (phase) {
            case TypePhase.Typing: {
                const nextTypedAboutMeText = aboutMeTextInput[selectedIndex].slice(
                    0,
                    typedAboutMeText.length + 1
                );

                if (nextTypedAboutMeText === typedAboutMeText) {
                    setPhase(TypePhase.Pausing);
                    return;
                };

                const timeout = setTimeout(() => {
                    setTypedAboutMeText(nextTypedAboutMeText)
                }, getRandomTypingInterval());

                return () => clearTimeout(timeout)
            }
            case TypePhase.Deleting: {
                if (!typedAboutMeText) {
                    const timeout = setTimeout(() => {
                        const nextIndex = selectedIndex + 1
                        setSelectedIndex(aboutMeTextInput[nextIndex] ? nextIndex : 0)
                        setPhase(TypePhase.Typing)
                    }, DELETING_PAUSE_MS);
                    return () => clearTimeout(timeout)
                };

                const nextRemaining = aboutMeTextInput[selectedIndex].slice(
                    0,
                    typedAboutMeText.length - 1
                );

                const timeout = setTimeout(() => {
                    setTypedAboutMeText(nextRemaining)
                }, DELETING_INTERVAL);

                return () => clearTimeout(timeout)
            }
            case TypePhase.Pausing:
            default:
                const timeout = setTimeout(() => {
                    setPhase(TypePhase.Deleting)
                }, TYPING_PAUSE_MS)

                return () => clearTimeout(timeout)
        }
    }, [aboutMeTextInput, typedAboutMeText, selectedIndex, phase])

    // let selectedAboutMeText = aboutMeTextInput[selectedIndex]

    return {
        typedAboutMeText,
        phase,
        resume,
        selectedAboutMeText: aboutMeTextInput[selectedIndex],
    }
}

// export default useTypedAboutMeText;