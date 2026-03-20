const API_KEY = "API_KEY_HERE"; // Replace with your actual API key

async function askAI() {
    const question = document.getElementById("question").value;
    const answerDiv = document.getElementById("answer");
    const answerBox = document.getElementById("answerBox");
    const button = document.getElementById("askBtn");
    
    const buttonIcon = '<i class="fas fa-sparkles mr-2"></i>';
    const spinnerIcon = '<i class="fas fa-circle-notch fa-spin mr-2"></i>';

    if (question.trim() === "") {
        answerBox.classList.remove("hidden");
        answerDiv.innerHTML = '<span class="text-red-500 font-medium">Please enter a question.</span>';
        return;
    }

    button.disabled = true;
    button.innerHTML = `${spinnerIcon} Thinking...`;
    button.classList.add("opacity-75", "cursor-not-allowed");

    answerBox.classList.remove("hidden");
    answerDiv.innerHTML = '<span class="text-indigo-500 font-medium animate-pulse">Generating answer...</span>';

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: question }]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (data.candidates && data.candidates.length > 0) {
            const answer = data.candidates[0].content.parts[0].text;
            answerDiv.innerText = answer;
        } else {
            answerDiv.innerHTML = '<span class="text-red-500 font-medium">Error: No answer returned.</span>';
        }

    } catch (error) {
        answerDiv.innerHTML = '<span class="text-red-500 font-medium">Error getting response. Check your API key and connection.</span>';
    }

    button.disabled = false;
    button.innerHTML = `${buttonIcon} Ask AI`;
    button.classList.remove("opacity-75", "cursor-not-allowed");
}