import React, {useState} from 'react';
import './App.css'
import {AsanaIcon, BootstrapIcon, BtnCard, CssIcon, FigmaIcon, GitIcon, HtmlIcon, IconEmail, IconGithub, IconLinkedin, IconMain, IllustratorIcon, JsIcon, MenuIcon, PythonIcon, ReactIcon, TailwindIcon, WordpressIcon} from "./assets/Icons"
import { Education } from './sections/Education'
import { Jobs } from './sections/Jobs'
import { MenuMobile } from './sections/MenuMobile';
import { MenuDesktop } from './sections/MenuDesktop';
import { Footer } from './sections/Footer';
function App() {

  const [Navbar, setNavbar] = useState(false)

  const handleClick = () => {
    // URL del documento PDF
    const pdfUrl = '/HV_Juan.pdf';
    // Abre el documento PDF en una nueva pestaña
    window.open(pdfUrl, '_blank');
  };
    //Traking of the scroll
  const changeBackground = () => {
    if (scrollY >= 100) {
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <div className="m-0 p-0 h-full max-w-screen font-peace relative">

      {/* Navbar + logo + temas + btn Contáctame */}
      <header className={"py-4 m-0 w-full fixed top-0 flex justify-between items-center z-[9999] " + (Navbar ? "bg-[#000000]" : "bg-[#808080] bg-opacity-[0.05]")}>
        <MenuDesktop/>
        <MenuMobile class="lg:hidden"/>
      </header>

        {/* Gradientes */}

      <div className="h-full bg-black w-full aspect-square absolute right-0 overflow-hidden z-[-1]">
        <div className="bg-[#49705a] h-[900px] aspect-square absolute right-[-450px] top-[-450px] rounded-full blur-[250px] brightness-50"></div>
        <div className="bg-[#49705a] h-[900px] aspect-square absolute left-[-450px] top-[650px] rounded-full blur-[250px] brightness-50"></div>
      </div>

        {/* sección 1 - Logo + social network + btn Curriculum + nombre cargo */}

      <section id="seccion1" className="w-full h-screen flex justify-center items-center gap-14 flex-col md:flex-row">
        <div className='flex md:flex-col gap-12 z-2 order-3 md:order-1'>
          <a href="https://github.com/jbcastellanos" target="_blank"><IconGithub class="w-12 md:ml-4 rounded-full shadow-main hover:animate-pop"/></a>
          <a href="https://www.linkedin.com/in/juan-diego-benavidez-84b519212/" target="_blank"><IconLinkedin class="w-12 md:-m-4 rounded-full shadow-main hover:animate-pop"/></a>
          <a href="mailto:bmcastellanos3@gmail.com"><IconEmail  class="w-12 md:ml-4 rounded-full shadow-main hover:animate-pop"/></a>
        </div>
        <img className="lg:w-[16rem] w-52 aspect-square rounded-full object-cover object-top order-1 hover:animate-pop xl:w-[18rem]" src="./perfil.png" alt="Foto de perfil" />
        <div className="lg:ml-8 order-2 text-2xl md:text-4xl md:text-left text-center xl:text-5xl">
          <h1 className="m-0 text-white inline md:block">JUAN DIEGO</h1>
          <h1 className="m-0 text-white md:-mt-3 inline ml-2 md:ml-0">BENAVIDEZ</h1>
          <h1 className="m-0 mt-2 text-lg  text-v1-0 font-product font-bold xl:text-xl">DESARROLLADOR FRONTEND</h1>
          <div className="mx-auto">
            <button onClick={handleClick} className="bg-v1-0 border-4 border-black rounded-xl px-1 flex justify-center items-center gap-1 mt-8 shadow-botones mx-auto md:mx-0 md:px-5 xl:py-2 hover:animate-squeeze">
              <a className="py-1 pl-1 text-black text-[14px]">Curriculum</a>
              <img className="w-8" src="./Document.svg" alt="Icono Github"/>
            </button>
          </div>
        </div>
      </section>

        {/* sección 2 - Sobre mí + Tecnologías */}

      <div id="seccion2" className="py-8 px-8 flex justify-center flex-col items-center gap-5">
        <h1 className="text-v4-0 text-base w-full text-center md:text-left md:text-2xl max-w-[1200px] xl:text-3xl xl:mb-8"><span className="text-yellow-400 block md:inline md:mr-2 text-2xl xl:text-3xl">CONÓCEME</span> UN POCO MÁS DETALLADAMENTE.</h1>
        <section className="m-0 flex flex-col justify-center items-center">
          <div className= "grid grid-cols-1 md:grid-cols-2 justify-center border-[3px] border-v2-0 rounded-xl  md:relative max-w-[1200px]">
            <div className="p-7 lg:p-10">
              <h3 className="text-v4-0 text-xl m-0 mb-3 lg:text-2xl">Sobre mí</h3>
                <p className="text-white text-sm leading-8 mb-7 font-product font-bold lg:text-lg lg:leading-10">¡Mucho gusto en conocerte! Soy Juan Diego, un desarrollador Frontend con experiencia en la creación de landing pages, así como aplicaciones web y móviles. Me encanta explorar nuevas tecnologías y utilizar frameworks y técnicas innovadoras para seguir creciendo profesionalmente.</p>
              <button onClick={handleClick} className="bg-yellow-400 border-4 border-black rounded-xl px-2 flex justify-center items-center gap-1 mt-8 shadow-botones hover:animate-jiggle">
                <a className="py-2 pl-1 text-black text-[13px]">Curriculum</a>
                <img className="w-6" src="./Document.svg" alt="Icono Github"/>
              </button>
            </div>
            <div className="top-1/2 w-full h-[3px] bg-v2-0 md:absolute md:w-[3px] md:h-full md:left-1/2 md:top-0"></div>
            <div className="p-7 flex flex-col justify-between lg:p-10">
              <h3 className="text-v4-0 text-xl m-0 mb-6 lg:text-2xl">Tecnologías</h3>
              <div className="h-full flex flex-wrap gap-7 justify-center items-center p-2 lg:p-2">
                <HtmlIcon class="w-11 lg:w-14 hover:animate-pop"/>
                <JsIcon class="w-11 lg:w-14 hover:animate-pop" />
                <ReactIcon class="w-11 lg:w-14 hover:animate-pop"/>
                <CssIcon class="w-11 lg:w-14 hover:animate-pop"/>
                <PythonIcon class="w-11 lg:w-14 hover:animate-pop"/>
                <WordpressIcon class="w-11 text-[#01579B] lg:w-14 hover:animate-pop"/>
                <GitIcon class="w-11 text-[#F03C2E] lg:w-14 hover:animate-pop"/>
                <BootstrapIcon class="w-10 text-[#673AB7] lg:w-12 hover:animate-pop"/>
                <TailwindIcon class="w-11 text-[#44a8b3] lg:w-14 hover:animate-pop"/>
                <img className="w-11 lg:w-14 hover:animate-pop" src="./vite.svg" alt="Icono Vite"/>
                <IconGithub class="w-12 lg:w-14 hover:animate-pop"/>
                <AsanaIcon class="w-11 lg:w-14 hover:animate-pop"/>
                <IllustratorIcon class="w-11 lg:w-14 hover:animate-pop"/>
                <FigmaIcon class="w-11 lg:w-14 hover:animate-pop"/>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* sección 3 */} 
        <section id="seccion3" className="h-screen flex justify-center items-center flex-col gap-5 p-8 mt-5">
          <h1 className="text-v4-0 text-base w-full text-center md:text-left md:text-2xl max-w-[1200px] xl:text-3xl xl:mb-8"><span className="text-[#5FD66B] block md:inline md:mr-2 text-2xl xl:text-3xl">PROYECTOS</span> EN LOS QUE HE CONTRIBUIDO.</h1>
          <div className="w-full h-full grid grid-rows-6 grid-flow-col gap-3 rounded-3xl text-base md:text-lg max-w-[1200px] md:gap-6 lg:gap-8 lg:text-2xl">
            <a href='https://vauless.ugc.edu.co/' target="_blank" className="row-span-2 bg-[#E4F330] rounded-2xl flex justify-center items-center relative p-3 hover:animate-pulsing">
              VAULESS
                <BtnCard class="absolute bottom-3 right-3 w-10"/> 
            </a>
            <a href='https://provemel.com/' target="_blank" className="row-span-2 col-span-2 bg-[#464646] rounded-2xl flex justify-center items-center relative text-white p-3 hover:animate-pulsing">
              PROVEMEL
                <BtnCard class="absolute bottom-3 right-3 w-10 text-white"/> 
            </a>
            <a href='https://escalink-estudio.web.app/' target='blank' className="row-span-2 bg-[#64E169] rounded-2xl flex justify-center items-center text-center relative p-3 hover:animate-pulsing">
              ESCALINK <br/> ESTUDIO
                <BtnCard class="absolute bottom-3 right-3 w-10"/> 
            </a>
            <a href='https://centrodeconciliacionjoseignaciotalerolosada.ugc.edu.co/' target="_blank" className="row-span-2 col-span-2 bg-[#AA9FED] rounded-2xl flex justify-center items-center text-center relative text-white p-3 hover:animate-pulsing">
              CENTRO DE <br/> CONCILIACIONES
                <BtnCard class="absolute bottom-3 right-3 w-10 text-white"/> 
            </a>
            <a href='https://unidaddesarrollo.ugc.edu.co/app/marcos/v1/' target='blank' className="row-span-2 col-span-2 bg-[#FF3868] rounded-2xl flex justify-center items-center relative text-white p-3 hover:animate-pulsing">
              ENMARCADOS
                <BtnCard class="absolute bottom-3 right-3 w-10 text-white"/> 
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.appcarne' target='blank' className="row-span-2 bg-[#64E1E1] rounded-2xl flex justify-center items-center text-center relative p-3 hover:animate-pulsing">
              CARNET <br/> UGC
                <BtnCard class="absolute bottom-3 right-3 w-10"/> 
            </a>
          </div>
        </section>

        {/* sección 4  */}

        <section id="seccion4" className="flex items-center flex-col gap-5 p-8">
          <h1 className="text-v4-0 text-base w-full text-center md:text-left md:text-2xl max-w-[1200px] xl:text-3xl xl:mb-8"><span className="text-[#A07EFF] block md:inline md:mr-2 text-2xl xl:text-3xl">MI EXPERIENCIA </span> A TRAVÉS LOS AÑOS.</h1>
          <div className="w-full flex flex-col md:flex-row border-[5px] px-4 py-4 rounded-3xl  border-[#878787] bg-black md:gap-9 max-w-[1200px]">
            <h1 className="text-[#20D67E] text-xl md:hidden">CURRICULUM</h1>
            <Education/>
            <Jobs/>
          </div>
        </section>

        // sección 5
        <div id="seccion5" className="py-8 px-8 flex justify-center flex-col items-center gap-5 lg:py-14">
          <h1 className="text-v4-0 text-base w-full text-center md:text-xl max-w-[1200px] xl:mb-8 xl:text-2xl"><span className="text-[#20D67E] block md:mr-2 text-2xl xl:text-3xl mb-3">CONTÁCTAME</span> Ponte en contacto conmigo a través de las redes sociales o correo electrónico.</h1>  
          <div className='flex justify-center items-center max-w-[1200px] w-full p-6 flex-col gap-10 sm:flex-row md:justify-between'>

              <a href='https://github.com/jbcastellanos' target='blank' className='w-1/2 max-w-60 aspect-square bg-v3-0 rounded-2xl flex justify-center items-center hover:animate-jiggle'>
                <div className="flex gap-3 items-center flex-col">
                  <div className="bg-[#2c2c2c] w-fit flex justify-center items-center p-3 rounded-3xl">
                      <IconGithub class="w-10 md:w-12 lg:w-16 fill-black border-2 rounded-full bg-black border-black p-1"/>
                  </div>
                  <h1 className="text-[#20D67E] text-xl inline">GITHUB</h1>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/juan-diego-benavidez-84b519212/" target="_blank" className='w-1/2 max-w-60 aspect-square bg-v3-0 rounded-2xl flex justify-center items-center hover:animate-jiggle'>
              <div className="flex gap-3 items-center flex-col">
                  <div className="bg-[#2c2c2c] w-fit flex justify-center items-center p-3 rounded-3xl">
                      <IconLinkedin class="w-10 md:w-12 lg:w-16 fill-black border-2 rounded-full bg-black border-black p-1"/>
                  </div>
                  <h1 className="text-[#20D67E] text-xl inline">LINKEDIN</h1>
                </div>
              </a>

              <a href="mailto:bmcastellanos3@gmail.com" className='w-1/2 max-w-60 aspect-square bg-v3-0 rounded-2xl flex justify-center items-center hover:animate-jiggle'>
              <div className="flex gap-3 items-center flex-col">
                  <div className="bg-[#2c2c2c] w-fit flex justify-center items-center p-3 rounded-3xl">
                      <IconEmail class="w-10 md:w-12 lg:w-16 fill-black border-2 rounded-full bg-black border-black p-1"/>
                  </div>
                  <h1 className="text-[#20D67E] text-xl inline">GMAIL</h1>
                </div>
              </a>

          </div>
        </div>

        <footer className="flex justify-center items-center px-8 pb-6 flex-col gap-10 ">
          <Footer/>
        </footer>

      </div>
    </>
  )
}

export default App
