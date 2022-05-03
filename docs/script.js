$( document ).ready(function() {

    // folders
    const process = document.querySelector('#process-folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    const about = document.querySelector('#about');
    const game = document.querySelector('#game');
    const why = document.querySelector('#why');

    // canvas elements
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    let mouseDown = false;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    // background image fills canvas
    let background = new Image();
    background.src = 'assets/banana split site background.png';
    background.onload = ()=>{
        let banana = context.createPattern(image, 'repeat');
        context.fillStyle = banana;
        context.fill();
    };

    // containers
    const promoContainer = document.querySelector('#promo-container');
    const mvContainer = document.querySelector('#mv-popUp');

  
    // adding a  time to nav bar
    let today = new Date();
    // let date  = today.getDay();
    document.querySelector('#date-time').innerHTML = today;


    // listeners 

    // canvas listeners
    window.addEventListener('mousedown', (e)=>{
        mouseDown = true;
        let mousePos = getMousePos(canvas, e);
        draw(canvas, mousePos[0], mousePos[1])
        clearCanvas();
    });
    window.addEventListener('mouseup',()=>{
        mouseDown = false;
    });
    window.addEventListener('mousemove',
    function(e){
        if(mouseDown){
            let mousePos = getMousePos(canvas, e);
            let x = mousePos.x;
            let y = mousePos.y;
            draw(canvas, x, y);
        }
        else{
            return;
        }
       
    }
    );
    

    function down(){
        mouseDown = true;
    }

    function toggledraw(){
        mouseDown = true;
    }

    function getMousePos(canvas, e){
        let space = canvas.getBoundingClientRect();
        return{
            x: e.clientX - space.left,
            y: e.clientY - space.top
        }

    }

    function draw(canvas, x, y){
        if(mouseDown){
            context.fillStyle = 'rgba(187,46,29, 0.6)';
            context.beginPath();
            context.arc(x, y, 30, 0, 2*Math.PI);
            context.fillStyle = 'rgba(187, 46, 29, 0.6)';
            context.fill();
        }
    }

    function fadeOut(){
        context.fillStyle = 'rgba(187, 46, 29, 0.1)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        setTimeout(fadeOut, 125);
    }

    function clearCanvas(){
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // fadeOut();

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
    $('#canvas').click((e)=>{
        checkBorders();
        // dragEnd(e);
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

    about.addEventListener('click', ()=>{
        checkBorders();
        areBorders(about);
    })

    game.addEventListener('click', ()=>{
        checkBorders();
        areBorders(game);
    })

    why.addEventListener('click', ()=>{
        checkBorders();
        areBorders(why);
    })


    // check borders
    function checkBorders(){
        let allFolders = [process, promo, musicV, about, game, why];
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
        $('.blueScreen').removeClass('hidden');
        isItHidden(folder);
        // areBorders
    });

    $('#promo-close').hover(()=>{
        const link = document.querySelector('#promo-xmark');
        link.classList.remove('hidden');
    }, ()=>{$('#promo-xmark').addClass('hidden')})

    $('#promo-close').click(()=>{
        const close = document.querySelector('#promo-container');
        $('.blueScreen').addClass('hidden');
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

    // listeners and functions for about folder
    about.addEventListener('dblclick',()=>{
        // const folder = document.querySelector();
        $('.blueScreen').removeClass('hidden');
    })

 


    function closeIt(folder){
        isItHidden(folder);
    };
    
    $('.blueScreen').click(()=>{
        let allFolders = [mvContainer, promoContainer];
        for(let i = 0; i<allFolders.length; i++){
            if(!allFolders[i].classList.contains('hidden')){
                allFolders[i].classList.add('hidden');
            }
        }

        // closeIt(allFolders);
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

    // function isFolderOpen(folder){

    // }

});

   