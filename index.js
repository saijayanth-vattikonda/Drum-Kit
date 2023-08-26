for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML; 
        makeSound(buttonInnerHTML);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
})
function makeSound(key){
    switch (key)
    {
    case("w"):
        var w = new Audio("crash.mp3");
        w.play();
    break;
    case("a"):
        var a = new Audio("kick-bass.mp3");
        a.play();
    break;
    case("s"):
        var s = new Audio("snare.mp3");
        s.play();
    break;
    case("d"):
        var d = new Audio("tom-1.mp3");
        d.play();
    break;
    case("j"):
        var j = new Audio("tom-2.mp3");
        j.play();
    break;
    
    case("k"):
        var k = new Audio("tom-3.mp3");
        k.play();
    break;
    case("l"):
        var l = new Audio("tom-4.mp3");
        l.play();
    break; 
    default: console.log(key);       
    }
}