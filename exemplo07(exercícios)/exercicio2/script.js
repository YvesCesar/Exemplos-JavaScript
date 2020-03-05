function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fAno.value.length == 0 || Number(fAno.value > ano)) {
        window.alert("ERRO!!! Verifique os dados e tente novamente.")
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bb-m.png')
            } else if(idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
                if(idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'bb-f.png')
                } else if(idade <= 21) {
                    //jovem
                    img.setAttribute('src', 'jovem-f.png')
                } else if(idade < 60) {
                    //adulto
                    img.setAttribute('src', 'adulto-f.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'velho-f.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img).style.margin = 'auto'
    }
}