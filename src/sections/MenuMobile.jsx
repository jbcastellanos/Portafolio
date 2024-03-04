import React, {useState} from 'react';
import { CloseIcon, MenuIcon, IconGithub, IconLinkedin, IconEmail, IconMain } from "../assets/Icons";

export function MenuMobile(props) {

    const [show, setShow] = useState(false)

    const handleChange = () => {
       setShow(!show)     
    }

    return(
        <>
            <div className={props.class}>
            <a href="#seccion1" ><IconMain class="text-v2-0 w-10 ml-5"/></a>
            </div>

            <div className={props.class}>
                
                <button onClick={handleChange}>
                    <MenuIcon class="w-8 mr-7 hover:animate-spin-counter-clockwise hover:animate-duration-1000"/>
                </button>

                <div className={show ? "w-10/12 max-w-[450px] h-[90vh] absolute top-0 right-0 bg-[#39433e] flex flex-col p-7 animate-blurred-fade-in gap-4 justify-between text-black rounded-l-lg text-sm": "hidden"}>
                    <div className="flex flex-col gap-5 text-center">
                        <button onClick={handleChange} className="bg-v2-0 rounded-md w-fit">
                            <CloseIcon class="w-3 m-2 fill-black text-black"/>
                        </button>
                        <div className="mb-3 bg-black h-[5px]"></div>
                        <a href='#seccion1'onClick={handleChange} className="bg-v2-0 flex justify-center items-center rounded-2xl p-3 w-full">Inicio</a>
                        <a href='#seccion2'onClick={handleChange} className="bg-v2-0 flex justify-center items-center rounded-2xl p-3 w-full">Sobre mí</a>
                        <a href='#seccion3'onClick={handleChange} className="bg-v2-0 flex justify-center items-center rounded-2xl p-3 w-full">Portafolio</a>
                        <a href='#seccion4'onClick={handleChange} className="bg-v2-0 flex justify-center items-center rounded-2xl p-3 w-full">Curriculum</a>
                    </div>
                    <div>
                        <div className='w-full flex justify-center gap-10'>
                            <a href="https://github.com/jbcastellanos" target="_blank"><IconGithub class="w-9 rounded-full shadow-main"/></a>
                            <a href="https://www.linkedin.com/in/juan-diego-benavidez-84b519212/" target="_blank"><IconLinkedin class="w-9 rounded-full shadow-main"/></a>
                            <a href="mailto:bmcastellanos3@gmail.com"><IconEmail  class="w-9 rounded-full shadow-main"/></a>
                        </div>
                        <div className="my-7 bg-black h-[5px]"></div>
                        <h1 className="text-sm whitespace-nowrap text-center bg-v2-0 flex justify-center items-center rounded-2xl p-2 w-full"><span className="mr-1 text-lg">©</span> JUAN DIEGO BENAVIDEZ</h1>
                    </div>
                </div>
            </div>
        </>
    )
}