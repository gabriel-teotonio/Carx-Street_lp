

const loading = () => {
    const preLoad = document.querySelector('.preload-container')
    const Conatainer = document.querySelector('.Container')
    preLoad.classList.add('hidden-load')
    Conatainer.style.display = 'block'
    if(preLoad.classList.contains('hidden-load')){
        setTimeout(() => {
            preLoad.style.display = 'none'
        }, 500);
    }
}