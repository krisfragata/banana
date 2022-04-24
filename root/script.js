$( document ).ready(function() {

    // const folder = document.querySelector('.folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    const cursor = document.querySelector('.banana-curse');
    const trails = document.querySelector('.trail')
    let lastClicked;
    // let dragValue;

    // listeners 

    // mouse changed to banana
    document.addEventListener('mousemove',(e)=>{
        console.log('move')
        $('.banana-curse').css({left: e.pageX, top:e.pageY});
        // cursor.style.right = e.pageX 
    })

    // functions and listeners for promo folder
    promo.addEventListener('click', (e)=>{
        const folder = document.querySelector('#promo-container')
        lastClicked = folder;
        e.preventDefault();
        console.log('promo clicked');
        isItHidden(folder);
    });

    $('#promo-close').hover(()=>{
        const link = document.querySelector('#promo-xmark');
        link.classList.remove('hidden');
    }, ()=>{$('#promo-xmark').addClass('hidden')})

    $('#promo-close').click(()=>{
        const close = document.querySelector('#promo-container')
        closeIt(close);
    })

    
// listeners and functions pertaining to the music video folder
    musicV.addEventListener('click', ()=>{
        const folder = document.querySelector('#mv-popUp');
        lastClicked = folder;
        $('.blueScreen').removeClass('hidden');
        isItHidden(folder);
    })

    $('#mv-close').hover(()=>{
        const link = document.querySelector('#mv-xmark');
        link.classList.remove('hidden');
    }, ()=>{$('#mv-xmark').addClass('hidden')})

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

   