import { fetchPals } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPals()
        .then(() => fetchTopics())
        .then(() => fetchSentLetters())
        .then(
            () => {
                mainContainer.innerHTML = penpals()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)