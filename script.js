const questions = [
    {
        id: 1,
        text: "Если бы ты прямо сейчас получил эту вещь бесплатно, но не мог бы её продать или обменять — ты бы всё равно её взял?",
        answers: [
            { text: "✅ Да", points: 0 },
            { text: "❌ Нет", points: 1 }
        ]
    },
    {
        id: 2,
        text: "Представь, что прошёл месяц. Где именно будет лежать/висеть эта вещь и как часто ты ей реально пользуешься?",
        answers: [
            { text: "✅ Представил(а) — использование есть", points: 1 },
            { text: "❌ Понял(а), что пользы мало", points: 0 }
        ]
    },
    {
        id: 3,
        text: "Если бы тебе вместо этой вещи дали её цену деньгами — ты бы взял деньги или всё-таки вещь?",
        answers: [
            { text: "✅ Вещь", points: 1 },
            { text: "❌ Деньги", points: 0 }
        ]
    },
    {
        id: 4,
        text: "Это предложение \"ограничено по времени/количеству\"? Если \"да\" — представь, что его сняли с продажи. Ты расстроишься или тебе станет легче?",
        answers: [
            { text: "✅ Расстроюсь, что не успел", points: 0 },
            { text: "❌ Легче, что выбор сделали за меня", points: 1 }
        ]
    },
    {
        id: 5,
        text: "Была ли у тебя похожая вещь? Что с ней стало?",
        answers: [
            { text: "✅ Всё ещё использую", points: 1 },
            { text: "❌ Лежит без дела, быстро надоела", points: 0 }
        ]
    },
    {
        id: 6,
        text: "Если я отложу эту покупку на 48 часов, изменится ли что-то в моей жизни?",
        answers: [
            { text: "✅ Да, критично", points: 1 },
            { text: "❌ Нет, ничего страшного", points: 0 }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

function showScreen(screenId) {
    document.querySelectorAll('.screen-container').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showStartScreen() {
    currentQuestion = 0;
    totalScore = 0;
    showScreen('start-screen');
}

function startQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    showScreen('quiz-screen');
    setTimeout(showQuestion, 100);
}

function showParentsInfo() {
    showScreen('parents-screen');
}

function confirmExit() {
    if (currentQuestion > 0) {
        if (confirm('Вы уверены, что хотите прервать тест? Прогресс будет потерян.')) {
            showStartScreen();
        }
    } else {
        showStartScreen();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progressPercent = document.getElementById('progress-percent');

    progressBar.style.width = progress + '%';
    progressText.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
    progressPercent.textContent = `${Math.round(progress)}% Завершено`;
}

function showQuestion() {
    const question = questions[currentQuestion];
    updateProgress();

    document.getElementById('question-text').textContent = question.text;

    const answersContainer = document.getElementById('answers-container');
    const labels = ['A', 'B', 'C', 'D'];

    answersContainer.innerHTML = question.answers.map((answer, index) => `
        <button onclick="selectAnswer(${index})"
                class="answer-card w-full text-left p-lg glass border border-white/40 rounded-2xl hover:border-primary-container transition-all duration-300 active:scale-[0.98] group flex items-start gap-md ripple hover:shadow-xl hover:-translate-y-1"
                style="animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s forwards; opacity: 0;">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-surface-container to-white group-hover:from-primary-container group-hover:to-primary flex items-center justify-center text-label-md text-on-surface-variant group-hover:text-white font-bold transition-all duration-300 shadow-sm">
                ${labels[index]}
            </div>
            <p class="text-body-md font-body-md text-on-surface flex-1">${answer.text}</p>
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="material-symbols-outlined text-primary">arrow_forward</span>
            </div>
        </button>
    `).join('');
}

function selectAnswer(answerIndex) {
    const question = questions[currentQuestion];
    totalScore += question.answers[answerIndex].points;

    // Add visual feedback
    const buttons = document.querySelectorAll('.answer-card');
    buttons[answerIndex].classList.add('scale-95', 'bg-primary-container/20');

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 300);
}

function showResult() {
    showScreen('result-screen');

    let resultData;

    if (totalScore <= 2) {
        resultData = {
            icon: "⚠️",
            title: "СТОП! ПОКУПКА, ВОЗМОЖНО, НЕ НУЖНА",
            description: "Это похоже на импульсивное решение. Мозг хочет вещь, но реальная потребность отсутствует.",
            tips: [
                "Закрой вкладку и вернись к этой вещи через 48 часов",
                "Добавь товар в «Список желаний» на неделю",
                "Спроси себя ещё раз: «Если бы мне дали эти деньги, что бы я выбрал?»"
            ],
            color: "error",
            bgGradient: "from-red-50 to-orange-50"
        };
    } else if (totalScore <= 4) {
        resultData = {
            icon: "🤔",
            title: "50/50 — ПОДУМАЙ ЕЩЁ",
            description: "В этой покупке есть рациональное зерно, но есть и риски.",
            tips: [
                "Отложи решение на 24 часа",
                "За это время найди 2 альтернативы",
                "Сравни цены в других магазинах"
            ],
            color: "warning",
            bgGradient: "from-yellow-50 to-orange-50"
        };
    } else {
        resultData = {
            icon: "✅",
            title: "ОДОБРЕНО! ЭТО ОСОЗНАННАЯ ПОКУПКА",
            description: "Похоже, ты действительно подумал и тебе ЭТО НУЖНО.",
            tips: [
                "Ещё раз проверь цену в других магазинах",
                "Посмотри, нет ли промокода на скидку",
                "Если сумма крупная — подожди 1 час для уверенности"
            ],
            color: "success",
            bgGradient: "from-green-50 to-teal-50"
        };
    }

    document.getElementById('result-content').innerHTML = `
        <div class="text-center space-y-lg">
            <div class="text-7xl mb-lg bounce-in">${resultData.icon}</div>
            <h2 class="text-headline-lg font-headline-lg text-on-background fade-in-up">${resultData.title}</h2>
            <div class="inline-block px-6 py-3 bg-gradient-to-r ${resultData.bgGradient} rounded-full fade-in-up-delay-1">
                <p class="text-body-lg font-body-lg gradient-text font-bold">Твой результат: ${totalScore} из 6 баллов</p>
            </div>
            <p class="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto fade-in-up-delay-2">${resultData.description}</p>

            <div class="glass border border-white/40 p-lg rounded-3xl shadow-[0_20px_40px_rgba(45,52,54,0.05)] text-left max-w-xl mx-auto fade-in-up-delay-3 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-tertiary-container/20 rounded-full blur-3xl"></div>
                <h3 class="text-headline-md font-headline-md gradient-text mb-md relative z-10">
                    🧠 ${totalScore <= 2 ? 'Что делать?' : totalScore <= 4 ? 'Рекомендация:' : 'Небольшой совет:'}
                </h3>
                <ul class="space-y-sm relative z-10">
                    ${resultData.tips.map((tip, index) => `
                        <li class="flex items-start gap-sm" style="animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + index * 0.1}s forwards; opacity: 0;">
                            <span class="material-symbols-outlined text-primary flex-shrink-0 mt-1">arrow_forward</span>
                            <span class="text-body-md font-body-md text-on-surface-variant">${tip}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="flex flex-col sm:flex-row gap-md justify-center pt-lg" style="animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards; opacity: 0;">
                <button onclick="startQuiz()" class="py-4 px-xl bg-gradient-to-r from-primary-container to-primary text-white rounded-full font-label-md shadow-[0_8px_16px_rgba(0,209,178,0.3)] hover:shadow-[0_12px_24px_rgba(0,209,178,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 ripple">
                    <span class="material-symbols-outlined">refresh</span>
                    Пройти заново
                </button>
                <button onclick="showStartScreen()" class="py-4 px-xl glass border-2 border-primary-container text-primary rounded-full font-label-md hover:bg-white/80 active:scale-95 transition-all flex items-center justify-center gap-2 ripple">
                    <span class="material-symbols-outlined">home</span>
                    На главную
                </button>
            </div>
        </div>
    `;
}
