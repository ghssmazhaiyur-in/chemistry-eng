const quizData = [{
        question: "Bauxite has the composition",
        a: "Al₂O₃",
        b: "Al₂O₃.nH₂O",
        c: "Fe₂O₃.2H₂O",
        d: "None of these",
        correct: "a",
    },
    {
        question: "q",
        a: "1",
        b: "2",
        c: "1",
        d: "1",
        correct: "a",
    },
    {
        question: "1",
        a: "1",
        b: "1",
        c: "1",
        d: "1",
        correct: "b",
    },
    {
        question: "1",
        a: "1",
        b: "1",
        c: "1",
        d: "1",
        correct: "b",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h2 class="w-100">  ${correct} / ${total} </h2>
        </div>
    `
}
loadQuestion(index);
