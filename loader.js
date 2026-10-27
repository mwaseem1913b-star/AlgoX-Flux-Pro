// ALGO X FLUX - Fixed Version
(function(){
  let old = document.getElementById('algox-box');
  if(old) old.remove();

  let box = document.createElement('div');
  box.id = 'algox-box';
  box.style.cssText = 'position:fixed;top:20%;left:50%;transform:translateX(-50%);z-index:999999;background:#111;color:#0f0;padding:20px;border:2px solid #0f0;border-radius:12px;font-family:sans-serif;text-align:center;min-width:250px;';
  box.innerHTML = `
    <div style="font-weight:bold;font-size:18px;margin-bottom:10px;">🦅 ALGO X FLUX PRO</div>
    <div id="algox-signal" style="font-size:22px;font-weight:bold;margin:10px 0;">Wait...</div>
    <div style="font-size:12px;color:#ccc;">2 Sec Signal</div>
    <button id="algox-close" style="margin-top:10px;padding:5px 15px;cursor:pointer;">Close</button>
  `;
  document.body.appendChild(box);
  document.getElementById('algox-close').onclick = ()=> box.remove();
  
  let signals = ['UP 2 SEC','DOWN 2 SEC'];
  let el = document.getElementById('algox-signal');
  setInterval(()=>{
    let s = signals[Math.floor(Math.random()*signals.length)];
    el.innerText = s;
    el.style.color = s.includes('UP') ? '#00ff00' : '#ff3333';
  },2000);
  console.log('ALGO X Loaded OK');
})();
