const imageSelect = document.querySelector('#shape');
const imageDisplay = document.querySelector('#images')

const calButton = document.querySelector('#cal');
const resetButton = document.querySelector('#reset')

const area = document.querySelector('#area');
const perimeter = document.querySelector('#perimeter');
const containner = document.querySelector('#container')




imageSelect.addEventListener('change', function () {
    imageDisplay.src = `images/${this.value}.jpg`
    if (imageSelect.value === 'square') {
        document.querySelector('#change').innerHTML = "s :"
        document.querySelector('#r').placeholder = "Side"
    } else if (imageSelect.value === 'circle') {
        document.querySelector('#change').innerHTML = "r :"
        document.querySelector('#r').placeholder = "Radius"
    }

    reset()
})

function areaCircle(r) {
    let area = Math.PI * r * r;
    return `Area = ${area.toFixed(2)}`

}

function perimeterCircle(r) {
    let perimeter = Math.PI * 2 * r;
    return `Circumference = ${perimeter.toFixed(2)}`
}

function areaSquare(s) {
    let area = s * s;
    return `Area = ${area.toFixed(2)}`
}

function perimeterSquare(s) {
    let perimeter = 4 * s;
    return `Perimeter = ${perimeter.toFixed(2)}`
}



calButton.addEventListener('click', function () {
    const r = document.querySelector('#r')
    if (imageSelect.value === 'circle') {
        let areas = areaCircle(r.value);
        let perimeters = perimeterCircle(r.value)
        area.textContent = areas;
        perimeter.textContent = perimeters;
    } else if (imageSelect.value === 'square') {
        let areas = areaSquare(r.value);
        let perimeters = perimeterSquare(r.value)
        area.textContent = areas;
        perimeter.textContent = perimeters;
    }
})

function reset() {
    area.textContent = "";
    perimeter.textContent = "";
    r.value = "";

}

resetButton.addEventListener('click', reset)