const express = require("express");
const os = require("os");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const hostname = "0.0.0.0";
const port = 3000;

const interfaces = os.networkInterfaces();

const root = path.resolve("D:/2025");

app.get(/.*/, async (req, res) => {
    try {
        const urlPath = req.path;
        console.log("REQ PATH:", req.path);
        const filePath = path.join(root, urlPath);
        console.log(filePath);
        const data = await fs.readdir(filePath, "utf8");
        res.send(data);
        // const list = document.getElementById("list")

        // data = entries.json();

        // data.forEach(file => {
        //     const div = document.createElement("div");
        //     div.className = "list-group-item";

        //     let icon = "bi-file-earmark";

        //     if (file.type === "dir") icon = "bi-folder";
        //     if (file.type === ".mp3") icon = "bi-music-note";
        //     if (file.type === ".mp4") icon = "bi-film";

        //     div.innerHTML = `<i class = "bi ${icon}"></i> ${file.name}`
        //     list.appendChild(div);
        // });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

app.use(express.static("public"));

app.listen(port, hostname, () => {
    console.log(`local IP: http://${interfaces.Ethernet[1].address}:${port}`);
});