function logMessage(message) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML += message + "<br>"; // Display on webpage
    console.log(message); // Also log to the console
}

function OpeningCeremony(callback) {
    logMessage("🏁 Opening Ceremony started...");
    setTimeout(() => {
        logMessage("✅ Opening Ceremony completed.");
        let scores = { Red: 0, Blue: 0, Green: 0, Yellow: 0 };
        callback(scores);
    }, 1000);
}

function Race100M(scores, callback) {
    logMessage("🏃 Race 100M started...");
    
    let raceResults = Object.keys(scores).map(color => ({
        color,
        time: Math.random() * 5 + 10 // Random time between 10 and 15 seconds
    }));

    raceResults.sort((a, b) => a.time - b.time); // Sort based on time (lower is better)
    
    logMessage(`🥇 ${raceResults[0].color} wins (50 pts)`);
    logMessage(`🥈 ${raceResults[1].color} second (25 pts)`);
    
    scores[raceResults[0].color] += 50;
    scores[raceResults[1].color] += 25;

    logMessage(`Updated Scores: ${JSON.stringify(scores)}`);

    setTimeout(() => callback(scores), 1000);
}

function LongJump(scores, callback) {
    logMessage("🏆 Long Jump started...");
    
    let colors = Object.keys(scores);
    let selectedColor = colors[Math.floor(Math.random() * colors.length)];

    logMessage(`🎖️ ${selectedColor} wins Long Jump (30 pts)`);
    
    scores[selectedColor] += 30;
    logMessage(`Updated Scores: ${JSON.stringify(scores)}`);

    setTimeout(() => callback(scores), 1000);
}

function HighJump(scores, callback) {
    logMessage("🤾 High Jump started...");

    let userInput = prompt("Enter the color with the highest jump (Red/Blue/Green/Yellow):");
    
    if (scores[userInput] !== undefined) {
        logMessage(`🎯 ${userInput} wins High Jump (20 pts)`);
        scores[userInput] += 20;
    } else {
        logMessage("⚠️ No valid input, no points awarded.");
    }

    logMessage(`Updated Scores: ${JSON.stringify(scores)}`);

    setTimeout(() => callback(scores), 1000);
}

function AwardCeremony(scores) {
    logMessage("🏅 Award Ceremony started...");

    let sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    logMessage(`🏆 Winner: ${sortedScores[0][0]} - ${sortedScores[0][1]} pts`);
    logMessage(`🥈 Runner-up: ${sortedScores[1][0]} - ${sortedScores[1][1]} pts`);
    logMessage(`🥉 Third Place: ${sortedScores[2][0]} - ${sortedScores[2][1]} pts`);
}