$("#dog-btn").click(function(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(request){
            return request.json()
        })
        .then(function(data){
            $("#dog-img").attr("src", data.message)
        })
})

$("#weather-form").submit(function(e){
    e.preventDefault()
    let city = $("#city").val()
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(function(request){
            return request.json()
        })
        .then(function(data){
            console.log(data)
            let dataList = $("#data")
            let description = $("<li>").html(`Description: ${data.description}`)
            let temp = $("<li>").html(`Temperature: ${data.temperature}`)
            let wind = $("<li>").html(`Temperature: ${data.wind}`)
            dataList.append(description)
            dataList.append(temp)
            dataList.append(wind)
        })
})