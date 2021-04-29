window.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:8000")
        .then(response => response.json())
        .then(data => {
                const elem = document.querySelector('h1')
                elem.textContent = data.message
            }
        )
})