/*Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante
* (nombre, edad y sexo). El dato sexo es una letra F o M (femenino - masculino).
* Se desean procesar estos registros de estudiantes para determinar: a. la edad promedio,
* b. el nombre del estudiante con mayor edad, c. el porcentaje de chicas que son mayor de edad.
* El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18),
* la salida requerida presenta el siguiente formato:
* Edad promedio: 18.25
* Estudiante con mayor edad: José
* Porcentaje de chicas mayor de edad: 100% */

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Salon from "./Cl_Salon.js";

let estudiante1 = new Cl_Estudiante ("Luis", 16, "m")
let estudiante2 = new Cl_Estudiante ("Ana", 19, "f")
let estudiante3 = new Cl_Estudiante ("Jose", 20, "m")
let estudiante4 = new Cl_Estudiante ("Carmen", 18, "f")

let todoSalon = new Cl_Salon();
todoSalon.procesarEstudiante (estudiante1);
todoSalon.procesarEstudiante (estudiante2);
todoSalon.procesarEstudiante (estudiante3);
todoSalon.procesarEstudiante (estudiante4);

let salida = document.getElementById ("Resultados");
salida.innerHTML+= "Resultados: <br>";
salida.innerHTML+= "La edad promedio es: "+todoSalon.edadPromedio() +"<br>";
salida.innerHTML+= "El nombre del estudiante con mayor edad es: "+todoSalon.devolverMayor() +"<br>";
salida.innerHTML+= "El porcentaje de chicas que son mayor de edad es: "+todoSalon.porcentajeChicaMayor() +"%";