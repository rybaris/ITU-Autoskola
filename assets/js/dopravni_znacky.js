fetch("../assets/js/data.json")
    .then(res => res.json())
    .then(data => console.log(data))