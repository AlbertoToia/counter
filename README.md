## About The Project
> Il progetto è stato creato per il 99% usando JavaScript.

- index.html è vuoto.
- style.css contiene solo modifiche al body e agli hover, oltre che il reset di padding e margin e il font.
- app.js è usato per tutto il resto.

### I passi che ho seguito
1. Creazione, inserimento classi (quando necessario) e inserimento dei div.

2. Creazione e chiamata della funzione per lo stile dei div più interni.
    > function setStyle (element, b, w = 90, h = 70) { ... }

3. Creazione e chiamata della funzione per lo stile dei bordi.
    > function setBorder (element, position) { ... }

4. Evento per click sui div
    > plusDiv.addEventListener("click", (event) => { ... }
    > minusDiv.addEventListener("click", (event) => { .. }

5. **EXTRA** Evento per tasti + e - della tastiera.
    > addEventListener("keydown", (event) => { ... }