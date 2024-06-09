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
        document.getElementById("Genre").innerHTML = `<b>Genre</b>: ${res[i].show.genres}`
        document.getElementById("Premiered").innerHTML = `<b>Premiered</b>: ${res[i].show.premiered}`
        document.getElementById("Rating").innerHTML = `<b>Rating</b>: ${res[i].show.rating.average}`
        document.getElementById("Show schedule").innerHTML = `<b>Show schedule</b>: ${res[i].show.schedule.days},${res[i].show.schedule.time}`
        document.getElementById("Official site").innerHTML = `<b>Official site</b>: ${res[i].show.officialSite}`
        document.getElementById("Network").innerHTML = `<b>Network</b>: ${res[i].show.network.name}`
        document.getElementById("Summary").innerHTML = `<b>Summary</b>: ${res[i].show.summary}`

    } catch (error) {
        console.log(error);
    }
}

