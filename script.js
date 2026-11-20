const $=id=>document.getElementById(id),player=$('player'),btn=$('musicToggle');
const label=on=>{btn.textContent=on?'Pause music ♫':'Play music ♫';};
label(false);
player.addEventListener('play',()=>label(true));
player.addEventListener('pause',()=>label(false));
player.addEventListener('ended',()=>label(false));
btn.addEventListener('click',()=>{if(player.paused)player.play().catch(()=>{});else player.pause();});
$('openBtn').addEventListener('click',()=>{
 player.volume=1;
 player.play().catch(()=>label(false));
 $('envelopeWrap').classList.add('opened');
 setTimeout(()=>{$('scene').style.display='none';$('invitation').classList.add('show');window.scrollTo({top:0,behavior:'smooth'});},1250);
});
const target=new Date(2026,11,6,18,0,0);
function tick(){
 let diff=target.getTime()-Date.now();
 if(diff<0)diff=0;
 const vals=[Math.floor(diff/86400000),Math.floor(diff%86400000/3600000),Math.floor(diff%3600000/60000),Math.floor(diff%60000/1000)];
 ['days','hours','minutes','seconds'].forEach((id,i)=>$(id).textContent=i===0?vals[i]:String(vals[i]).padStart(2,'0'));
}
tick();setInterval(tick,1000);
