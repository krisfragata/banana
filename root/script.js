$( document ).ready(function() {

    // const folder = document.querySelector('.folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    let lastClicked;
    // let dragValue;

    // listeners 
    // window.addEventListener('click', console.log('click'));
    promo.addEventListener('click', (e)=>{
        const folder = document.querySelector('#promo-container')
        lastClicked = folder;
        e.preventDefault();
        console.log('promo clicked');
        isItHidden(folder);
    });

    $('#promo-close').click(()=>{
        const close = document.querySelector('#promo-container')
        closeIt(close);
    })

    musicV.addEventListener('click', ()=>{
        const folder = document.querySelector('#mv-popUp');
        lastClicked = folder;
        $('.blueScreen').removeClass('hidden');
        isItHidden(folder);
    })

    $('#mv-close').click(()=>{
        const close = document.querySelector('#mv-popUp');
        $('.blueScreen').addClass('hidden');
        closeIt(close);
    })


    function closeIt(folder){
        console.log('closed clicked');
        isItHidden(folder);
    };
    
    $('.blueScreen').click(()=>{
        const close = document.querySelector('#mv-popUp');
        closeIt(close);
        const closeAgain = document.querySelector('.blueScreen');
        closeIt(closeAgain);
    })
    
    // folder.addEventListener('dragstart', dragStart);
    // folder.addEventListener('dragend', dragEnd);


    function isItHidden(folder){
        console.log('click');
        if(folder.classList.contains('hidden')){
            console.log('is hidden')
            folder.classList.remove('hidden');
        }
        else{
            folder.classList.add('hidden');
            console.log('is not hidden');
        }
    };
    // body.addEventListener('mousedown', drag)  
//    function dragStart(){
//        setTimeout(()=> (this.className="invisible"),0);
//    }
   
//     console.log( "ready!" );

//     function dragEnd(){
        
//     }

//     function move(id){
//         let element = document.getElementById('process-folder');
//         element.style.position = "absolute";
//         element.onmousedown = function(){
//             dragValue = element;
//         }
//     }

//     document.addEventListener('mousemove',
//         function(e){
//             let x = e.pageX;
//             let y = e.pageY;

//             dragValue.style.left = x+"px";
//             dragValue.style.top = y+"px";

//         }    
//     )
    
});

   