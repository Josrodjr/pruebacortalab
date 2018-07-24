/* eslint-env node, browser */

const state = {
  //  numero ingresado
  numero: [1, 2, 3],
  //  fechas ingresadas
  fechas: [],
};

const render = (newState) => {
  //  get the root
  const root = document.getElementById('root');
  //  limpiar el render anterior
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  //  primer div con el ingreso del numeor
  const ingreso = document.createElement('div');
  ingreso.className = 'inputbox';

  //  segundo div con la caja de las demas graficas de figonacci
  const allfigonacci = document.createElement('div');
  allfigonacci.className = 'allfigonacci';

  // text input
  const input = document.createElement('input');
  input.className = 'ingreso';
  input.placeholder = 'Ingrese una numero de figonacci';

  const inputbtn = document.createElement('button');
  inputbtn.className = 'btninput';
  inputbtn.innerText = 'INGRESAR';
  inputbtn.id = 'btninput';

  ingreso.append(input);
  ingreso.append(inputbtn);

  //  main render
  root.append(ingreso);
  root.append(allfigonacci);

  for (let i = 0; i < state.numero.length; i += 1) {
  //  fecha de ingreso
    const fecha = document.createElement('div');
    fecha.className = 'fecha';
    fecha.id = `fecha${i}`;

    //  grafica de figonacci
    const graphbox = document.createElement('div');
    graphbox.className = 'graphbox';
    graphbox.id = `gbox${i}`;

    for (let j = 0; j < 25; j += 1) {
      const minidiv = document.createElement('div');
      minidiv.className = 'minidiv';
      minidiv.id = `minidiv ${j} ${i}`;
      graphbox.append(minidiv);
    }

    allfigonacci.append(graphbox);

    for (let k = 0; k < state.numero[i]; k += 1) {
      const minidiv = document.getElementById(`minidiv ${k} ${i}`);
      const cube = document.createElement('div');
      cube.className = 'cube';
      minidiv.append(cube);
    }
    
    allfigonacci.append(fecha);
  }


  //  render(newState);
  const botoninput = document.getElementById('btninput');

  botoninput.onclick = () => {
    if (input.value !== '') {
      state.numero.push(input.value);
      render(newState);
    }
  };
};

render(state);
