//1. Write a function to download data from a url
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download COmpleted");
            resolve(data);
            resolve("Aman");/**These lines will not be executed*/
            resolve("123");/**As promise is fullfilled only once*/
        }, 5000);
    });
}

//2. Write a funciton to save that downloaded data ina  file and return the filename

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing", data, "in a file");
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully")
            resolve(filename);
        }, 3000);
    });
}

//3.Write a function to upload the file written in previous step to a new url;
function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("upload started on url", url, "filename is", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    });
}

//here everything will work in a flow js will not wait to fetchdata to be resolved and move further
// let data = fetchData("www.datadrive.com");
// let filename = writeFile(data);
// let response = uploadData(filename, "www.drive.google.com");

// the above will not work in required fashion so we


// USE .THEN() function
// let downloadPromise = fetchData("www.datadrive.com");
// downloadPromise
//     .then(function processDownload(value) {
//         console.log("Download promise fullfilled");
//         console.log(value);//dummy data printed
//         let writePromise = writeFile(value);
//         writePromise
//             .then(function processWrite(value) {
//                 console.log("writing of file completed");
//                 console.log(value);
//                 let uploadPromise = uploadData(value, "www.drive.google.com");
//                 uploadPromise
//                     .then(function processUpload(value) {
//                         console.log(value);
//                     })
//             })
//     })

//The above code solves inversion of control but still gets promise hell

let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
    .then(function processDownload(value) {
        console.log("Downloading is done with the following value", value);
        return value;
    })
