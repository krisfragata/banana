$( document ).ready(function() {

    // folders
    const process = document.querySelector('#process-folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    const game = document.querySelector('#game');
    const why = document.querySelector('#why');
    const file = document.querySelector('.file');
    const credit = document.querySelector('#credit');
    const about = document.querySelector('#about')

    // nav section
    const pageTitle = document.querySelector('.page-title')

    // canvas elements
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    let mouseDown = false;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
   
    // text elements for about
    const aboutText = document.querySelector('.about-text')
    const strAboutText = aboutText.textContent;
    const splitAboutText = strAboutText.split("");
    // aboutText.textContent = "";

    const aboutText2 = document.querySelector('.about-text2');
    const strAboutText2 = aboutText2.textContent;
    const splitAboutText2 = strAboutText2.split("");
    
    // animating about text
    aboutText.textContent = "";
    for(let i=0; i<splitAboutText.length; i++){
        aboutText.innerHTML +="<span class=\"animate\" id=\"aboutPg1\">" + splitAboutText[i] + "</span>"
    }

    aboutText2.textContent = "";
    for(let i=0; i<splitAboutText2.length; i++){
        aboutText2.innerHTML +="<span class=\"animate\" id=\"aboutPg2\">" + splitAboutText2[i] + "</span>"
    }
    // let charSave1 = 0;
    // let charSave2 = 0;
    let char = 0;
    let timer = setInterval(onTick, 17, aboutText, splitAboutText, "#aboutPg1"); 

    function onTick(text, split, id){
        const span = text.querySelectorAll(id)[char];
        span.classList.add('fade');
        char++;
        if(char === split.length){
            // load++
            clearInterval(timer);
            timer = null;
            return;
        }
    }



    // containers
    const promoContainer = document.querySelector('#promo-container');
    const mvContainer = document.querySelector('#mv-popUp');
    const loadingContainer = document.querySelector('.loading-container')
    const aboutContainer = document.querySelector('#about-container1');
    const aboutContainer2 = document.querySelector('#about-container2')

  
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

    $('.player').hover(()=>{
        $('*').css({cursor: 'pointer'});
        $('.cursor').addClass('hidden');
    }, ()=>{
        $('*').css({cursor:'none'})
        $('.cursor').removeClass('hidden');
    })

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

    credit.addEventListener('click', ()=>{
        checkBorders();
        areBorders(credit);
    })

    $('.file').click(()=>{
        checkBorders();
        areBorders(file);
    })


    // check borders
    function checkBorders(){
        let allFolders = [process, promo, musicV, about, game, why, credit];
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
        pageTitle.textContent = "iterations";
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
        pageTitle.textContent = "";
    })

    
// listeners and functions pertaining to the music video folder
    musicV.addEventListener('dblclick', ()=>{
        const folder = document.querySelector('#mv-popUp');
        lastClicked = folder;
        $('.blueScreen').removeClass('hidden');
        pageTitle.textContent = "Music Video"
        isItHidden(folder);
    })

    $('#mv-close').hover(()=>{
        const link = document.querySelector('#mv-xmark');
        link.classList.remove('hidden');
    }, ()=>{$('#mv-xmark').addClass('hidden')})

    $('#mv-close').click(()=>{
        const close = document.querySelector('#mv-popUp');
        $('.blueScreen').addClass('hidden');
        pageTitle.textContent = "";
        closeIt(close);
    })

    // listeners and functions pertaining to game function
    game.addEventListener('dblclick', ()=>{
        const folder = document.querySelector('#mv-popUp');
        pageTitle.textContent = "Banana Split Game";
        $('.blueScreen').removeClass('hidden');
        isItHidden(folder);
    })


    // listeners and functions for about folder
    about.addEventListener('dblclick',()=>{
        // const folder = document.querySelector();
        $('.blueScreen').removeClass('hidden');
        loadingContainer.classList.remove('hidden');
        pageTitle.textContent = "About Banana Split";
    })

    $('#arrow').click(()=>{
        if(aboutContainer2.classList.contains('hidden')){
            aboutContainer.classList.add('hidden');
            aboutContainer2.classList.remove('hidden');
            char = 0;
            clearInterval(timer);
            timer = setInterval(onTick ,12, aboutText2, splitAboutText2, "#aboutPg2");

        }
        else{
            aboutContainer2.classList.add('hidden');
            aboutContainer.classList.remove('hidden');
            char = 0;
            clearInterval(timer);
            timer = setInterval(onTick ,12, aboutText, splitAboutText, "#aboutPg1");
        }
    });

        // listeners for about 
        $('#text-close').hover(()=>{
            const link = document.querySelector('#about-xmark');
            link.classList.remove('hidden');
        }, ()=>{$('#about-xmark').addClass('hidden')})
    
        $('#text-close').click(()=>{
            const close = document.querySelector('.loading-container');
            $('.blueScreen').addClass('hidden');
            pageTitle.textContent = "";
            closeIt(close);
        })


    // listeners and functions for music player
    $('#player-close').hover(()=>{
        const link = document.querySelector('#player-xmark');
        link.classList.remove('hidden');
    }, ()=>{$('#player-xmark').addClass('hidden')})

    $('#player-close').click(()=>{
        const close = document.querySelector('.player');
        $('.blueScreen').addClass('hidden');
        closeIt(close);
    })

 


    function closeIt(folder){
        isItHidden(folder);
    };
    
    $('.blueScreen').click(()=>{
        let allFolders = [mvContainer, promoContainer, loadingContainer];
        for(let i = 0; i<allFolders.length; i++){
            if(!allFolders[i].classList.contains('hidden')){
                allFolders[i].classList.add('hidden');
            }
        }

        pageTitle.textContent = "";
        // closeIt(allFolders);
        const closeAgain = document.querySelector('.blueScreen');
        closeIt(closeAgain);
    })

    // dragging items
    $('.folder').draggable();
    $('.player').draggable();
    



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

   