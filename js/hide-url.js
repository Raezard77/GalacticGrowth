// DOCs
// You have to write link elements like:- `a(data-href="#" onclick="openURL(this)") Sign Up`
// It also ain visible to "open in new window"


const openURL = linkEle => {
    window.open(linkEle.dataset.href, '_self')
    location.hash = linkEle.dataset.href  // '#' + 
}