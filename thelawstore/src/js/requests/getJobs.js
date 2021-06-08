function GetJobs() {
    const url = "http://localhost:5000/api/jobs";
    //Get data
    return(
        fetch(url)
        .then((response) =>  response.json())
    );
}

export default GetJobs;


