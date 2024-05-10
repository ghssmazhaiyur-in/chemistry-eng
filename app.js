const quizData = [{
        question: "Bauxite has the composition",
        a: "Al₂O₃",
        b: "Al₂O₃.nH₂O",
        c: "Fe₂O₃.2H₂O",
        d: "None of these",
        correct: "a",
    },
    {
        question: "Roasting of sulphide ore gives the gas (A).(A) is a colourless gas. Aqueous solution of (A is acidic. The gas (A) is",
        a: "CO₂",
        b: "SO₃",
        c: "SO₂",
        d: "H₂S",
        correct: "c",
    },
    {
        question: "Which one of the following reaction represents calcinations?",
        a: "2Zn+O₂→2ZnO",
        b: "2ZnS + 3O₂→2ZnO + 2SO₂",
        c: "MgCO₃→MgO + CO₂",
        d: "Both (a) and (c)",
        correct: "c",
    },
    {
        question: "The metal oxide which cannot be reduced to metal by carbon is",
        a: "PbO",
        b: "Al₂O₃",
        c: "ZnO",
        d: "FeO",
        correct: "b",
    },
    {
        question: "Which of the metal is extracted by Hall-Heroult process?",
        a: "Al",
        b: "Ni",
        c: "Cu",
        d: "Zn",
        correct: "a",
    },
    {
        question: "Which of the following statements, about the advantage of roasting of sulphide ore before reduction is not true?",
        a: "Δ G f 0 of sulphide is greater than those for CS2 and H2S",
        b: "Δ Gr 0 is negative for roasting of sulphide ore to oxide",
        c: "Roasting of the sulphide to its oxide is thermodynamically feasible.",
        d: "Carbon and hydrogen are suitable reducing agents for metal sulphides.",
        correct: "d",
    },
    {
        question: "l1o1.png",
        a: "(a)(i)(ii)(iii)(iv)",
        b: "(b)(iii)(iv)(v)(i)",
        c: "(c)(iv)(ii)(iii)(i)",
        d: "(d)(ii)(iii)(i)(v)",
        correct: "c",
    },
    {
        question: "Wolframite ore is separated from tinstone by the process of",
        a: "Smelting",
        b: "Calcination",
        c: "Roasting",
        d: "Electromagnetic separation",
        correct: "d",
    },
    {
        question: "Which one of the following is not feasible",
        a: "Zn(s) + Cu²⁺ → Cu(s) + Zn²⁺(aq)",
        b: "Cu(s) + Zn²⁺ → Zn(s) + Cu²⁺(aq)",
        c: "Cu(s) + 2Ag⁺ → 2Ag(s) + Cu²⁺(aq)",
        d: "Fe(s) + Cu²⁺ → Cu(s) + Fe²⁺(aq)",
        correct: "b",
    },
    {
        question: "Electrochemical process is used to extract",
        a: "Iron",
        b: "Lead",
        c: "Sodium",
        d: "silver",
        correct: "c",
    },
    {
        question: "Flux is a substance which is used to convert",
        a: "Mineral into silicate",
        b: "Infusible impurities to soluble impurities",
        c: "Soluble impurities to infusible impurities",
        d: "All of these",
        correct: "b",
    },
    {
        question: "Which one of the following ores is best concentrated by froth – floatation method?",
        a: "Magnetite",
        b: "Haematite",
        c: "Galena",
        d: "Cassiterite",
        correct: "c",
    },
    {
        question: "In the extraction of aluminium from alumina by electrolysis, cryolite is added to",
        a: "Lower the melting point of alumina",
        b: "Remove impurities from alumina",
        c: "Decrease the electrical conductivity",
        d: "Increase the rate of reduction",
        correct: "a",
    },
    {
        question: "Zinc is obtained from ZnO by",
        a: "Carbon reduction",
        b: "Reduction using silver",
        c: "Electrochemical process",
        d: "Acid leaching",
        correct: "a",
    },
    {
        question: "Extraction of gold and silver involves leaching with cyanide ion. silver is later recovered by",
        a: "Distillation",
        b: "Zone refining",
        c: "Displacement with zinc",
        d: "liquation",
        correct: "c",
    },
    {
        question: "Considering Ellingham diagram, which of the following metals can be used to reduce alumina?",
        a: "Fe",
        b: "Cu",
        c: "Mg",
        d: "Zn",
        correct: "c",
    },
    {
        question: "The following set of reactions are used in refining Zirconium",
        a: "Liquation",
        b: "Van Arkel process",
        c: "Zone refining",
        d: "Mond’s process",
        correct: "b",
    },
    {
        question: "Which of the following is used for concentrating ore in metallurgy?",
        a: "Leaching",
        b: "Roasting",
        c: "Froth floatation",
        d: "Both (a) and (c)",
        correct: "d",
    },
    {
        question: "The incorrect statement among the following is",
        a: "Nickel is refined by Mond’s process",
        b: "Titanium is refined by Van Arkel’s process",
        c: "Zinc blende is concentrated by froth floatation",
        d: "In the metallurgy of gold, the metal is leached with dilute sodium chloride solution",
        correct: "d",
    },
    {
        question: "In the electrolytic refining of copper, which one of the following is used as anode?",
        a: "Pure copper",
        b: "Impure copper",
        c: "Carbon rod",
        d: "Platinum electrode",
        correct: "b",
    },
    {
        question: "Which of the following plot gives Ellingham diagram",
        a: "Δ S Vs T",
        b: "Δ G⁰ Vs T",
        c: "Δ G⁰ Vs T/2",
        d: "Δ G Vs T²",
        correct: "b",
    },
    {
        question: "In the Ellingham diagram, for the formation of carbon monoxide",
        a: "(∆S⁰/∆T)is negative",
        b: "(∆G⁰/∆T)is positive",
        c: "(∆G⁰/∆T)is negative",
        d: "initially (∆T/∆G⁰) is positive, after 7000C ,(∆G⁰/∆T) is negative",
        correct: "c",
    },
    {
        question: "Which of the following reduction is not thermodynamically feasible?",
        a: "Cr₂O₃ + 2Al → Al₂O₃ + 2Cr",
        b: "Al₂O₃ + 2Cr → Cr₂O₃ + 2Al",
        c: "3TiO₂+ 4Al → 2 Al₂O₃ + 3Ti",
        d: "none of these",
        correct: "b",
    },
    {
        question: "Which of the following is not true with respect to Ellingham diagram?",
        a: "Free energy changes follow a straight line. Deviation occurs when there is a phase change.",
        b: "The graph for the formation of CO2 is a straight line almost parallel to free energy axis.",
        c: "Negative slope of CO shows that it becomes more stable with increase in temperature.",
        d: "Positive slope of metal oxides shows that their stabilities decrease with increase in temperature.",
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
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    if (data.question.includes('.jpg') || data.question.includes('.png') || data.question.includes('.jpeg')) {
        questionBox.innerHTML = `
            <div>
                <img src="${data.question}" alt="Question Image" />
            </div>
        `;
    } else {
        questionBox.innerHTML = `${index + 1}) ${data.question}`;
    }
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
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
            <h2> Total correct ${correct} from ${total} </h2>
            <a align="center" href="./">Home</a>
        </div>
    `
}
loadQuestion(index);
