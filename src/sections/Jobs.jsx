import { IconMain, JobIcon } from "../assets/Icons";

export function Jobs() {
    return(
        <> 
        <div className="bg-[#1F1F1F] w-full mt-5 rounded-2xl p-4 md:p-8">
            <div className="flex gap-3 items-center">
                <div className="bg-[#2c2c2c] w-fit flex justify-center items-center p-3 rounded-3xl hover:animate-pop">
                    <JobIcon class="w-10 fill-black border-2 rounded-full bg-white p-1"/>
                </div>
                <h1 className="text-white text-lg inline">TRABAJO</h1>
            </div>
            <div className="p-2 mt-2 md:mt-4">
                <h1 className="text-[#A07EFF] text-sm md:text-base">Universidad La Gran Colombia</h1>
                <h1 className="text-[#20D67E] text-base mt-1 md:text-lg">Desarrollador </h1>
                <span className="text-[#20D67E] text-base md:text-lg">May 2022 - Sep 2023</span>
                <ul className="text-white font-product font-bold pl-4 text-sm mt-3 list-disc md:text-base">
                    <li>Experiencia en el desarrollo de interfaces de usuario (UI) y experiencia de usuario (UX).</li>
                    <li>Dominio de React.js, incluyendo componentes funcionales y Hooks.</li>
                    <li>Experiencia en la integración de APIs RESTful para la comunicación con servidores backend y el intercambio de datos.</li>
                    <li>Familiaridad con Git y plataformas de control de versiones para colaborar en equipos de desarrollo y gestionar el código fuente.</li>
                    <li>Experiencia con frameworks CSS como Bootstrap, Material-UI, o Tailwind CSS para agilizar el desarrollo frontend.</li>
                </ul>
            </div>
            <div className="p-2 md:mt-4">
                <h1 className="text-[#A07EFF] text-sm md:text-base">Control Sistemas Comunicaciones LTDA</h1>
                <h1 className="text-[#20D67E] text-base mt-1 md:text-lg">Técnico electrónico</h1>
                <span className="text-[#20D67E] text-base md:text-lg">Nov 2021 - Abr 2022</span>
                <ul className="text-white font-product font-bold pl-4 text-sm mt-3 list-disc md:text-base">
                    <li>Mantenimiento preventivo y correctivo en sistemas de acceso y seguridad.</li>
                    <li>Cableado estructurado y certificación en los puntos de conexión.</li>
                    <li>Entender los protocolos y estándares de comunicación utilizados en redes</li>
                    <li>Instalación y configuración de dispositivos de seguridad.</li>
                    <li>Levantamiento de bases de datos para la identificación de hardware y software.</li>
                </ul>
            </div>
            <div className="p-2 md:mt-4">
                <h1 className="text-[#A07EFF] text-sm md:text-base">Provemel LTDA</h1>
                <h1 className="text-[#20D67E] text-base mt-1 md:text-lg">Freelancer WordPress</h1>
                <span className="text-[#20D67E] text-base md:text-lg">feb 2021 - May 2021</span>
                <ul className="text-white font-product font-bold pl-4 text-sm mt-3 list-disc md:text-base">
                    <li>Instalación, configuración y administración de plugins y temas en WordPress</li>
                    <li>Diseño y construcción de un sitio web responsivo que se adapten a los diferentes dispositivos</li>
                    <li>Prácticas de SEO para mejorar la visibilidad del sitio en los resultados de búsqueda.</li>
                    <li>Capacidad para organizar y gestionar eficientemente el contenido del sitio, incluyendo la creación de páginas y publicación de entradas de blog.</li>
                    <li>Realizar tareas de mantenimiento regular, actualizar contenido y asegurar el correcto funcionamiento del sitio.</li>
                </ul>
            </div>
        </div>    
        </>
    )
}