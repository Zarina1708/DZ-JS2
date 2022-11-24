// const request = new XMLHttpRequest;
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
// request.setRequestHeader("Content-type", "application/json");
// request.send();
// request.addEventListener("load", () => {
//     console.log(JSON.parse(request.response));
// });


const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const rub = document.querySelector("#rub")
        
    
const convert = (elem, elem2, elem3) => {


    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)

            switch (elem) {
                case som:

                    elem2.value = (elem.value / response.usd).toFixed(2)
                    elem3.value = (elem.value / response.rub).toFixed(2)
                    break;
                case usd:
                    elem2.value = (elem.value * response.usd).toFixed(2)
                    elem3.value = ((elem.value * response.usd) / response.rub).toFixed(2)
                    break;
                case rub:
                    elem2.value = (elem.value * response.rub).toFixed(2)
                    elem3.value = ((elem.value * response.rub) / response.usd).toFixed(2)
                    break;
            }
            if (elem.value === "") {
                elem2.value = ""
                elem3.value = ""
            }

        })
    })
}
convert(som, usd, rub)
convert(usd, som, rub)
convert(euro, som, rub)
