$( document ).ready(function() {

    const process = document.querySelector('#process-folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    let lastClicked;

    // folder dragging variables
    let activeDrag = false;
    let target;
    let xO = 0;
    let yO = 0;
    let x = 0;
    let y = 0;
    let offsetX = 0;
    let offSetY = 0;

    // adding a  time to nav bar
    let today = new Date();
    // let date  = today.getDay();
    document.querySelector('#date-time').innerHTML = today;


    // listeners 

    // mouse changed to banana and all other mouse listeners
    document.addEventListener('mousemove',(e)=>{
        e.preventDefault();
        $('.banana-curse').css({left: e.pageX, top:e.pageY});
        $('.trail').removeClass('hidden');
    })

    $('.folder').hover(()=>{
        $('*').css({cursor: 'pointer'})
        $('.cursor').addClass('hidden');
        // $('.trail').addClass('hidden');
    }, ()=>{
        $('*').css({cursor:'none'})
        $('.cursor').removeClass('hidden');
});

    $('.clickable').hover(()=>{
        $('*').css({cursor: 'pointer'})
        $('.cursor').addClass('hidden');
    }, ()=>{
        $('*').css({cursor:'none'})
        $('.cursor').removeClass('hidden');
    });

    // borders
    $('.eat').click((e)=>{
        checkBorders();
        dragEnd(e);
    })

    process.addEventListener('click',()=>{
        checkBorders();
        areBorders(process);
    })

    promo.addEventListener('click', ()=>{
        checkBorders();
        areBorders(promo);
    })

    musicV.addEventListener('click', ()=>{
        checkBorders();
        areBorders(musicV);
    })

    function checkBorders(){
        let allFolders = [process, promo, musicV];
        for(let i = 0; i<allFolders.length; i++){
            removeBorders(allFolders[i]);
        }
    }

    function areBorders(folder){
        if(!(folder.classList.contains('border'))){
            folder.classList.add('border');
        }
    }

    function removeBorders(folder){
        if(folder.classList.contains('border')){
            folder.classList.remove('border');
        }
    }

    // functions and listeners for process folder
   

    // functions and listeners for promo folder
    promo.addEventListener('dblclick', (e)=>{
        const folder = document.querySelector('#promo-container')
        lastClicked = folder;
        e.preventDefault();
        isItHidden(folder);
        // areBorders
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
    musicV.addEventListener('dblclick', ()=>{
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
        isItHidden(folder);
    };
    
    $('.blueScreen').click(()=>{
        const close = document.querySelector('#mv-popUp');
        closeIt(close);
        const closeAgain = document.querySelector('.blueScreen');
        closeIt(closeAgain);
    })

    // dragging folders
    $('.folder').draggable();



    function isItHidden(folder){
        if(folder.classList.contains('hidden')){
            folder.classList.remove('hidden');
        }
        else{
            folder.classList.add('hidden');
        }
    };

});

   