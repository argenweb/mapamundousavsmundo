document.addEventListener("DOMContentLoaded", function () {
  
  const eventos = [
    { id: 1, titulo: "Guerra México–EE.UU.", fecha: "1846-04-25", lat: 23.6345, lng: -102.5528, continente: "América del Norte", tipo: "Guerra", resumen: "Cesión de territorios.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_entre_M%C3%A9xico_y_los_Estados_Unidos" }] },
    { id: 2, titulo: "Expedición Perry", fecha: "1853-07-08", lat: 35.4437, lng: 139.6380, continente: "Asia", tipo: "Intervención naval", resumen: "Apertura comercial de Japón.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Expedici%C3%B3n_Perry" }] },
    { id: 3, titulo: "Guerra Hispano–Estadounidense", fecha: "1898-04-21", lat: 21.5218, lng: -77.7812, continente: "América del Norte", tipo: "Guerra", resumen: "Operaciones en Cuba y Filipinas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_hispano-estadounidense" }] },
    { id: 4, titulo: "Ocupación de Haití", fecha: "1915-07-28", lat: 18.9712, lng: -72.2852, continente: "América Central", tipo: "Ocupación militar", resumen: "Presencia prolongada en Haití.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Ocupaci%C3%B3n_estadounidense_de_Hait%C3%AD" }] },
    { id: 5, titulo: "Intervención en Veracruz", fecha: "1914-04-21", lat: 19.1738, lng: -96.1342, continente: "América del Norte", tipo: "Intervención militar", resumen: "Ocupación del puerto.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Ocupaci%C3%B3n_estadounidense_de_Veracruz" }] },
    { id: 6, titulo: "Golpe en Guatemala", fecha: "1954-06-27", lat: 15.7835, lng: -90.2308, continente: "América Central", tipo: "Operación encubierta", resumen: "Apoyo CIA contra Árbenz.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Guatemala_de_1954" }] },
    { id: 7, titulo: "Guerra de Corea", fecha: "1950-06-25", lat: 36.5, lng: 127.9, continente: "Asia", tipo: "Guerra", resumen: "Conflicto península coreana.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Corea" }] },
    { id: 8, titulo: "Guerra de Vietnam", fecha: "1965-03-08", lat: 16.0471, lng: 108.2068, continente: "Asia", tipo: "Guerra", resumen: "Intervención prolongada.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Vietnam" }] },
    { id: 9, titulo: "Golpe en Chile", fecha: "1973-09-11", lat: -33.4489, lng: -70.6693, continente: "América del Sur", tipo: "Intervención política", resumen: "Derrocamiento de Allende.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Chile_de_1973" }] },
    { id: 10, titulo: "Invasión de Granada", fecha: "1983-10-25", lat: 12.1165, lng: -61.6790, continente: "América Central", tipo: "Invasión", resumen: "Intervención militar directa.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Invasi%C3%B3n_de_Granada" }] },
    { id: 11, titulo: "Invasión de Panamá", fecha: "1989-12-20", lat: 8.5380, lng: -80.7821, continente: "América Central", tipo: "Invasión", resumen: "Derrocamiento de Noriega.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Invasi%C3%B3n_estadounidense_de_Panam%C3%A1" }] },
    { id: 12, titulo: "Guerra del Golfo", fecha: "1991-01-17", lat: 33.2232, lng: 43.6793, continente: "Medio Oriente", tipo: "Guerra", resumen: "Contra Irak tras invadir Kuwait.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_del_Golfo" }] },
    { id: 13, titulo: "Guerra de Afganistán", fecha: "2001-10-07", lat: 33.9391, lng: 67.7100, continente: "Asia", tipo: "Guerra", resumen: "Tras el 11 de septiembre.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Afganist%C3%A1n_(2001-2021)" }] },
    { id: 14, titulo: "Invasión de Irak", fecha: "2003-03-20", lat: 33.2232, lng: 43.6793, continente: "Medio Oriente", tipo: "Invasión", resumen: "Derrocamiento de Hussein.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Invasión_de_Irak_de_2003" }] },
    { id: 15, titulo: "Intervención en Libia", fecha: "2011-03-19", lat: 26.3351, lng: 17.2283, continente: "África", tipo: "Intervención militar", resumen: "Operaciones OTAN.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervenci%C3%B3n_militar_en_Libia_de_2011" }] },
    { id: 16, titulo: "Hiroshima", fecha: "1945-08-06", lat: 34.3853, lng: 132.4553, continente: "Asia", tipo: "Bombardeo nuclear", resumen: "Primera bomba atómica.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Bombardeo_atómico_de_Hiroshima" }] },
    { id: 17, titulo: "Nagasaki", fecha: "1945-08-09", lat: 32.7503, lng: 129.8777, continente: "Asia", tipo: "Bombardeo nuclear", resumen: "Segunda bomba atómica.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Bombardeo_atómico_de_Nagasaki" }] },
    { id: 18, titulo: "Golpe en Irán", fecha: "1953-08-19", lat: 35.6892, lng: 51.3890, continente: "Medio Oriente", tipo: "Operación encubierta", resumen: "Derrocamiento de Mossadegh.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Irán_de_1953" }] },
    { id: 19, titulo: "Bahía de Cochinos", fecha: "1961-04-17", lat: 22.0736, lng: -81.0140, continente: "América del Norte", tipo: "Invasión fallida", resumen: "Intento en Cuba.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Invasión_de_Bahía_de_Cochinos" }] },
    { id: 20, titulo: "Crisis de los Misiles", fecha: "1962-10-16", lat: 21.5218, lng: -77.7812, continente: "América del Norte", tipo: "Crisis militar", resumen: "Enfrentamiento con la URSS.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Crisis_de_los_misiles_en_Cuba" }] },
    { id: 21, titulo: "República Dominicana", fecha: "1965-04-28", lat: 18.7357, lng: -70.1627, continente: "América Central", tipo: "Intervención militar", resumen: "Guerra civil dominicana.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_la_República_Dominicana" }] },
    { id: 22, titulo: "Contras Nicaragua", fecha: "1981-01-01", lat: 12.8654, lng: -85.2072, continente: "América Central", tipo: "Apoyo encubierto", resumen: "Financiamiento insurgente.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Contras" }] },
    { id: 23, titulo: "Somalia", fecha: "1992-12-09", lat: 5.1521, lng: 46.1996, continente: "África", tipo: "Intervención militar", resumen: "Misión humanitaria ONU.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Somalia" }] },
    { id: 24, titulo: "Yugoslavia (Kosovo)", fecha: "1999-03-24", lat: 42.6026, lng: 20.9030, continente: "Europa", tipo: "Bombardeo aéreo", resumen: "Campaña de la OTAN.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Kosovo" }] },
    { id: 25, titulo: "Sudán", fecha: "1998-08-20", lat: 15.5007, lng: 32.5599, continente: "África", tipo: "Bombardeo", resumen: "Fábrica farmacéutica.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Operación_Alcance_Infinito" }] },
    { id: 26, titulo: "Siria", fecha: "2014-09-22", lat: 34.8021, lng: 38.9968, continente: "Medio Oriente", tipo: "Intervención militar", resumen: "Guerra civil siria.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_la_guerra_civil_siria" }] },
    { id: 27, titulo: "Yemen", fecha: "2015-03-25", lat: 15.5527, lng: 48.5164, continente: "Medio Oriente", tipo: "Apoyo militar", resumen: "Apoyo coalición saudí.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Yemen" }] },
    { id: 28, titulo: "Pakistán (Drones)", fecha: "2004-06-18", lat: 30.3753, lng: 69.3451, continente: "Asia", tipo: "Operaciones con drones", resumen: "Contra Al Qaeda.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Ataques_con_drones_en_Pakistán" }] },
    { id: 29, titulo: "Ucrania (2014)", fecha: "2014-03-01", lat: 48.3794, lng: 31.1656, continente: "Europa", tipo: "Apoyo militar", resumen: "Tras anexión de Crimea.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Ucrania" }] },
    { id: 30, titulo: "ISIS Irak", fecha: "2014-08-08", lat: 33.2232, lng: 43.6793, continente: "Medio Oriente", tipo: "Intervención militar", resumen: "Combate al Estado Islámico.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Irak_(2014-2021)" }] },
    { id: 31, titulo: "Dictadura Argentina", fecha: "1976-03-24", lat: -34.6037, lng: -58.3816, continente: "América del Sur", tipo: "Apoyo político", resumen: "Cooperación gobierno militar.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Proceso_de_Reorganización_Nacional" }] },
    { id: 32, titulo: "Guerra Civil El Salvador", fecha: "1980-01-01", lat: 13.7942, lng: -88.8965, continente: "América Central", tipo: "Apoyo militar", resumen: "Asistencia al gobierno.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_de_El_Salvador" }] },
    { id: 33, titulo: "Bombardeos Laos", fecha: "1964-12-14", lat: 19.8563, lng: 102.4955, continente: "Asia", tipo: "Bombardeo aéreo", resumen: "Guerra secreta.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_secreta_en_Laos" }] },
    { id: 34, titulo: "Bombardeos Camboya", fecha: "1969-03-18", lat: 12.5657, lng: 104.9910, continente: "Asia", tipo: "Bombardeo aéreo", resumen: "Contra norvietnamitas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Bombardeo_estadounidense_de_Camboya" }] },
    { id: 35, titulo: "Guerra Líbano (1982)", fecha: "1982-08-25", lat: 33.8938, lng: 35.5018, continente: "Medio Oriente", tipo: "Despliegue militar", resumen: "Fuerza multinacional.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Líbano" }] },
    { id: 36, titulo: "Marines Beirut", fecha: "1983-04-18", lat: 33.8938, lng: 35.5018, continente: "Medio Oriente", tipo: "Despliegue militar", resumen: "Presencia conflicto libanés.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Atentados_contra_la_embajada_de_Estados_Unidos_en_Beirút" }] },
    { id: 37, titulo: "Bosnia", fecha: "1995-08-30", lat: 43.8563, lng: 18.4131, continente: "Europa", tipo: "Intervención militar", resumen: "Bombardeos OTAN.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Bosnia" }] },
    { id: 38, titulo: "Libia (1986)", fecha: "1986-04-15", lat: 26.3351, lng: 17.2283, continente: "África", tipo: "Bombardeo aéreo", resumen: "Contra objetivos en Libia.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Bombardeo_estadounidense_de_Libia_de_1986" }] },
    { id: 39, titulo: "Filipinas (2002)", fecha: "2002-01-01", lat: 12.8797, lng: 121.7740, continente: "Asia", tipo: "Operación militar", resumen: "Contra insurgentes islamistas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Operación_Enduring_Freedom_-_Filipinas" }] },
    { id: 40, titulo: "Plan Colombia", fecha: "2000-07-13", lat: 4.5709, lng: -74.2973, continente: "América del Sur", tipo: "Apoyo militar", resumen: "Asistencia al gobierno.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Plan_Colombia" }] },
    { id: 41, titulo: "Golpe Honduras (2009)", fecha: "2009-06-28", lat: 14.0723, lng: -87.1921, continente: "América Central", tipo: "Intervención política", resumen: "Tras destitución de Zelaya.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Honduras_de_2009" }] },
    { id: 42, titulo: "Bolivia (2019)", fecha: "2019-11-12", lat: -16.4897, lng: -68.1193, continente: "América del Sur", tipo: "Intervención política", resumen: "Reconocimiento gobierno interino.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Crisis_política_en_Bolivia_de_2019" }] },
    { id: 43, titulo: "Abbottabad (Bin Laden)", fecha: "2011-05-02", lat: 34.1688, lng: 73.2215, continente: "Asia", tipo: "Operación militar", resumen: "Muerte de Bin Laden.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Muerte_de_Osama_bin_Laden" }] },
    { id: 44, titulo: "Al-Shabaab Somalia", fecha: "2011-09-15", lat: 2.0469, lng: 45.3182, continente: "África", tipo: "Operación militar", resumen: "Ataques aéreos y especiales.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Somalia" }] },
    { id: 45, titulo: "Níger (Drones)", fecha: "2013-02-21", lat: 17.6078, lng: 8.0817, continente: "África", tipo: "Despliegue militar", resumen: "Tropas en el Sahel.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Níger" }] },
    { id: 46, titulo: "Kosovo (1999)", fecha: "1999-03-24", lat: 42.6026, lng: 20.9030, continente: "Europa", tipo: "Intervención militar", resumen: "Campaña aérea OTAN.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Kosovo" }] },
    { id: 47, titulo: "Georgia (2008)", fecha: "2008-08-08", lat: 42.3154, lng: 43.3569, continente: "Europa", tipo: "Apoyo militar", resumen: "Conflicto con Rusia.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Osetia_del_Sur_de_2008" }] },
    { id: 48, titulo: "Mali", fecha: "2013-01-11", lat: 17.5707, lng: -3.9962, continente: "África", tipo: "Apoyo militar", resumen: "Apoyo logístico fuerzas int.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_de_Mal%C3%AD" }] },
    { id: 49, titulo: "Boko Haram", fecha: "2014-05-06", lat: 9.0820, lng: 8.6753, continente: "África", tipo: "Apoyo militar", resumen: "Inteligencia en Nigeria.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Boko_Haram" }] },
    { id: 50, titulo: "Sudán del Sur", fecha: "2013-12-15", lat: 6.8769, lng: 31.3069, continente: "África", tipo: "Intervención diplomática y militar", resumen: "Protección civiles guerra civil.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_de_Sud%C3%A1n_del_Sur" }] },
    { id: 51, titulo: "Drones Libia (2016)", fecha: "2016-08-01", lat: 31.1897, lng: 16.5702, continente: "África", tipo: "Operaciones con drones", resumen: "Contra el Estado Islámico.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Libia" }] },
    { id: 52, titulo: "Kenia", fecha: "2011-10-16", lat: -0.0236, lng: 37.9062, continente: "África", tipo: "Apoyo militar", resumen: "Ataques selectivos extremistas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_%C3%81frica" }] },
    { id: 53, titulo: "Irak (pos-2011)", fecha: "2014-06-15", lat: 33.2232, lng: 43.6793, continente: "Medio Oriente", tipo: "Intervención militar", resumen: "Combate contra ISIS.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Irak_(2014-2021)" }] },
    { id: 54, titulo: "Arabia Saudita/Yemen", fecha: "2015-03-26", lat: 15.5527, lng: 48.5164, continente: "Medio Oriente", tipo: "Apoyo militar", resumen: "Logística coalición saudí.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_yemení" }] },
    { id: 55, titulo: "Siria contra ISIS", fecha: "2014-09-22", lat: 35.0, lng: 38.0, continente: "Medio Oriente", tipo: "Intervención militar", resumen: "Campaña aérea.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_la_guerra_civil_siria" }] },
    { id: 56, titulo: "Chad", fecha: "2014-02-01", lat: 15.4542, lng: 18.7322, continente: "África", tipo: "Despliegue militar", resumen: "Operaciones antiterroristas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_%C3%81frica" }] },
    { id: 57, titulo: "Ucrania (2022-Pres.)", fecha: "2022-02-24", lat: 48.3794, lng: 31.1656, continente: "Europa", tipo: "Apoyo militar", resumen: "Tras invasión rusa.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Apoyo_exterior_a_Ucrania_durante_la_guerra_ruso-ucraniana" }] },
    { id: 58, titulo: "Ataque Kabul (2021)", fecha: "2021-08-29", lat: 34.5553, lng: 69.2075, continente: "Asia", tipo: "Ataque aéreo", resumen: "Drones durante retirada.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Ataque_con_drones_en_Kabul_de_2021" }] },
    { id: 59, titulo: "Taiwán (Entrenamiento)", fecha: "2021-10-07", lat: 23.6978, lng: 120.9605, continente: "Asia", tipo: "Apoyo militar", resumen: "Entrenamiento militar.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Relaciones_entre_Estados_Unidos_y_Taiwán" }] },
    { id: 60, titulo: "Mar Rojo (2023)", fecha: "2023-12-18", lat: 15.0, lng: 42.0, continente: "Medio Oriente", tipo: "Intervención naval", resumen: "Protección rutas comerciales.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Crisis_del_mar_Rojo_(2023-2024)" }] },
    { id: 61, titulo: "Guerra Civil Grecia", fecha: "1947-03-12", lat: 39.0742, lng: 21.8243, continente: "Europa", tipo: "Apoyo militar", resumen: "Apoyo al gobierno griego.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_griega" }] },
    { id: 62, titulo: "Indonesia (1965)", fecha: "1965-10-01", lat: -6.2088, lng: 106.8456, continente: "Asia", tipo: "Apoyo político", resumen: "Apoyo cambio gobierno.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Matanza_de_Indonesia_de_1965-1966" }] },
    { id: 63, titulo: "Angola", fecha: "1975-11-11", lat: -11.2027, lng: 17.8739, continente: "África", tipo: "Apoyo encubierto", resumen: "Guerra civil angoleña.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_angoleña" }] },
    { id: 64, titulo: "Mozambique", fecha: "1977-06-25", lat: -18.6657, lng: 35.5296, continente: "África", tipo: "Apoyo indirecto", resumen: "Guerra Fría.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_de_Mozambique" }] },
    { id: 65, titulo: "Operación Ciclón", fecha: "1979-07-03", lat: 33.9391, lng: 67.7100, continente: "Asia", tipo: "Operación encubierta", resumen: "Apoyo insurgentes afganos.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Operación_Ciclón" }] },
    { id: 66, titulo: "Turquía (1980)", fecha: "1980-09-12", lat: 39.9334, lng: 32.8597, continente: "Europa", tipo: "Apoyo político", resumen: "Apoyo golpe militar.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Turquía_de_1980" }] },
    { id: 67, titulo: "Sri Lanka", fecha: "1983-07-23", lat: 7.8731, lng: 80.7718, continente: "Asia", tipo: "Apoyo militar", resumen: "Asistencia conflicto interno.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_de_Sri_Lanka" }] },
    { id: 68, titulo: "Sudáfrica (Guerra Fría)", fecha: "1981-01-01", lat: -30.5595, lng: 22.9375, continente: "África", tipo: "Apoyo político", resumen: "Relaciones estratégicas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Relaciones_entre_Estados_Unidos_y_Sudáfrica" }] },
    { id: 69, titulo: "Líbano (1984)", fecha: "1984-02-26", lat: 33.8938, lng: 35.5018, continente: "Medio Oriente", tipo: "Retirada militar", resumen: "Tras ataques a fuerzas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Guerra_civil_libanesa" }] },
    { id: 70, titulo: "Haití (1994)", fecha: "1994-09-19", lat: 18.9712, lng: -72.2852, continente: "América Central", tipo: "Intervención militar", resumen: "Restauración de Aristide.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Operación_Uphold_Democracy" }] },
    { id: 71, titulo: "Timor Oriental", fecha: "1999-09-20", lat: -8.8742, lng: 125.7275, continente: "Asia", tipo: "Apoyo militar", resumen: "Referéndum independencia.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Crisis_de_Timor_Oriental_de_1999" }] },
    { id: 72, titulo: "Macedonia del Norte", fecha: "2001-03-01", lat: 41.6086, lng: 21.7453, continente: "Europa", tipo: "Apoyo militar", resumen: "Conflicto interno.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Conflicto_armado_en_Macedonia_del_Norte_de_2001" }] },
    { id: 73, titulo: "Libia (2015-19)", fecha: "2015-02-19", lat: 26.3351, lng: 17.2283, continente: "África", tipo: "Operaciones militares", resumen: "Segunda guerra civil.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Segunda_guerra_civil_libia" }] },
    { id: 74, titulo: "Níger (2017)", fecha: "2017-10-04", lat: 13.5127, lng: 2.1128, continente: "África", tipo: "Operación militar", resumen: "Antiterrorismo.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Presencia_militar_de_Estados_Unidos_en_Níger" }] },
    { id: 75, titulo: "Venezuela (Sanciones)", fecha: "2015-03-09", lat: 10.4806, lng: -66.9036, continente: "América del Sur", tipo: "Sanciones económicas", resumen: "Restricciones financieras.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Sanciones_internacionales_durante_la_crisis_en_Venezuela" }] },
    { id: 76, titulo: "Siria (Ataque 2017)", fecha: "2017-04-07", lat: 35.0, lng: 38.0, continente: "Medio Oriente", tipo: "Ataque aéreo", resumen: "Contra base aérea.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Ataque_con_misiles_a_Siria_de_abril_de_2017" }] },
    { id: 77, titulo: "Siria (Ataque 2018)", fecha: "2018-04-14", lat: 34.8021, lng: 38.9968, continente: "Medio Oriente", tipo: "Ataque aéreo", resumen: "Instalaciones de armas químicas.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Ataques_con_misiles_a_Siria_de_2018" }] },
    { id: 78, titulo: "Burkina Faso", fecha: "2018-01-01", lat: 12.2383, lng: -1.5616, continente: "África", tipo: "Apoyo militar", resumen: "Cooperación y entrenamiento.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_%C3%81frica" }] },
    { id: 79, titulo: "Somalia (2022)", fecha: "2022-05-16", lat: 2.0469, lng: 45.3182, continente: "África", tipo: "Despliegue militar", resumen: "Contra Al-Shabaab.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Somalia" }] },
    { id: 80, titulo: "Irak (2023)", fecha: "2023-10-19", lat: 33.2232, lng: 43.6793, continente: "Medio Oriente", tipo: "Intervención militar", resumen: "Operaciones recientes.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Intervención_estadounidense_en_Irak" }] },
  
    { id: 81, titulo: "Presencia militar de EE.UU. en Polonia", fecha: "2017-01-01", lat: 51.9194, lng: 19.1451, continente: "Europa", tipo: "Despliegue militar", resumen: "Despliegue de tropas en el marco de la OTAN.", fuentes: [{ nombre: "Wikipedia", url: "https://es.wikipedia.org/wiki/Presencia_militar_de_Estados_Unidos_en_Polonia" }] }
      
      
      
      
  ];

  // --- MAPA ---
  const map = L.map('map').setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  eventos.forEach(evt => {
    L.marker([evt.lat, evt.lng]).addTo(map).bindPopup(`
      <b>${evt.titulo}</b><br>
      <i>${evt.fecha}</i><br>
      <p>${evt.resumen}</p>
      <a href="${evt.fuentes[0].url}" target="_blank">Fuente: ${evt.fuentes[0].nombre}</a>
    `);
  });

  // --- LÍNEA DE TIEMPO (REPARACIÓN: VENTANA DE TIEMPO) ---
  const items = new vis.DataSet(eventos.map(e => ({ id: e.id, content: e.titulo, start: e.fecha })));
  const timelineOptions = {
    height: '100%',
    start: '1940-01-01', // Ventana inicial para no sobrecargar
    end: '2025-01-01',
    maxHeight: '180px'
  };
  new vis.Timeline(document.getElementById('timeline'), items, timelineOptions);

  // --- GRÁFICO (REPARACIÓN: TIMING Y CÁLCULO) ---
  function crearGrafico() {
    const conteo = {};
    eventos.forEach(e => conteo[e.continente] = (conteo[e.continente] || 0) + 1);

    new Chart(document.getElementById('continentChart'), {
      type: 'pie',
      data: {
        labels: Object.keys(conteo),
        datasets: [{
          data: Object.values(conteo),
          backgroundColor: ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
          legend: { display: false }, // Ocultar leyenda para ahorrar espacio
          title: { display: true, text: 'Eventos por Continente', font: { size: 10 } }
        }
      }
    });
  }

  // Delay de seguridad para asegurar que el DOM y el CSS están aplicados
  setTimeout(crearGrafico, 500);
});