const populares = async () => {
    try {
        const response = await fetch("animals.json");
        const items = await response.json();
        return items;
      } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
      }
};

const cargarAnimales = async () => {
    const contenDiv = document.getElementById("cards");
    try {
      const animales = await populares();
      animales.forEach(animal => {
        const div = document.createElement("div");
        div.innerHTML=`<div class="card_Animal">
        <div class="avatar">
          <img
            src=${animal.url}
            alt=${animal.name}
          />
        </div>
        <strong>${animal.name}</strong>
      </div>
        `
        contenDiv.appendChild(div);
      });
    } catch (error) {
      console.error('Error al cargar animales:', error);
    }
  };

ScrollReveal().reveal('#animales',
{
  delay:400,
  origin:"top",
  distance: '10rem',
  easing: 'cubic-bezier(.15,0,.22,1.07)',
  reset:true
}
)
ScrollReveal().reveal("#GaleriaA",{
  delay:400,
  origin:"left",
  distance: '30rem',
  easing: 'cubic-bezier(.15,0,.22,1.07)',
  reset:true
})

ScrollReveal().reveal("#eventos",{
  delay:400,
  origin:"top",
  distance: '30rem',
  easing: 'cubic-bezier(.15,0,.22,1.07)',
  reset:true
})

ScrollReveal().reveal("#horariosV",{
  delay:400,
  origin:"bottom",
  distance: '30rem',
  easing: 'cubic-bezier(.15,0,.22,1.07)',
  reset:true
})

cargarAnimales();