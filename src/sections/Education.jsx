import { EducationIcon, IconMain } from "../assets/Icons";

export function Education() {
    return(
        <> 
        <div className="bg-[rgb(31,31,31)] w-full mt-3 rounded-2xl p-4 md:p-8 md:mt-5">
            <div className="flex gap-3 items-center">
                <div className="bg-[#2c2c2c] w-fit flex justify-center items-center p-3 rounded-3xl hover:animate-pop">
                    <EducationIcon class="w-10 fill-black border-2 rounded-full bg-white p-1"/>
                </div>
                <h1 className="text-white text-lg inline">EDUCACIÓN</h1>
            </div>
            <div className="p-2 mt-2 md:mt-4">
                <h1 className="text-[#A07EFF] text-sm md:text-base">Universidad Distrital Francisco José de Caldas</h1>
                <h1 className="text-[#20D67E] text-base mt-1 md:text-lg">Tecnología en Electrónica</h1>
                <span className="text-[#20D67E] text-base md:text-lg">2017-2020</span>
                <ul className="text-white font-product font-bold pl-4 text-sm mt-3 list-disc md:text-base">
                    <li>Comprender los principios básicos de la electrónica y sus aplicaciones.</li>
                    <li>Creación de circuitos electrónicos y sistemas.</li>
                    <li>Entender los conceptos básicos de programación para aplicaciones relacionadas con la electrónica.</li>
                    <li>Manejo de herramientas y equipos de medición electrónica.</li>
                </ul>
            </div>
            <div className="p-2 md:mt-4">
                <h1 className="text-[#A07EFF] text-sm md:text-base">Universidad Distrital Francisco José de Caldas</h1>
                <h1 className="text-[#20D67E] text-base mt-1 md:text-lg">Ingeniería en Telecomunicaciones </h1>
                <span className="text-[#20D67E] text-base md:text-lg">2021-2023</span>
                <ul className="text-white font-product font-bold pl-4 text-sm mt-3 list-disc md:text-base">
                    <li>Capacidad para identificar y solucionar problemas técnicos en sistemas de comunicación.</li>
                    <li>Diseño de sistemas de comunicación: datos, voz y video.</li>
                    <li>Entender los protocolos y estándares de comunicación utilizados en redes</li>
                    <li>Desarrollo de software para redes de comunicación, gestión de red, y sistemas de control de calidad.</li>
                    <li>Conocimientos sobre los riesgos de seguridad en las redes de comunicación y medidas de protección.</li>
                </ul>
            </div>
            <div className="p-2 md:mt-4">
                <h1 className="text-[#A07EFF] text-sm md:text-base">EduGreen</h1>
                <h1 className="text-[#20D67E] text-base mt-1 md:text-lg">Curso Dibujo de formas y procesos en Adobe Illustrator</h1>
                <span className="text-[#20D67E] text-base md:text-lg">2023</span>
                <ul className="text-white font-product font-bold pl-4 text-sm mt-3 list-disc md:text-base">
                    <li>Comprender los conceptos básicos de la interfaz y las herramientas de Adobe Illustrator.</li>
                    <li>Competencia en el uso de herramientas como la pluma, el lápiz, formas básicas y herramientas de edición de trazados.</li>
                    <li>Aplicar el uso de capas para organizar y gestionar los elementos de diseño de manera eficiente.</li>
                </ul>
            </div>
        </div>    
        </>
    )
}