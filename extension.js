

const interval = setInterval(()=>{
    const header = document.querySelector("._3auIg")
    if(header){
        console.log(header)
        clearInterval(interval)
        const button = document.createElement("button")
        button.innerHTML = "Audio 1.5x"
        button.classList.add("btnSpeed")
        button.addEventListener("click",()=>{
            const audio = document.querySelectorAll("audio")
            audio.forEach((audio)=>{
                audio.playbackRate = 1.5
            })
        })
        header.appendChild(button)
    }
},1000)