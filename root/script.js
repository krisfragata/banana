$( document ).ready(function() {

    const folder = document.querySelector('.folder');
    let dragValue;

    // listeners 
    window.addEventListener('load', move);
    
    folder.addEventListener('dragstart', dragStart);
    folder.addEventListener('dragend', dragEnd);

    // body.addEventListener('mousedown', drag)  
   function dragStart(){
       setTimeout(()=> (this.className="invisible"),0);
   }
   
    console.log( "ready!" );

    function dragEnd(){
        
    }

    function move(id){
        let element = document.getElementById('process-folder');
        element.style.position = "absolute";
        element.onmousedown = function(){
            dragValue = element;
        }
    }

    document.addEventListener('mousemove',
        function(e){
            let x = e.pageX;
            let y = e.pageY;

            dragValue.style.left = x+"px";
            dragValue.style.top = y+"px";

        }    
    )
    
});

   