function fetchCustom(url) {//we are just mimicing the function not actually making a function to download it
    // this function is going to download content from the url
    //this downloading can take some time
    //fn will say we will download the content from url,and then whatever will be result , we will pass to the callback
    console.log("starting downloading from", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        console.log(response);
        //What will be the scope of fn here
    }, 3000);
}

let reponse = fetchCustom("www.")