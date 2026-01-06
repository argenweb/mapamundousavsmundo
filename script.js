document.addEventListener("DOMContentLoaded", function () {

  const eventos = [
    {
      id: 1,
      titulo: "Golpe de Estado en Guatemala",
      fecha: "1954-06-18",
      lat: 14.6349,
      lng: -90.5069,
        continente: "América central",
      tipo: "Golpe de Estado",
      resumen: "Derrocamiento del presidente Jacobo Árbenz con apoyo de la CIA.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Guatemala_de_1954" }
      ]
    },
    {
      id: 2,
      titulo: "Bombardeos en Camboya",
      fecha: "1969-03-18",
      lat: 12.5657,
      lng: 104.9910,
      tipo: "Bombardeo",
      resumen: "Bombardeos secretos durante la Guerra de Vietnam.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Bombardeos_de_los_Estados_Unidos_en_Camboya" }
      ]
    },
    {
      id: 3,
      titulo: "Golpe de Estado en Chile",
      fecha: "1973-09-11",
      lat: -33.4489,
      lng: -70.6693,
        continente: "América del Sur",
      tipo: "Golpe de Estado",
      resumen: "Intervención política y económica contra el gobierno de Salvador Allende.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Chile_de_1973" }
      ]
    },

    /* =========================
       EVENTOS NUEVOS
       ========================= */

    {
      id: 4,
      titulo: "Bombardeo atómico de Hiroshima",
      fecha: "1945-08-06",
      lat: 34.3853,
      lng: 132.4553,
      tipo: "Bombardeo nuclear",
      resumen: "Lanzamiento de la bomba atómica 'Little Boy' por EE.UU.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Bombardeo_atómico_de_Hiroshima" }
      ]
    },
    {
      id: 5,
      titulo: "Bombardeo atómico de Nagasaki",
      fecha: "1945-08-09",
      lat: 32.7503,
      lng: 129.8777,
      tipo: "Bombardeo nuclear",
      resumen: "Lanzamiento de la bomba atómica 'Fat Man' por EE.UU.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Bombardeo_atómico_de_Nagasaki" }
      ]
    },
    {
      id: 6,
      titulo: "Guerra de Vietnam",
      fecha: "1965-03-08",
      lat: 16.0471,
      lng: 108.2068,
      tipo: "Guerra",
      resumen: "Intervención militar directa de EE.UU. en Vietnam.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Vietnam" }
      ]
    },
    {
      id: 7,
      titulo: "Invasión de Panamá",
      fecha: "1989-12-20",
      lat: 8.9824,
      lng: -79.5199,
      tipo: "Invasión",
      resumen: "Operación para derrocar a Manuel Noriega.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Invasión_estadounidense_de_Panamá_de_1989" }
      ]
    },
    {
      id: 8,
      titulo: "Guerra del Golfo",
      fecha: "1991-01-17",
      lat: 29.3759,
      lng: 47.9774,
      tipo: "Guerra",
      resumen: "Intervención militar liderada por EE.UU. contra Irak.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_del_Golfo" }
      ]
    },
    {
      id: 9,
      titulo: "Invasión de Afganistán",
      fecha: "2001-10-07",
      lat: 34.5553,
      lng: 69.2075,
      tipo: "Invasión",
      resumen: "Inicio de la guerra tras los atentados del 11 de septiembre.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Afganistán_(2001-2021)" }
      ]
    },
    {
      id: 10,
      titulo: "Invasión de Irak",
      fecha: "2003-03-20",
      lat: 33.3152,
      lng: 44.3661,
      tipo: "Invasión",
      resumen: "Invasión liderada por EE.UU. bajo el argumento de armas de destrucción masiva.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Invasión_de_Irak_de_2003" }
      ]
    },
    {
      id: 11,
      titulo: "Intervención en Libia",
      fecha: "2011-03-19",
      lat: 32.8872,
      lng: 13.1913,
      tipo: "Bombardeo / intervención",
      resumen: "Intervención militar de la OTAN con participación de EE.UU.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_militar_en_Libia_de_2011" }
      ]
    },
    {
      id: 12,
      titulo: "Intervención en Siria",
      fecha: "2014-09-22",
      lat: 33.5146,
      lng: 36.2778,
      tipo: "Bombardeo",
      resumen: "Bombardeos de EE.UU. en el marco de la guerra civil siria.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_la_guerra_civil_siria" }
      ]
    },
      {
      id: 13,
      titulo: "Secuestro del Presidente de Venezuela, Nicolás Maduro",
      fecha: "2026-01-04",
       lat: 10.4806,
        lng: -66.9036,
      tipo: "Secuestro",
      resumen: "Secuestro de Nicolás Maduro, acusado de supuesto Narcotráfico.",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Guatemala_de_1954" }
      ]
    },  
    {
      id: 14,
      titulo: "Golpe de estado Argentina",
      fecha: "1976-03-24",
         lat: -34.6037,
  lng: -58.3816,
      tipo: "Golpe de estado",
      resumen: "Financiamiento y apoyo político a las Fuerzas Armadas para el Golpe de Estado en el marco de la Operación Cóndor en América Latina. Dio comienzo a la dictadura más sangrienta en la historia Argentina",
      fuentes: [
        { nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Anexo:Intervenciones_militares_de_los_Estados_Unidos" }
      ]
    },
 ]
  ;
    



  /* MAPA */
  const map = L.map("map", { worldCopyJump: true }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  const markers = {};

  eventos.forEach(evt => {
    const fuentesHTML = evt.fuentes
      .map(f => `<a href="${f.url}" target="_blank">${f.nombre}</a>`)
      .join(" · ");

    markers[evt.id] = L.circleMarker([evt.lat, evt.lng], { radius: 6 })
      .addTo(map)
      .bindPopup(`
        <div class="popup-title">${evt.titulo}</div>
        <div class="popup-meta">${evt.tipo} · ${evt.fecha}</div>
        <div>${evt.resumen}</div>
        <div class="popup-sources">Fuentes: ${fuentesHTML}</div>
      `);
  });

  /* TIMELINE */
  const timelineItems = eventos.map(evt => ({
    id: evt.id,
    content: evt.titulo,
    start: evt.fecha
  }));

  const timeline = new vis.Timeline(
    document.getElementById("timeline"),
    timelineItems,
    { stack: false, horizontalScroll: true }
  );

  timeline.on("select", e => {
    if (e.items.length) {
      const evt = eventos.find(x => x.id === e.items[0]);
      map.setView([evt.lat, evt.lng], 5);
      markers[evt.id].openPopup();
    }
  });

  /* Forzar render del mapa */
  setTimeout(() => {
    map.invalidateSize();
  }, 200);

});

/* ============================
   GRÁFICO POR CONTINENTE
   ============================ */

function calcularIntervencionesPorContinente(eventos) {
  const conteo = {};

  eventos.forEach(evt => {
    if (!evt.continente) return;
    conteo[evt.continente] = (conteo[evt.continente] || 0) + 1;
  });

  return conteo;
}

const conteoContinentes = calcularIntervencionesPorContinente(eventos);

const labels = Object.keys(conteoContinentes);
const dataValues = Object.values(conteoContinentes);

const total = dataValues.reduce((a, b) => a + b, 0);

const ctx = document.getElementById("continentChart").getContext("2d");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: labels.map((label, i) => {
      const porcentaje = ((dataValues[i] / total) * 100).toFixed(1);
      return `${label} (${dataValues[i]} – ${porcentaje}%)`;
    }),
    datasets: [{
      data: dataValues
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          font: { size: 11 }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw;
            const percent = ((value / total) * 100).toFixed(1);
            return `${value} intervenciones (${percent}%)`;
          }
        }
      }
    }
  }
});

