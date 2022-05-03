
    
        $(document).ready(function(){
            $('.p1').hover(function(){
                arriba = Math.random()*(200-1) +1;
                abajo = Math.random() * (200-1) +1;
                $(this).css('top', arriba);
                $(this).css('left', abajo);
            });
        });
     function mostrar(){
        document.getElementById('mientes').style.display = 'block';
    }
    function mostrar2(){
        document.getElementById('exacto').style.display = 'block';
    }
    function mostrar3(){
        document.getElementById('soyo').style.display = 'block';
    }
    function mostrar4(){
        document.getElementById('sensillo').style.display = 'block';
    }
    function mostrar5(){
        document.getElementById('amor').style.display = 'block';
    }
    function mostrar6(){
        document.getElementById('final').style.display = 'block';
    }
  