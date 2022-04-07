//projects/index

const bgColors=['bg-primary','bg-success','bg-danger','bg-warning','bg-info','bg-dark']

$('.project-bg-color').each(function(index){
    let bgColor=bgColors[index % bgColors.length]
    $(this).addClass(bgColor)
})

let usersList = new List('projects-container', {
    valueNames: ['title', 'description'],
    listClass: "list-js-list",
    //page: 8,
    //pagination: {
    //    item: "<li class='page-item'><a class='page page-link' href='javascript: void(0)'></a></li>",
    //},
    sortable: true
});

document.querySelectorAll(".show-on-load").forEach(item => {
    item.style.display = "flex";
})

document.querySelectorAll(".hide-on-load").forEach(item => {
    item.style.display = "none";
})