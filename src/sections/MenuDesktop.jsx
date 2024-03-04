import React from 'react';
import {IconMain} from "../assets/Icons";

export function MenuDesktop() {

    return(
        <>
            <div className="justify-center items-center gap-8 font-peace hidden lg:flex">
                <IconMain class="text-v2-0 w-10 ml-5"/>
                <a  href='#seccion1' className="text-v2-0 text-[16px] hover:animate-pop">Inicio</a>
                <a  href='#seccion2' className="text-v2-0 text-[16px] hover:animate-pop">Sobre mí</a>
                <a  href='#seccion3' className="text-v2-0 text-[16px] hover:animate-pop">Portafolio</a>
                <a  href='#seccion4' className="text-v2-0 text-[16px] hover:animate-pop">Curriculum</a>
            </div>
            <button className="py-2 px-3 mr-7 bg-v3-0 rounded-lg border border-solid border-v2-0 hidden lg:flex hover:animate-jiggle">
                <a href='#seccion5' className="text-v2-0 text-sm">Contáctame</a>
            </button>
        </>
    )
}