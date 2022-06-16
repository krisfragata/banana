$( document ).ready(function() {

    // folders
    const process = document.querySelector('#process-folder');
    const promo = document.querySelector('#promo-folder');
    const musicV = document.querySelector('#mv-folder');
    const game = document.querySelector('#game');
    const why = document.querySelector('#why');
    const file = document.querySelector('.file');
    const credit = document.querySelector('#credit');
    const about = document.querySelector('#about');
    const kris = document.querySelector('.kris');

    // nav section
    const pageTitle = document.querySelector('.page-title')

    // canvas elements
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    let mouseDown = false;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;


    // animating intro text
    const introText = document.querySelector('.intro-text');
    const strIntroText = introText.textContent;
    const splitIntroText = strIntroText.split("");

    introText.textContent = "";
    for(let i=0; i<splitIntroText.length; i++){
        introText.innerHTML +="<span class=\"animate\" id=\"introPg\">" + splitIntroText[i] + "</span>";
    }

   
    // text elements for about
    const aboutText = document.querySelector('.about-text')
    const strAboutText = aboutText.textContent;
    const splitAboutText = strAboutText.split("");
    // aboutText.textContent = "";

    const aboutText2 = document.querySelector('.about-text2');
    const strAboutText2 = aboutText2.textContent;
    const splitAboutText2 = strAboutText2.split("");
    let whyClicked = false;

    // animating about text
    aboutText.textContent = "";
    for(let i=0; i<splitAboutText.length; i++){
        aboutText.innerHTML +="<span class=\"animate\" id=\"aboutPg1\">" + splitAboutText[i] + "</span>";
    }

    aboutText2.textContent = "";
    for(let i=0; i<splitAboutText2.length; i++){
        aboutText2.innerHTML +="<span class=\"animate\" id=\"aboutPg2\">" + splitAboutText2[i] + "</span>";
    }



    // text elements for why bananas page
    const whyText = document.querySelector('#why-text');
    const strWhyText = whyText.textContent;
    const splitWhyText = strWhyText.split("");

    const whyText2 = document.querySelector('#why-text2');
    const strWhyText2 = whyText2.textContent;
    const splitWhyText2 = strWhyText2.split("");

    // animating why bananas text
    whyText.textContent = "";
    for(let i=0; i<splitWhyText.length; i++){
        whyText.innerHTML +="<span class=\"animate\" id=\"whyPg\">" + splitWhyText[i] + "</span>";
    }

    whyText2.textContent = "";
    for(let i=0; i<splitWhyText2.length; i++){
        whyText2.innerHTML +="<span class=\"animate\" id=\"whyPg2\">" + splitWhyText2[i] + "</span>";
    }

    
    let char = 0;
    let timer = setInterval(onTick, 16, introText, splitIntroText, "#introPg"); 
    // let timer = setInterval(onTick, 16, aboutText, splitAboutText, "#aboutPg1");
    let intro = true;

    function onTick(text, split, id){
        const span = text.querySelectorAll(id)[char];
        span.classList.add('fade');
        char++;
        if(char === split.length){
            // load++
            clearInterval(timer);
            timer = null;
            if(!$('#arrow').hasClass('hidden')){
                $('#about-close').removeClass('hidden');
            }

            if(!$('#arrow2').hasClass('hidden')){
                $('#why-close').removeClass('hidden');
            }

            // if(!intro){
            //     $('#arrow').removeClass('hidden');
            //     $('#arrow2').removeClass('hidden');
            // }

            if(whyClicked){
                $('#why-close').removeClass('hidden');
            }
 

            return;
        }

    }



    // containers
    const promoContainer = document.querySelector('#promo-container');
    const mvContainer = document.querySelector('#mv-popUp');
    const loadingContainer = document.querySelector('.loading-container')
    const aboutPage = document.querySelector('#about-page');
    const aboutContainer = document.querySelector('#about-container1');
    const aboutContainer2 = document.querySelector('#about-container2')
    const whyContainer = document.querySelector('#why-container');
    const whyContainer2 = document.querySelector('#why-container2');
    const whyPage = document.querySelector('#why-page');
    const introContainer = document.querySelector('#intro-container');
    const krisContainer = document.querySelector('#kris-container');


    window.addEventListener('keydown',(e)=>{
        if(e.code == "Enter"){
            console.log('enter');
            if(intro === true){
                intro = false;
                closeIt(introContainer);
                $('.blueScreen').addClass('hidden');
            }
        }
        
    })

  
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

    // functions and listeners for Kris Fragata title
    kris.addEventListener('click', ()=>{
        $('.blueScreen').removeClass('hidden');
        $('#kris-container').removeClass('hidden');
    })

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
        aboutPage.classList.remove('hidden');
        pageTitle.textContent = "About Banana Split";
        char = 0;
        clearInterval(timer);
        timer = setInterval(onTick, 16, aboutText, splitAboutText, "#aboutPg1"); 

    })

    $('#arrow').click(()=>{
        $('#about-close').removeClass('hidden');
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
        $('#about-close').hover(()=>{
            const link = document.querySelector('#about-close');
            link.classList.add('close-border');
        }, ()=>{$('#about-close').removeClass('close-border')})
    
        $('#about-nav').click(()=>{
            const close = document.querySelector('#about-page');
            $('.blueScreen').addClass('hidden');
            pageTitle.textContent = "";
            closeIt(close);
        })


        // why bananas
    why.addEventListener('dblclick', ()=>{
        $('.blueScreen').removeClass('hidden');
        pageTitle.textContent = "why Bananas??"
        $('#why-page').removeClass('hidden');
        whyClicked = true;
        char = 0;
        clearInterval(timer);
        timer = setInterval(onTick, 15, whyText, splitWhyText, "#whyPg");
    })

    $('#arrow2').click(()=>{
        $('#why-close').removeClass('hidden');
        if(whyContainer2.classList.contains('hidden')){
            whyContainer.classList.add('hidden');
            whyContainer2.classList.remove('hidden');
            char = 0;
            clearInterval(timer);
            timer = setInterval(onTick ,12, whyText2, splitWhyText2, "#whyPg2");

        }
        else{
            whyContainer2.classList.add('hidden');
            whyContainer.classList.remove('hidden');
            char = 0;
            clearInterval(timer);
            timer = setInterval(onTick ,12, whyText, splitWhyText, "#whyPg");
        }
    });

    // listeners for why bananas 
    $('#why-close').hover(()=>{
        const link = document.querySelector('#why-close');
        link.classList.add('close-border');
    }, ()=>{$('#why-close').removeClass('close-border')})

    $('#why-nav').click(()=>{
        const close = document.querySelector('#why-page');
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
        let allFolders = [mvContainer, promoContainer, aboutPage, whyPage, introContainer, krisContainer];
        for(let i = 0; i<allFolders.length; i++){
            if(!allFolders[i].classList.contains('hidden')){
                allFolders[i].classList.add('hidden');
            }
        }

        pageTitle.textContent = "";
        // closeIt(allFolders);
        const closeAgain = document.querySelector('.blueScreen');
        closeIt(closeAgain);
        intro = false;
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

   