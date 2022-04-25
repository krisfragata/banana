$( document ).ready(function() {

    // const folder = document.querySelector('.folder');
    const process = document.querySelector('#process-folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    // const cursor = document.querySelector('.banana-curse');
    // const trails = document.querySelector('.trail')
    let lastClicked;
    // let dragValue;

    // listeners 

    // mouse changed to banana and all other mouse listeners
    document.addEventListener('mousemove',(e)=>{
        console.log('move')
        $('.banana-curse').css({left: e.pageX, top:e.pageY});
        $('.trail').removeClass('hidden');
    })

    $('.folder').hover(()=>{
        console.log('hovered folder')
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
    $('.eat').click(()=>{
        checkBorders();
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
        console.log('promo clicked');
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
        console.log('closed clicked');
        isItHidden(folder);
    };
    
    $('.blueScreen').click(()=>{
        const close = document.querySelector('#mv-popUp');
        closeIt(close);
        const closeAgain = document.querySelector('.blueScreen');
        closeIt(closeAgain);
    })

    // dragging folders
    let activeDrag = false;
    let xO;
    let yO;
    let x;
    let y;
    let offsetX = 0;
    let offSetY = 0;

    $('#process-folder').addEventListener('mousedown', dragStart, false);

    function dragStart(e){
        activeDrag = true;
        xO = e.clientX - offsetX;
        yO = e.clientY - offSetY;
    }

    function dragEnd(e){
        xO = x;
        yO = y;
        activeDrag = false;
    }

    function drag(e){
        if(activeDrag){
            e.preventDefault();
            x = e.clientX - xO;
            y = e.clientY - yO;

        }

        offSetX = x;
        offSetY = y;

        moveFolder(x, y, process);
    }

    function moveFolder(xPos, yPos, folder){
        folder.style.transform = "translate3d(" + x + "px," + y + "px, 0)";
    }
    
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

});

   