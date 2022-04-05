const bgColors=['bg-primary','bg-success','bg-danger','bg-warning','bg-info','bg-dark']

$('.project-bg-color').each(function(index){
    let bgColor=bgColors[index % bgColors.length]
    $(this).addClass(bgColor)
})