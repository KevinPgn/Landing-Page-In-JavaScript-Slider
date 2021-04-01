const container = document.querySelector('.container');
const content = document.querySelectorAll('.content');
const choice = document.querySelectorAll('.thumb');
let inde = 0;


choice.forEach(item => {

    item.addEventListener('click', () => {

        inde = item.getAttribute('data-id')

        for (let i = 0; i < choice.length; i++) {
            if (choice[i].getAttribute('data-id') != inde){
                choice[i].classList.remove('active')
            }
        }


        for (let j = 0; j < content.length; j++) {
            if (content[j].getAttribute('data-id') == inde){
                content[j].classList.add('active')
            } else {
                content[j].classList.remove('active')
            }
        }


        if (inde === "1"){
            document.body.style.background = '#11552c'
        } else if (inde === "2"){
            document.body.style.background = '#E471F6'
        } else if (inde === '3'){
            document.body.style.background = '#771DE2'
        }
    })

})