var xhr = new XMLHttpRequest();
xhr.open("GET","./text.txt");
// xhr.open("GET","./abc.txt");
xhr.send(""); //? post request
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
       console.log(xhr);
       //? responseText || responseXML
       document.querySelector(".data").innerHTML = "<h1>" + xhr.responseText
    }else{
        console.log("error")
    }
}
xhr.close()
