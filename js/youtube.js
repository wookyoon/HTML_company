/*
key = AIzaSyDMHzLOBfmsqKxx8bC5aLbEIeA985Arf-A
*/

const vidList = document.querySelector(".vidList");
const key = "AIzaSyDMHzLOBfmsqKxx8bC5aLbEIeA985Arf-A";
const playlistId = "PLICf7Erquw0hHp1x3VZAJtKAHr9bH8x1e";
const num = 9;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

fetch(url)
.then(data=>{
    return data.json();
})
.then(json=>{
    let items = json.items;
    console.log(items);
    let result = '';

    items.map(item=>{

        let title = item.snippet.title;
        //타이틀에서 특정갯수만큼 문자열을 잘라서 나머지 위에는 ". . ."을 붙여준다. 30글자.
        //문자열.substr(start, length) 특정문자에서 특정시작부분부터 특정갯수만큼 문자열을 자름. 
        if(title.length > 30){
            title = title.substr(0, 30)+"...";
        }
        

        result += `<article>
            <a href="${item.snippet.resourceId.videoId}" class="pic">
                <img src="${item.snippet.thumbnails.medium.url}">
            </a>
            <div class="con">
                <h2>${title}</h2>
            </div>
        </article>`;
    })
    vidList.innerHTML = result;
})

vidList.addEventListener("click",(e)=>{
    e.preventDefault();

    //클릭한 요소의 부모태그가 a요소가 아니라면 멈춤, 중지
    if(!e.target.closest("a")) return;

    const vidId = e.target.closest("a").getAttribute("href");

    let pop = document.createElement("figure");
    pop.classList.add("pop");
    pop.innerHTML =`
            <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%"></iframe>
            <span class="btnClose">CLOSE</span>
    
    `;

    vidList.append(pop);
});

vidList.addEventListener("click",(e)=>{
    const pop = vidList.querySelector(".pop");
    if(pop){
        const close = pop.querySelector("span");
        if(e.target == close) pop.remove();
    }
})