var selected = null

var onImagesSubmit = (event) => {
    let files = event.target.files
    let preview = document.getElementById('preview')
    let input = document.getElementById('input')
    
    for (let i = 0; i < files.length; i++) {
        let file = files[i]
        console.log(file.name)
        let image = document.createElement('img')
        image.setAttribute('class', 'preview-image')
        image.setAttribute('src', URL.createObjectURL(file))
        image.setAttribute('onclick', "select(this)");
        image.setAttribute("original-class", "preview-image")
        preview.appendChild(image)
    }
    input.value = ''
}

function deselect(element) {
    set_current_image('')
    element.setAttribute("class", element.getAttribute("original-class"))
}

function select(element) {
    if (selected != null) {
        deselect(selected)
    }
    selected = element
   set_current_image(element.src)
    element.setAttribute("class", element.getAttribute("original-class") 
        + " selected")
}

function set_current_image(link){
    let canvas_image = document.getElementById('canvas-image')
    canvas_image.setAttribute('href', link)
}