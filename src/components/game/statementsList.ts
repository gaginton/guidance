export type Statement = {
    text: string;
    type: 'truth' | 'goal';
};

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
    { text: "I was president of my high school debate team.", type: 'truth' },
    { text: "I worked in a sushi restaurant during high school.", type: 'truth' },
    { text: "I taught African migrants how to use CRMs and handle difficult customers.", type: 'truth' },
    { text: "I volunteered in a community garden for several years.", type: 'truth' },    
    { text: "I have written techncal documentation for three companies.", type: 'truth' },    
    { text: "I help Olim find Pesach dinners in their preferred language.", type: 'truth' },    
    { text: "I lived on Soylent (meal replacement) for a month.", type: 'truth' },    
    // { text: "", type: 'truth' },    
    // { text: "", type: 'truth' },    
    // { text: "", type: 'truth' },    

    // Goals (written like truths)
    { text: "I bench pressed twice my body weight.", type: 'goal' },
    { text: "I visited all seven continents.", type: 'goal' },
    { text: "I averaged over 100 monthly visitors to my personal blog.", type: 'goal' },
    { text: "I watched every Star Trek series and movie.", type: 'goal' },
    { text: "I got married and have three pets.", type: 'goal' },
    { text: "I have cooked a Thanksgiving dinner for 8 people.", type: 'goal' },
    { text: "I read every book by Jonathan Ames.", type: 'goal' },
    { text: "I held a 30-second handstand.", type: 'goal' },
    { text: "I am fluent in three languages.", type: 'goal' },
    { text: "I created an online mentorship program with 20+ active members.", type: 'goal' },
    { text: "I organized album listening parties.", type: 'goal' },
    // { text: "", type: 'goal' },
    // { text: "", type: 'goal' },
    // { text: "", type: 'goal' },
];

export default statementsList;