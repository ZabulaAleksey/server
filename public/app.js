const path = require("path");

const rootURL = path.resolve("D:/2025");

function loadFiles(filePath) {
    const urlPath = path.join()
    const res = fetch(urlPath);
    const files = res.json();

    const ul = document.getElementById("list");
    ul.innerHTML = "";

    for (const file of files) {
        const li = document.createElement("li");
        li.textContent = file.name;
        ul.appendChild(li);
    }
}

// Пробую вставить хтмл в выдачу

loadFiles();
