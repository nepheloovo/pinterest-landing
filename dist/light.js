(() => {
  const canvas = document.getElementById('light-canvas');
  if (!canvas) return;
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' });
  if (!gl) return;
  const vertex = 'attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}';
  const fragment = `precision highp float;
    uniform vec2 resolution;
    uniform vec2 center;
    uniform vec3 coreColor;
    uniform vec3 rayColor;
    float ray(vec2 p,vec2 direction,float width){
      vec2 n=normalize(direction);
      float across=abs(p.x*n.y-p.y*n.x);
      float along=abs(dot(p,n));
      return exp(-across/(width+along*.0018))*exp(-along*6.);
    }
    void main(){
      vec2 p=(gl_FragCoord.xy-center)/resolution.x;
      float radius=length(p*vec2(.86,1.));
      float bloom=exp(-radius*11.);
      float atmosphere=exp(-radius*7.)*.35;
      float horizontal=exp(-abs(p.y-.10*p.x*p.x)/(.0015+abs(p.x)*.009))*exp(-abs(p.x)*5.5);
      float beams=horizontal*.43+ray(p,vec2(.74,1.),.0015)*.27+ray(p,vec2(-.85,1.),.0014)*.22+ray(p,vec2(.95,.75),.0011)*.08;
      vec3 blue=coreColor*(bloom*.87+atmosphere);
      vec3 light=rayColor*beams;
      float fade=(1.-smoothstep(.23,.41,abs(p.y)))*(1.-smoothstep(.43,.7,abs(p.x)));
      gl_FragColor=vec4((blue+light)*fade,1.);
    }`;
  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null; }
    return shader;
  }
  const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
  if (!vs || !fs) return;
  const program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position'); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const resolution = gl.getUniformLocation(program, 'resolution');
  const center = gl.getUniformLocation(program, 'center');
  const colors = getComputedStyle(document.documentElement);
  function color(name) {
    const hex = colors.getPropertyValue(name).trim().replace('#', '');
    return [0, 2, 4].map(index => parseInt(hex.slice(index, index + 2), 16) / 255);
  }
  gl.uniform3fv(gl.getUniformLocation(program, 'coreColor'), color('--color-light-core'));
  gl.uniform3fv(gl.getUniformLocation(program, 'rayColor'), color('--color-light-ray'));
  function render() {
    const rect = canvas.getBoundingClientRect(), ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    const mark = document.querySelector('.hero-mark').getBoundingClientRect();
    canvas.width = Math.round(rect.width * ratio); canvas.height = Math.round(rect.height * ratio);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform2f(center, (mark.left + mark.width / 2 - rect.left) * ratio, (rect.height - (mark.top + mark.height * .44 - rect.top)) * ratio);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  new ResizeObserver(render).observe(canvas);
  window.addEventListener('resize', render, { passive: true });
})();
