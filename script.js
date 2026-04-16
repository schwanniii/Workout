// Datenstruktur - einfach anpassbar
const data = {
    personen: {
        "J": {
            workouts: {
                "push": {
                    einheiten: [
                        { name: "Aufwärmen", dauer: 360 },

                        { name: "Handstand Holds", dauer: 600 },
                        { name: "Lange Pause", dauer: 120 },

                        { name: "Planche Leans 1", dauer: 20 },
                        { name: "Pause", dauer: 90 },
                        { name: "Planche Leans 2", dauer: 20 },
                        { name: "Pause", dauer: 90 },
                        { name: "Planche Leans 3", dauer: 20 },
                        { name: "Lange Pause", dauer: 120 },

                        { name: "Archer Pushups 1", dauer: 50 },
                        { name: "Pause", dauer: 90 },
                        { name: "Archer Pushups 2", dauer: 50 },
                        { name: "Pause", dauer: 90 },
                        { name: "Archer Pushups 3", dauer: 50 },
                        { name: "Lange Pause", dauer: 120 },

                        { name: "Pseudo Planche Pushups 1", dauer: 30 },
                        { name: "Pause", dauer: 120 },
                        { name: "Pseudo Planche Pushups 2", dauer: 30 },
                        { name: "Lange Pause", dauer: 150 },

                        { name: "Pike Pushups 1 tF", dauer: 30 },
                        { name: "Pause", dauer: 120 },
                        { name: "Pike Pushups 2 tF", dauer: 30 },
                        { name: "Lange Pause", dauer: 150 },

                        { name: "Pushups 1 tF", dauer: 30 },
                        { name: "Pause", dauer: 120 },
                        { name: "Pushups 2 tF", dauer: 30 },
                    ]
                },
                "pull": {
                    einheiten: [
                        { name: "Aufwärmen", dauer: 360 },

                        { name: "Scapula Shrugs 1", dauer: 60 },
                        { name: "Pause", dauer: 90 },
                        { name: "Scapula Shrugs 2", dauer: 60 },
                        { name: "Lange Pause", dauer: 180 },

                        { name: "Pull-ups 1", dauer: 60 },
                        { name: "Pause", dauer: 90 },
                        { name: "Pull-ups 2", dauer: 60 },
                        { name: "Lange Pause", dauer: 180 },
                        
                        { name: "neg. Pull-ups 1", dauer: 60 },
                        { name: "Pause", dauer: 90 },
                        { name: "neg. Pull-ups 2", dauer: 60 },
                        { name: "Lange Pause", dauer: 180 },

                        { name: "Chin-ups 1 tF", dauer: 60 },
                        { name: "Pause", dauer: 90 },
                        { name: "Chin-ups 2 tF", dauer: 60 },
                        { name: "Pause", dauer: 90 },
                        { name: "Chin-ups 3 tF", dauer: 60 },
                        { name: "Lange Pause", dauer: 180 },

                        { name: "Hammer Curls 1 tF", dauer: 60 },
                        { name: "Pause", dauer: 90 },
                        { name: "Hammer Curls 2 tF", dauer: 60 },
                        { name: "Pause", dauer: 90 },
                        { name: "Hammer Curls 3 tF", dauer: 60 },
                        { name: "Lange Pause", dauer: 180 },

                        { name: "Deadhangs tF", dauer: 30 },
                    ]
                },
                "leg": {
                    einheiten: [
                        { name: "Aufwärmen", dauer: 360 },

                        { name: "Pistol Squats 1", dauer: 60 },
                        { name: "Pause", dauer: 120 },
                        { name: "Pistol Squats 2", dauer: 60 },
                        { name: "Pause", dauer: 120 },
                        { name: "Pistol Squats 3", dauer: 60 },
                        { name: "Pause", dauer: 120 },
                        { name: "Pistol Squats 4", dauer: 60 },
                        { name: "Lange Pause", dauer: 180 },

                        { name: "V-Ups 1", dauer: 40 },
                        { name: "Pause", dauer: 100 },
                        { name: "V-Ups 2", dauer: 40 },
                        { name: "Pause", dauer: 100 },
                        { name: "V-Ups 3", dauer: 40 },
                        { name: "Lange Pause", dauer: 180 },

                        { name: "Weighted-Lunges 1", dauer: 40 },
                        { name: "Pause", dauer: 100 },
                        { name: "Weighted-Lunges 2", dauer: 40 },
                        { name: "Pause", dauer: 100 },
                        { name: "Weighted-Lunges 3", dauer: 40 },
                        { name: "Lange Pause", dauer: 180 },
                        
                        { name: "Tibialis Raises 1", dauer: 40 },
                        { name: "Pause", dauer: 100 },
                        { name: "Tibialis Raises 2", dauer: 40 },
                        { name: "Pause", dauer: 100 },
                        { name: "Tibialis Raises 3", dauer: 40 },
                        { name: "Lange Pause", dauer: 180 },

                        { name: "Calf Raises 1 tF", dauer: 40 },
                        { name: "Pause", dauer: 100 },
                        { name: "Calf Raises 2 tF", dauer: 40 },

                        
                    ]
                }
            }
        },
        "M": {
            workouts: {
                "Dein Workout 🎀": {
                    einheiten: [
                        { name: "Aufwärmen", dauer: 300 },

                        // 1.Runde
                        { name: "Windmills", dauer: 40 }, //Windmills
                        { name: "Pause", dauer: 10 },
                        { name: "Squats", dauer: 40 }, //Squats
                        { name: "Pause", dauer: 10 },
                        { name: "Inchworms", dauer: 40 }, //Inchworms
                        { name: "Pause", dauer: 10 },
                        { name: "Reverse Lunges", dauer: 40 }, //Reverse Lunges
                        { name: "Pause", dauer: 10 },
                        { name: "V-Ups", dauer: 40 }, //V-Ups
                        { name: "Lange Pause", dauer: 60 },

                        // 2.Runde
                        { name: "Windmills", dauer: 40 }, //Windmills
                        { name: "Pause", dauer: 10 },
                        { name: "Squats", dauer: 40 }, //Squats
                        { name: "Pause", dauer: 10 },
                        { name: "Inchworms", dauer: 40 }, //Inchworms
                        { name: "Pause", dauer: 10 },
                        { name: "Reverse Lunges", dauer: 40 }, //Reverse Lunges
                        { name: "Pause", dauer: 10 },
                        { name: "V-Ups", dauer: 40 }, //V-Ups
                        { name: "Lange Pause", dauer: 60 },

                        // 3.Runde
                        { name: "Windmills", dauer: 40 }, //Windmills
                        { name: "Pause", dauer: 10 },
                        { name: "Squats", dauer: 40 }, //Squats
                        { name: "Pause", dauer: 10 },
                        { name: "Inchworms", dauer: 40 }, //Inchworms
                        { name: "Pause", dauer: 10 },
                        { name: "Reverse Lunges", dauer: 40 }, //Reverse Lunges
                        { name: "Pause", dauer: 10 },
                        { name: "V-Ups", dauer: 40 }, //V-Ups
                        { name: "Lange Pause", dauer: 60 },

                        // 4.Runde
                        { name: "Windmills", dauer: 40 }, //Windmills
                        { name: "Pause", dauer: 10 },
                        { name: "Squats", dauer: 40 }, //Squats
                        { name: "Pause", dauer: 10 },
                        { name: "Inchworms", dauer: 40 }, //Inchworms
                        { name: "Pause", dauer: 10 },
                        { name: "Reverse Lunges", dauer: 40 }, //Reverse Lunges
                        { name: "Pause", dauer: 10 },
                        { name: "V-Ups", dauer: 40 }, //V-Ups

                        { name: "Cooldown", dauer: 300 }
                    ]
                },
            }
        }
    }
};

// Globale Variablen
let currentPerson = null;
let currentWorkout = null;
let interval = null;
let isRunning = false;
let currentUnitIndex = 0; // Index der aktuellen Einheit
let timeLeft = 0;
let totalTime = 0;
let phases = [];
let touchStartY = null;
let wakeLock = null;
let isAutoAdvance = false;

// DOM Elemente
const personOverview = document.getElementById('person-overview');
const workoutOverview = document.getElementById('workout-overview');
const workoutGame = document.getElementById('workout-game');
const personButtons = document.getElementById('person-buttons');
const workoutButtons = document.getElementById('workout-buttons');
const selectedPersonSpan = document.getElementById('selected-person');
const selectedWorkoutSpan = document.getElementById('selected-workout');
const timerDisplay = document.getElementById('timer-display');
const progressCircle = document.getElementById('progress-circle');
const toggleBtn = document.getElementById('toggle-btn');
const prevPhaseBtn = document.getElementById('prev-phase-btn');
const nextPhaseBtn = document.getElementById('next-phase-btn');
const phaseNameLabel = document.getElementById('phase-name');
const timerContainer = document.getElementById('timer-container');
const exerciseName = document.getElementById('exercise-name');
const motivationElement = document.getElementById('motivation');
const MOTIVATION_ROTATE_MS = 180000; // 3 Minuten
let motivationIndex = 0;
let motivationInterval = null;

function saveProgress() {
    const progress = {
        currentPerson,
        currentWorkout,
        currentUnitIndex,
        timeLeft,
        isRunning
    };
    localStorage.setItem('workoutProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('workoutProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        currentPerson = progress.currentPerson;
        currentWorkout = progress.currentWorkout;
        currentUnitIndex = progress.currentUnitIndex;
        timeLeft = progress.timeLeft;
        isRunning = progress.isRunning;
    }
}

function init() {
    loadProgress();
    setupEventListeners();
    if (currentPerson && currentWorkout) {
        // Fortfahren
        selectedPersonSpan.textContent = currentPerson;
        selectedWorkoutSpan.textContent = currentWorkout;
        renderWorkoutButtons();
        initProgressBar();
        showTotalTime();
        setUnitDuration();
        updateDisplay();
        updateProgress();
        updateUnitNameLabel();
        updateNavigationButtons();
        startMotivationRotation();
        showView('workout-game');
    } else {
        renderPersonButtons();
        showView('person-overview');
    }
}

function setupEventListeners() {
    document.getElementById('back-to-persons').addEventListener('click', () => {
        renderPersonButtons();
        showView('person-overview');
    });
    document.getElementById('back-to-workouts').addEventListener('click', () => {
        stopTimer();
        localStorage.removeItem('workoutProgress');
        stopMotivationRotation();
        showView('workout-overview');
    });
    toggleBtn.addEventListener('click', toggleStartStop);
    prevPhaseBtn.addEventListener('click', jumpToPreviousPhase);
    nextPhaseBtn.addEventListener('click', jumpToNextPhase);
    timerContainer.addEventListener('wheel', onTimerWheel, { passive: false });
    timerContainer.addEventListener('touchstart', onTimerTouchStart, { passive: false });
    timerContainer.addEventListener('touchmove', onTimerTouchMove, { passive: false });
    timerContainer.addEventListener('touchend', () => touchStartY = null);
}

function renderPersonButtons() {
    personButtons.innerHTML = '';
    Object.keys(data.personen).forEach(person => {
        const btn = document.createElement('button');
        btn.textContent = person;
        btn.addEventListener('click', () => selectPerson(person));
        personButtons.appendChild(btn);
    });
}

function selectPerson(person) {
    currentPerson = person;
    selectedPersonSpan.textContent = person;
    renderWorkoutButtons();
    showView('workout-overview');
}

function renderWorkoutButtons() {
    workoutButtons.innerHTML = '';
    Object.keys(data.personen[currentPerson].workouts).forEach(workout => {
        const btn = document.createElement('button');
        btn.textContent = workout;
        btn.addEventListener('click', () => selectWorkout(workout));
        workoutButtons.appendChild(btn);
    });
}

function selectWorkout(workout) {
    currentWorkout = workout;
    selectedWorkoutSpan.textContent = workout;
    currentUnitIndex = 0;
    initProgressBar();
    setUnitDuration();
    showTotalTime();
    updateDisplay();
    updateProgress();
    updateUnitNameLabel();
    updateNavigationButtons();
    saveProgress();
    startMotivationRotation();
    showView('workout-game');
}



function initProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.innerHTML = '';
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    const totalUnits = einheiten.length;
    for (let i = 0; i < totalUnits; i++) {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        segment.style.width = `${100 / totalUnits}%`;
        segment.style.borderRight = i < totalUnits - 1 ? '1px solid #ccc' : 'none';
        progressBar.appendChild(segment);
    }
    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    progressBar.appendChild(fill);
    updateProgressBar();
}

function updateProgressBar() {
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    const totalUnits = einheiten.length;
    const currentUnit = currentUnitIndex; // 0-based
    const fill = document.querySelector('.progress-fill');
    if (fill) {
        fill.style.width = `${(currentUnit / totalUnits) * 100}%`;
    }
}

function showTotalTime() {
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    const totalSeconds = einheiten.reduce((sum, unit) => sum + unit.dauer, 0);
    document.getElementById('total-time').textContent = `Gesamtzeit: ${formatTime(totalSeconds)}`;
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function showNextMotivation() {
    if (!motivationPhrases || motivationPhrases.length === 0 || !motivationElement) return;
    motivationElement.textContent = motivationPhrases[motivationIndex];
    motivationIndex = (motivationIndex + 1) % motivationPhrases.length;
}

function startMotivationRotation() {
    showNextMotivation();
    stopMotivationRotation();
    motivationInterval = setInterval(showNextMotivation, MOTIVATION_ROTATE_MS);
}

function stopMotivationRotation() {
    if (motivationInterval) {
        clearInterval(motivationInterval);
        motivationInterval = null;
    }
}

function resetWorkout() {
    clearInterval(interval);
    isRunning = false;
    currentPhase = 'warmup';
    cycleCount = 0;
    currentExerciseIndex = 0;
    const workoutData = data.personen[currentPerson].workouts[currentWorkout];
    timeLeft = workoutData.aufwaermzeit;
    totalTime = timeLeft;
    updateDisplay();
    updateProgress();
    updatePhaseNameLabel();
    updateNavigationButtons();
    toggleBtn.textContent = '▶';
    toggleBtn.disabled = false;
}

function toggleStartStop() {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    if (currentUnitIndex >= einheiten.length || timeLeft <= 0) return;
    if (!isRunning) {
        isRunning = true;
        toggleBtn.textContent = '⏸';
        // Wake Lock anfordern
        if ('wakeLock' in navigator) {
            navigator.wakeLock.request('screen').then(lock => {
                wakeLock = lock;
            }).catch(err => {
                console.log('Wake Lock nicht verfügbar:', err);
            });
        }
        interval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            updateProgress();
            if (timeLeft <= 0) {
                playTickSound(true); // Spiele den Ton zuerst
                isAutoAdvance = true;
                nextPhase();
            } else if (timeLeft <= 4) {
                playTickSound(false);
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
    toggleBtn.textContent = '▶';
    // Wake Lock freigeben
    if (wakeLock) {
        wakeLock.release();
        wakeLock = null;
    }
}

function nextPhase() {
    clearInterval(interval);
    isRunning = false;
    toggleBtn.textContent = '▶';
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    if (currentUnitIndex < einheiten.length - 1) {
        currentUnitIndex++;
        setUnitDuration();
        updateDisplay();
        updateProgress();
        updateProgressBar();
        saveProgress();
        if (isAutoAdvance) {
            startTimer();
            isAutoAdvance = false;
        }
    } else {
        // Ende des Workouts - bleibe bei der letzten Einheit
        currentUnitIndex = einheiten.length;
        updateDisplay();
        updateProgress();
        updateUnitNameLabel();
        updateNavigationButtons();
        updateProgressBar();
        saveProgress();
        // Wake Lock freigeben
        if (wakeLock) {
            wakeLock.release();
            wakeLock = null;
        }
        // Optional: Zeige eine Nachricht oder ändere den Namen
        phaseNameLabel.textContent = 'Workout beendet!';
        isAutoAdvance = false;
    }
}

function generatePhases(workoutData) {
    return [];
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
    updateUnitNameLabel();
    updateNavigationButtons();
    saveProgress();
}

function getCurrentUnitName() {
    if (!currentWorkout) return '';
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    if (currentUnitIndex < einheiten.length) {
        return einheiten[currentUnitIndex].name;
    }
    return 'Fertig';
}

function updateUnitNameLabel() {
    phaseNameLabel.textContent = getCurrentUnitName();
}

function getPhaseText() {
    switch (currentPhase) {
        case 'warmup': return 'Aufwärmen';
        case 'workout': return `Workout ${cycleCount}`;
        case 'pause': return 'Pause';
        case 'longpause': return 'Lange Pause';
        default: return '';
    }
}

function updateProgress() {
    const circumference = 2 * Math.PI * 120;
    const offset = (timeLeft / totalTime) * circumference;
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = circumference - offset;
}

// function getNextPhaseText() {
//     switch (currentPhase) {
//         case 'warmup': return 'Workout 1';
//         case 'workout': {
//             const workoutData = data.personen[currentPerson].workouts[currentWorkout];
//             return cycleCount === workoutData.zyklenBisLangePause ? 'Lange Pause' : 'Pause';
//         }
//         case 'pause': return `Workout ${cycleCount + 1}`;
//         case 'longpause': return 'Ende';
//         default: return '-';
//     }
// }

function updatePhaseNameLabel() {
    phaseNameLabel.textContent = getPhaseText();
}

function updateNavigationButtons() {
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    prevPhaseBtn.disabled = currentUnitIndex === 0;
    nextPhaseBtn.disabled = currentUnitIndex >= einheiten.length - 1;
    toggleBtn.disabled = currentUnitIndex >= einheiten.length;
}

function jumpToNextPhase() {
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    if (!currentWorkout || currentUnitIndex >= einheiten.length - 1) return;
    stopTimer();
    currentUnitIndex++;
    setUnitDuration();
    updateDisplay();
    updateProgress();
    updateProgressBar();
    saveProgress();
}

function jumpToPreviousPhase() {
    if (!currentWorkout || currentUnitIndex === 0) return;
    stopTimer();
    currentUnitIndex--;
    setUnitDuration();
    updateDisplay();
    updateProgress();
    updateProgressBar();
    saveProgress();
}

function setUnitDuration() {
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    if (currentUnitIndex < einheiten.length) {
        timeLeft = einheiten[currentUnitIndex].dauer;
    } else {
        timeLeft = 0;
    }
    totalTime = timeLeft || 1;
}

function onTimerWheel(event) {
    event.preventDefault();
    const einheiten = data.personen[currentPerson].workouts[currentWorkout].einheiten;
    if (currentUnitIndex >= einheiten.length) return;
    const delta = Math.sign(event.deltaY) * -1;
    const step = 5;
    adjustTime(delta * step);
}

function onTimerTouchStart(event) {
    if (!event.touches || event.touches.length !== 1) return;
    touchStartY = event.touches[0].clientY;
}

function onTimerTouchMove(event) {
    if (!touchStartY || !event.touches || event.touches.length !== 1) return;
    const currentY = event.touches[0].clientY;
    const delta = touchStartY - currentY;
    if (Math.abs(delta) >= 10) {
        const step = 5 * Math.sign(delta);
        adjustTime(step);
        touchStartY = currentY;
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        event.preventDefault();
    }
}

function adjustTime(seconds) {
    if (!currentWorkout) return;
    timeLeft = Math.min(totalTime, Math.max(0, timeLeft + seconds));
    updateDisplay();
    updateProgress();
}

function playTickSound(isLast) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'sine';
    oscillator.frequency.value = isLast ? 880 : 440;
    gainNode.gain.value = 0.5;
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.12);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Initialisierung
document.addEventListener('DOMContentLoaded', init);