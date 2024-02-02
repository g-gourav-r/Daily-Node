const fs = require('fs').promises;
/*
Asynchronously reads the content of a file specified by the provided file path using the Node.js 'fs' module.
I take a file path as input, read the content, and print it to the console. If the file does not exist or any other 
error occurs during the reading process, I display appropriate error messages. 
I utilize Promises for asynchronous file reading and handle common file-related errors.
*/
async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log('File Content:');
        console.log(content);
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}

readFileContent('test-files/file1.txt');

readFileContent('test-files/empty-file.txt');

readFileContent('test-files/nonexistent-file.txt');