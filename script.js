/*  TODO:
    - show high score, store it in local storage
    - load random words from an API
 */

 // VARIABLES
 let words = [ 'Software', 'Hardware', 'Programming', 'Network', 'Cybersecurity', 'Database', 'Algorithm', 'Cloud', 'Internet', 'Server', 'Code', 'Firewall', 'Encryption', 'Data', 'Website', 'AI (Artificial Intelligence)', 'API (Application Programming Interface)', 'DevOps', 'Big Data', 'IoT (Internet of Things)', 'Machine Learning', 'Blockchain', 'IT Support', 'Virtualization', 'Operating System', 'Bug', 'Debugging', 'IT Infrastructure', 'Software Development', 'Information Security', 'IT Consulting', 'IT Management', 'IT Governance', 'Data Center', 'Cloud Computing', 'Cyberattack', 'Hacking', 'IT Specialist', 'Network Administrator', 'System Administrator', 'Programming Language', 'Software Engineer', 'API Integration', 'Network Security', 'Data Analysis', 'IT Certification', 'IT Audit', 'IT Procurement', 'IT Budget', 'IT Vendor', 'IT Asset Management', 'IT Outsourcing', 'IT Troubleshooting', 'IT Policies', 'IT Framework', 'IT Governance', 'IT Risk Management', 'IT Best Practices', 'IT Innovation', 'IT Trends', 'IT Research', 'IT Analytics', 'IT Metrics', 'IT Collaboration', 'IT Security Policy', 'IT Roadmap', 'IT Dashboard', 'IT Standards', 'IT Performance', 'IT Transformation', 'IT Optimization', 'IT Assessment', 'IT Compliance Audit', 'IT Compliance Officer', 'IT Compliance Program', 'IT Compliance Management', 'IT Compliance Framework', 'IT Compliance Tools', 'IT Compliance Strategy', 'IT Compliance Solutions', 'IT Compliance Policies', 'IT Compliance Guidelines', 'IT Compliance Requirements', 'IT Compliance Reporting', 'IT Compliance Documentation', 'IT Compliance Automation', 'IT Compliance Training', 'IT Compliance Monitoring'];


const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};
let currentLevel = levels.easy;
let timeCount = currentLevel + 1, scoreCount = 0, isPlaying, wordDisplayed;

let currentWord  = document.querySelector('#current-word'),
    inputWord = document.querySelector('#input-word'),
    time = document.querySelector('#seconds'),
    timeLeft = document.querySelector('#time-left'),
    score = document.querySelector('#score'),
    message = document.querySelector('#message'),
    difficultyLevel = document.querySelector('#difficulty');


// EVENT LISTENERS
window.addEventListener('load', init);
inputWord.addEventListener('input', startMatch);
difficultyLevel.addEventListener('change', changeLevel);


// FUCNTIONS
function init() { 
    time.textContent = currentLevel;
    showWord();
    // call the countdown function every second
    setInterval(countdown, 1000);
    // cheking the game status every 0.1s
    setInterval(checkStatus, 100);
}
function showWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordDisplayed = words[randomIndex];
    currentWord.textContent = wordDisplayed;
}
function countdown() {
    if (timeCount > 0) {
        // console.log(timeCount);
        timeCount--;   
        timeLeft.textContent = timeCount;
    } else if(timeCount === 0) {
        isPlaying = false;
    }
}
function checkStatus() {
    if(!isPlaying && timeCount === 0) {
        message.textContent = 'Time Up!!';
        scoreCount = 0
        message.className = 'mt-3 text-danger';
    }
}
function startMatch() {
    if (this.value === wordDisplayed) {
        isPlaying = true;
        message.textContent  = 'Correct!!'
        message.className = 'mt-3 text-success'
        this.value = ''
        scoreCount++;
        score.textContent = scoreCount;
        timeCount = currentLevel + 1; // will reset the clock to start the countdown again
        showWord();
    }
}
function changeLevel() {
    let level = this.options[this.selectedIndex].value;
    if (level === 'Medium') {
        inputWord.focus();
        scoreCount = 0;
        message.textContent = '';
        isPlaying = true;
        currentLevel = levels.medium;
        time.textContent = currentLevel;
        timeCount = currentLevel + 1;
        startMatch();
    }
    if (level === 'Hard') {
        inputWord.focus();
        scoreCount = 0;
        message.textContent = '';
        isPlaying = true;
        currentLevel = levels.hard;
        time.textContent = currentLevel;
        timeCount = currentLevel + 1;
        startMatch();
    }
}
