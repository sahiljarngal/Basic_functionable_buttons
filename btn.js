// 'use strict';
let nobita=document.querySelector('.nobita');
let doremon=document.querySelector('.doremon');
let shizuka=document.querySelector('.Shizuka');
let button=document.querySelectorAll('.btn');
console.log(button);
for (let  i=0;i<button.length;i++){
  if(i==0){button[i].addEventListener('click', function(){
    nobita.classList.remove('hidden');
    doremon.classList.add('hidden');
    shizuka.classList.add('hidden');
    
  });}
  
  else if(i==1){button[i].addEventListener('click', function(){
        nobita.classList.add('hidden');
        doremon.classList.remove('hidden');
        shizuka.classList.add('hidden');});}

        else if(i==2){button[i].addEventListener('click', function(){
                nobita.classList.add('hidden');
                doremon.classList.add('hidden');
                shizuka.classList.remove('hidden');});}
                document.addEventListener('keydown',function(e){
                  console.log(e);
                  console.log(e.key);
                  if(e.key==='Escape'){
                    nobita.classList.add('hidden');
                    doremon.classList.add('hidden');
                    shizuka.classList.add('hidden');
                  }
                });
        }
       
       
       
       