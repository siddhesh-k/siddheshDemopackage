function shadow(options){
    let images = document.querySelectorAll('.shadowizord');
    if(options.shadow_type === 'hard'){
        options.shadow_type = '0px'
    }
    else{
        options.shadow_type = '15px'
    }
    images.forEach(image =>{
        image.style.boxShadow = `10px 10px ${options.shadow_type}`
    
        if(options.padding){
            image.style.padding= '1em'
        }
    })
}
module.exports.shadow = shadow;