
import { letterForm } from "./letterForm.js"

export const penpals = () => {
    return `
    <h1>Pen Pal Letter Service</h1>
    <section class="letterForm">
    ${letterForm()}
    </section>

    `}