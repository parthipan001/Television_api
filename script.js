document.querySelector("button").addEventListener("click",result);

async function result(){
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        var i = 0;
        document.getElementById("boot-card").style.display = "block"
        document.getElementById("myImg").src = res[i].show.image.medium
        document.getElementById('title').innerHTML = res[i].show.name
        document.getElementById("Genre").innerHTML = `Genre: ${res[i].show.genres}`
        document.getElementById("Premiered").innerHTML = `Premiered: ${res[i].show.premiered}`
        document.getElementById("Rating").innerHTML = `Rating: ${res[i].show.rating.average}`
        document.getElementById("Show schedule").innerHTML = `Show schedule: ${res[i].show.schedule.days},${res[i].show.schedule.time}`
        document.getElementById("Official site").innerHTML = `Official site: ${res[i].show.officialSite}`
        document.getElementById("Network").innerHTML = `Network: ${res[i].show.network.name}`
        document.getElementById("Summary").innerHTML = `Summary: ${res[i].show.summary}`

    } catch (error) {
        console.log(error);
    }
}

