$( document ).ready(function() {

    // folders
    const process = document.querySelector('#process-folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    const about = document.querySelector('#about');
    const game = document.querySelector('#game');
    const why = document.querySelector('#why');
    const canvas = document.querySelector('#canvas')
    let mouseDown = false;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // containers
    const promoContainer = document.querySelector('#promo-container');
    const mvContainer = document.querySelector('#mv-popUp');

  
    // adding a  time to nav bar
    let today = new Date();
    // let date  = today.getDay();
    document.querySelector('#date-time').innerHTML = today;


    // listeners 

    // canvas listeners
    window.addEventListener('mousedown', down);

    function down(){
        mouseDown = true;
    }

    function toggledraw(){
        mouseDown = true;
    }


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

    // text animations
    // let tl = gsap.timeline(), 

    // split = new SplitText("#quote", {type:"words,chars"}), 

    // words = split.words; //an array of all the divs that wrap each character

    // gsap.set(".about", {perspective: 400});

    // tl.to(words, {
    //   duration: 1.5,
    //   "--weight": "300",
    //   ease: "none",
    //   color: "hsl(+=0, +=70%, +=20%)",
    //   stagger: {
    //     each: 0.4,
    //   }
    // })


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

   