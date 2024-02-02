const fs = require('fs');

function writeToFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content);
        console.log("Data written to " + filePath.split("/").pop());
    } catch (error) {
        console.error("Error writing to file:", error.message);
    }
}

writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...
