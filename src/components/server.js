let api = "http://localhost:3002";
let server ={
    fetchQuizzes: () => { return (fetch(api + "/quizzes").then(x => x.json()))},
    fetchQuestions: (quizid) => {return (fetch(api+`/quiz/${quizid}`))}
};

export default server;