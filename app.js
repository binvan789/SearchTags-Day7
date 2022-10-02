var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var tags = ['Nodejs', 'Reactjs']
var btnRemoveAll = document.querySelector('.btn-removeAll')

function render() {
    const htmls = tags.map((tag,index) => {
        return `
        <li>${tag}
            <i class='bx bx-x' onclick="removeTag(${index})"></i>
        </li>
        `
    })
    content.innerHTML = htmls.join('')
    content.appendChild(input)
    input.focus();
}
render()


input.addEventListener('keydown', e=>{
    if (e.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})

function removeTag(index) {
    tags.splice(index, 1)
    render()
}

btnRemoveAll.addEventListener('click', function() {
    tags.splice(0)
    render()
})

