const quizData = [{
        question: "An aqueous solution of borax is",
        a: "neutral",
        b: "acidic",
        c: "basic",
        d: "amphoteric",
        correct: "c",
    },
    {
        question: "Boric acid is an acid because its molecule",
        a: "contains replaceable H+ ion",
        b: "gives up a proton",
        c: "combines with proton to form water molecule",
        d: "accepts OH- from water ,releasing proton.",
        correct: "d",
    },
    {
        question: "Which among the following is not a borane?",
        a: "B₂H₆",
        b: "B₃H₆",
        c: "B₄H₁₀",
        d: "none of these",
        correct: "b",
    },
    {
        question: "Which of the following metals has the largest abundance in the earth’s crust?",
        a: "Aluminium",
        b: "Calcium",
        c: "Magnesium",
        d: "Sodium",
        correct: "a",
    },
    {
        question: "In diborane, the number of electrons that accounts for banana bonds is",
        a: "six",
        b: "two",
        c: "four",
        d: "three",
        correct: "c",
    },
    {
        question: "The element that does not show catenation among the following p-block elements is",
        a: "Carbon",
        b: "silicon",
        c: "Lead",
        d: "germanium",
        correct: "c",
    },
    {
        question: "Carbon atoms in fullerene with formula C₆₀ have",
        a: "sp³ hybridised",
        b: "sp hybridised",
        c: "sp² hybridised",
        d: "partially sp² and partially sp³ hybridised",
        correct: "c",
    },
    {
        question: "Oxidation state of carbon in its hydrides",
        a: "+4",
        b: "-4",
        c: "+3",
        d: "+2",
        correct: "a",
    },
    {
        question: "The basic structural unit of silicates is",
        a: "(SiO₃)²⁻",
        b: "(SiO₃)²⁻",
        c: "(SiO)⁻",
        d: "(SiO₄)⁴⁻",
        correct: "d",
    },
    {
        question: "The repeating unit in silicone is",
        a: "SiO₂",
        b: "l1c1.png",
        c: "l2o2.png",
        d: "l2o3.png",
        correct: "b",
    },
    {
        question: "Which of these is not a monomer for a high molecular mass silicone polymer?",
        a: "Me₃SiCl",
        b: "PhSiCl₃",
        c: "MeSiCl₃",
        d: "Me₂SiCl₂",
        correct: "a",
    },
    {
        question: "Which of the following is not sp² hybridised?",
        a: "Graphite",
        b: "graphene",
        c: "Fullerene",
        d: "dry ice",
        correct: "d",
    },
    {
        question: "The geometry at which carbon atom in diamond are bonded to each other is",
        a: "Tetrahedral",
        b: "hexagonal",
        c: "Octahedral",
        d: "none of these",
        correct: "a",
    },
    {
        question: "Which of the following statements is not correct?",
        a: "Beryl is a cyclic silicate",
        b: "Mg₂SiO₄ is an orthosilicate",
        c: "SiO₄⁴⁻ is the basic structural unit of silicates",
        d: "Feldspar is not aluminosilicate",
        correct: "4",
    },
    {
        question: "l2q1.png",
        a: "2 1 4 3",
        b: "1 2 4 3",
        c: "1 2 4 3",
        d: "None of these",
        correct: "a",
    },
    {
        question: "Duralumin is an alloy of",
        a: "Cu,Mn",
        b: "Cu,Al,Mg",
        c: "Al,Mn",
        d: "Al,Cu,Mn,Mg",
        correct: "d",
    },
    {
        question: "The compound that is used in nuclear reactors as protective shields and control rods is",
        a: "Metal borides",
        b: "metal oxides",
        c: "Metal carbonates",
        d: "metal carbide",
        correct: "a",
    },
    {
        question: "The stability of +1 oxidation state increases in the sequence",
        a: "Al < Ga < In < Tl",
        b: "Tl < In < Ga < Al",
        c: "In < Tl < Ga < Al",
        d: "Ga< In < Al < Tl",
        correct: "a",
    },


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

    // Handling options
    if (data.a.includes('.jpg') || data.a.includes('.png') || data.a.includes('.jpeg')) {
        allInputs[0].nextElementSibling.innerHTML = `<img src="${data.a}" alt="Option A" />`;
    } else {
        allInputs[0].nextElementSibling.innerText = data.a;
    }

    if (data.b.includes('.jpg') || data.b.includes('.png') || data.b.includes('.jpeg')) {
        allInputs[1].nextElementSibling.innerHTML = `<img src="${data.b}" alt="Option B" />`;
    } else {
        allInputs[1].nextElementSibling.innerText = data.b;
    }

    if (data.c.includes('.jpg') || data.c.includes('.png') || data.c.includes('.jpeg')) {
        allInputs[2].nextElementSibling.innerHTML = `<img src="${data.c}" alt="Option C" />`;
    } else {
        allInputs[2].nextElementSibling.innerText = data.c;
    }

    if (data.d.includes('.jpg') || data.d.includes('.png') || data.d.includes('.jpeg')) {
        allInputs[3].nextElementSibling.innerHTML = `<img src="${data.d}" alt="Option D" />`;
    } else {
        allInputs[3].nextElementSibling.innerText = data.d;
    }

    // Add event listeners to option labels
    const optionLabels = document.querySelectorAll('.options label');
    optionLabels.forEach((label, i) => {
        label.addEventListener('click', () => {
            allInputs[i].checked = true;
        });
    });
};


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
