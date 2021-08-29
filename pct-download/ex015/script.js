function Verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fNasc = document.getElementById ('txtNasc')
    var res =  window.document.getElementById('res')

    

   
    if (fNasc.value.length == 0 || fNasc.value > ano){
        window.alert('[ERRO] verifique os dados digitado e tente novamente!')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fNasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if ( fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <=2){
                //bb
                img.setAttribute('src' , 'bbM.png')
            }else if (idade <= 13){
                //criança
                img.setAttribute('src' , 'criancaM.png')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src' , 'adultoM.png')
            }else {
                //idoso
                img.setAttribute('src' , 'idosoM.png')
            }


        }else if (fsex [1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <=2){
                img.setAttribute('src' , 'bb1.png')
            }else if (idade <= 13){
                img.setAttribute('src' , 'criancaF.png')
            }else if (idade < 60){
                img.setAttribute('src' , 'adultoF.png')
            }else {
                img.setAttribute('src' , 'idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
       res.appendChild  (img)
    }
    
}