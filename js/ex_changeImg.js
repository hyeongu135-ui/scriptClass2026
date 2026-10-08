let coment_link = document.getElementById('coment-link');
let img_main = document.getElementById('img-main');
let imgss = document.querySelectorAll('.col');
// let color0 = document.getElementsByClassName('col')[0];
// let color1 = document.getElementsByClassName('col')[1];
// let color2 = document.getElementsByClassName('col')[2];



    function detail(){
       document.getElementById('detail_coment').classList.toggle('active');
    }

    for(let i = 0; i < imgss.length; i++){
        imgss[i].addEventListener('mouseenter',()=>{
            let newsrc = imgss[i].getAttribute('src');
            console.log(newsrc)
            img_main.setAttribute('src',newsrc);
        })
        imgss[i].addEventListener('mouseleave',()=>{
            img_main.setAttribute('src','/images/coffee-pink.jpg');
        })
    }


