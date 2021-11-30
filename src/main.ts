import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>webgl-demo-template</h1>
`

// make canvas dom
const canvas = document.createElement('canvas');
const width = 1200;
const height = 600;
const dpr = window.devicePixelRatio;
canvas.style.width = width + 'px';
canvas.style.height = height + 'px';
canvas.width = width * dpr;
canvas.height = height * dpr;
app?.appendChild(canvas);

// get webgl2 context
const gl = canvas.getContext('webgl2');
if(!gl) {
  throw new Error("your device don't support webgl2!");
}

// gl.scale(dpr, dpr);

/**
 * make a mvp webgl demo 
 */
gl.clearColor(0,0,0,1);

gl.clear(gl.COLOR_BUFFER_BIT);