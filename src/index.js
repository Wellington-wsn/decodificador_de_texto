const outputText = document.createElement('textare');
const botaoCopiarRetorno =  document.createElement('button');
const divRespose = document.createElement('div')
botaoCopiarRetorno.classList.add('btn_copiar');
outputText.classList.add('output_text');
divRespose.classList.add('div_response');

const btnCriptografar = document.getElementById('btnCriptografar');
const btnDescriptografar = document.getElementById('btnDescriptografar');
const CampoDeResposta = document.getElementById('caixa_de_resposta').appendChild(divRespose);
const inputText = document.getElementById('input_text');


async function copiarTexto(event) {
    event.preventDefault();
    try {
      const textoParaCopiar = outputText.innerText;
      await navigator.clipboard.writeText(textoParaCopiar);
      alert('Texto copiado com sucesso!');
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
}

function ocultarElmentosStandby() {
    const responseFields = document.querySelector('.response_field_standby');
    const ocultarElementos = responseFields.querySelectorAll('.to-hide');
    ocultarElementos.forEach((elemento) => {
        elemento.style.display = 'none';
    }); 
}

function renderizarSaida (texto) {
    outputText.textContent = texto;

    CampoDeResposta.appendChild(outputText);
    CampoDeResposta.appendChild(botaoCopiarRetorno);

    botaoCopiarRetorno.textContent = 'Copiar';
    botaoCopiarRetorno.addEventListener('click', copiarTexto);

}


function criptografar() {
    const texto = inputText.value;
    if (texto.match(/[A-Z��ÖÜ]/g) && !texto.match(/[áéíóúÁÉÍÓ��äöü]/g)) {
        const textoCriptografado = texto.replace(/E/g, 'ENTER').replace(/I/g, 'IMES').replace(/A/g, 'AI').replace(/O/g, 'OBER').replace(/U/g, 'UFAT');

        ocultarElmentosStandby();
        renderizarSaida(textoCriptografado);

    } else {
        alert('Texto não pode conter caracteres maiúsculos e acentos.');
    }
}

btnCriptografar.addEventListener('click', criptografar);

function descriptografar() {
    const textoCriptografado = inputText.value;
    const textoDescriptografado = textoCriptografado.replace(/ENTER/g, 'E').replace(/IMES/g, 'I').replace(/AI/g, 'A').replace(/OBER/g, 'O').replace(/UFAT/g,'U');

    ocultarElmentosStandby();
    renderizarSaida(textoDescriptografado);
}

btnDescriptografar.addEventListener('click', descriptografar);
