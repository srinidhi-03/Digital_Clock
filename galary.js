function galary()
{
    var photos=document.images;
    for(i=0;i<=9;i++)
    {
        photos[i].src=`${i}.jpg`
        console.log(photos[i])
    }
}
function gal(loc)
{
    document.getElementById("bigImage").style.backgroundImage=`url(${loc})`
}

