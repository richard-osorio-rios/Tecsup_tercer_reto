
const sectionNosotros = ()=>{
    const buttonNosotros =  document.getElementById('buttonNosotros');

    const openNosotros= ()=>{
        window.location.href = '../modules/nosotros.html';
    };



    buttonNosotros.addEventListener('click',openNosotros);
};

export default sectionNosotros;

