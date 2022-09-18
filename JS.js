const el = document.querySelector("#text");
const text = "Bruninho"
const interval = 200;

function showText(el, interval) {
    const char = text.split("").reserve();

    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer);
        }
        
        const next = char.pop();

        el.innerHTML += next;

    }, interval);

}

showText(el, interval);