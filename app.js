
let button = document.getElementById('submit');
const container = document.getElementById('container');
let name = "";
let p;

button.onclick = () => {
    name = document.getElementById('input').value;
    if (name !== "") {
        if (!p) {
            p = document.createElement('p');
            container.appendChild(p);
        }
        p.textContent = "Hello " + name ;
    } else {
        if (p) {
            container.removeChild(p);
            p = null;
        }
    }
};
