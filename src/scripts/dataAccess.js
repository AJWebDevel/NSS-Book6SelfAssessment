const applicationState = {
    pals: [],
    topics: [],
    sentLetters: []

}

const API = "https://localhost:8088"

//fetch functions to get data from api
export const fetchPals = () => {
    return fetch(`${API}/pals`)
        .then(response => response.json())
        .then(
            (allPals) => {
                //store external state in application state
                applicationState.pals = allPals
            }
        )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (allTopics) => {
                //store external state in application state
                applicationState.topics = allTopics
            }
        )
}
export const fetchSentLetters = () => {
    return fetch(`${API}/sentLetters`)
        .then(response => response.json())
        .then(
            (letters) => {
                //store external state in application state
                applicationState.sentLetters = letters
            }
        )
}