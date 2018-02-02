function setImgPos(img){
    var boxWidth = 400;
    var boxHeight = 400;

    if(img.width < boxWidth)
        img.style.marginLeft = ((boxWidth - img.width) / 2) + 'px';
    if(img.height < boxHeight)
        img.style.marginTop = ((boxHeight - img.height) / 2) + 'px';
}
