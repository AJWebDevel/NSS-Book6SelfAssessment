
export const letterForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="authorChoice"> Choose an Author </label>
    <select class="authors">
    <option>Choose...</option>
    ${pals.map(
        pal => {
            return `<option value="${pal.id}">${pal.name}</option>`
        }
    ).join("")
        }
    </select>
    </div>

    <div class="field">
    <label class="label" for="authorChoice"> Choose an Author </label>
 
    </select>
    </div>

    <div class="field">
    <label class="label" for="authorChoice"> Choose an Author </label>
    <select class="authors">
    <option>Choose</option>
    ${topics.map(
            topic => {
                return `<option value="${topic.id}">${topic.name}</option>`
            }
        ).join("")
        }
    </select>
    </div>

    <div class="field">
    <label class="label" for="authorChoice"> Choose an Author </label>
    <select class="authors">
    <option>Choose...</option>
    ${pals.map(
            author => {
                return `<option value="${author.id}">${author.name}</option>`
            }
        ).join("")
        }
    </select>
    </div>
    `
}