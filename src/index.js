import {compile} from 'pug'

const compiledFunction = (args) => compile(`
style @import"http://fonts.cdnfonts.com/css/doctor-signature";.id_container{width:500px;height:250px;border:1px solid #000;border-radius:25px;position:relative;background-color:#fff;color:#000}.id_header{width:400px;height:50px;line-height:50px;text-align:center;position:relative;margin:0 auto;text-transform:uppercase;font-size:25px;color:#fff;background-color:#000}.id_header img{display:inline-block}.id_name{font-size:25px;text-align:center}.id_rank{font-size:20px;text-align:center}.id_left{width:100px;height:130px;position:absolute;bottom:60px;left:10px}.id_right{width:300px;height:130px;position:absolute;bottom:60px;right:45px;font-size:15px}.id_details{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr}.id_details .id_deets{text-decoration:underline}.id_l{text-align:left}.id_c{text-align:center}.id_r{text-align:right}.id_docsig{font-family:"Doctor Signature",sans-serif}.id_charSig{position:absolute;bottom:20px;left:10px;text-align:left;font-size:15px}.id_approveSig{position:absolute;right:45px;bottom:20px;font-size:8px}.id_approveSig .id_deets{text-transform:uppercase}.id_approveSig .id_docsig{font-size:10px}
- vilColor = { kono: "#28873e", kumo: "#5a3d7f", hoshi: "#4a848b", suna: "#bba347", kiri: "#004489", tanbo: "#fff"}
- vilBlock = { kono: "Konohagakure", kumo: "Kumogakure", hoshi: "Hoshigakure", suna: "Sunagakure", kiri: "Kirigakure", tanbo: "Tanbogakure" }
.id_container
    .id_header
        span(style="color:"+vilColor[village]+";")=vilBlock[village] + " no Sato"
        img
    .id_left 
        img(src=img, alt=firstName+' '+lastName, width="100px", style="max-height: 135px")
    .id_right 
        .id_name=firstName + ' ' + lastName
        .id_rank=rank
        .id_details 
            .id_age.id_l
                span.id_deets Age
                br
                span=age
            .id_eye.id_c
                span.id_deets Eye Color
                br
                span=eyeColor
            .id_height.id_r
                span.id_deets Height
                br
                span=height
            .id_gender.id_l
                span.id_deets Gender
                br
                span=gender
            .id_hair.id_c
                span.id_deets Hair Color
                br
                span=hairColor
            .id_weight.id_r
                span.id_deets Weight
                br
                span=weight
    .id_charSig.id_docsig=firstName + ' ' + lastName
    .id_approveSig.id_r
        span.id_deets="Official Shinobi as rendered by "+vilBlock[village]+" Administration"
        br
        span.id_docsig=sig
`, args)

function handleFormSubmit(event) {
    event.preventDefault()
    
    const data = new FormData(event.target)
    
    const formJSON = Object.fromEntries(data.entries())
    
    const results = document.querySelector('#results pre')
    results.innerText = compiledFunction()(formJSON)

    console.log(formJSON)

    const preview = document.querySelector('#preview pre')
    preview.innerHTML = compiledFunction()(formJSON)
  }
  
  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)