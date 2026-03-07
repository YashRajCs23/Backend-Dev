const fs = require("fs");
const path = require("path");
// directory name
const dirName = path.join(__dirname, "myFolder");
// file paths
const filePath = path.join(dirName, "file.txt");
const renamedFile = path.join(dirName, "newFile.txt");
// 1️⃣ Create Directory
fs.mkdir(dirName, (err) => {
    if (err) {
        console.log("Directory already exists");
    } else {
        console.log("Directory created");
    }

    // 2️⃣ Create File
    fs.writeFile(filePath, "Hello this is my file\n", (err) => {
        if (err) throw err;
        console.log("File created");

        // 3️⃣ Append Data
        fs.appendFile(filePath, "Appending some more text\n", (err) => {
            if (err) throw err;
            console.log("Data appended");

            // 4️⃣ Rename File
            fs.rename(filePath, renamedFile, (err) => {
                if (err) throw err;
                console.log("File renamed");

                // 5️⃣ Delete File
                fs.unlink(renamedFile, (err) => {
                    if (err) throw err;
                    console.log("File deleted");

                    // 6️⃣ Delete Directory
                    fs.rmdir(dirName, (err) => {
                        if (err) throw err;
                        console.log("Directory deleted");
                    });

                });

            });

        });

    });

});