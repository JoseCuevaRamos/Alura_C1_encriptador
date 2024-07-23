const encriptarDict = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
const desencriptarDict = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function Procesar(){
    let texto=document.querySelector('#text-input').value;
    let sub=document.querySelector('h2');
    let texto_inf=document.querySelector('.texto_p');
    let img=document.querySelector('.buscando_imagen');
    console.log(texto);
    img.style.display='none';
    texto_inf.innerHTML='';
    let resultado=Encriptar(texto);
    sub.innerHTML=resultado;
    sub.style.fontSize='1vw'
    MostrarBoton()

};

function decod(){
    let texto=document.querySelector('#text-input').value;
    let sub=document.querySelector('h2');
    let texto_inf=document.querySelector('.texto_p');
    let img=document.querySelector('.buscando_imagen');
    console.log(texto);
    img.style.display='none';
    texto_inf.innerHTML='';
    let resultado=Desencriptar(texto);
    sub.innerHTML=resultado;
    sub.style.fontSize='1.5vw'
    MostrarBoton()
}

function Desencriptar(texto) {
    let desencriptado = texto;
    for (const [key, value] of Object.entries(desencriptarDict)) {
        desencriptado = desencriptado.split(key).join(value);
    }
    return desencriptado;
}

function Encriptar(texto){
    return texto.split('').map(char => encriptarDict[char] || char).join('');
};

function MostrarBoton() {
    let botonDesencriptar = document.getElementById('boton_copiar');
    botonDesencriptar.style.display = 'inline-block';
};
function Copiar() {
    let sub = document.querySelector('h2');
    let textToCopy = sub.innerText;

    let tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); 

    document.execCommand('copy');

    document.body.removeChild(tempTextarea);
}