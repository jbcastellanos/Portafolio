import React from 'react';
import {IconMain, IconGithub, IconEmail, IconLinkedin} from "../assets/Icons";

export function Footer() {

    return(
        <>
            <div className="bg-[#1F1F1F] text-white flex justify-center items-center rounded-2xl p-5 w-full md:justify-between max-w-[1200px]">
              <div className="gap-2 flex-wrap hidden md:flex lg:gap-5">
                <a href="#seccion1"><IconMain class="w-8 inline md:w-10"/></a>
                <a href="mailto:bmcastellanos3@gmail.com"><IconEmail class="w-8 inline border-[3px] border-v2-0 rounded-full md:w-10"/></a>
              </div>
              <h1 className="text-sm whitespace-nowrap md:text-base"><span className="mr-1 text-lg">©</span> JUAN DIEGO BENAVIDEZ</h1>
              <div className="gap-2 flex-wrap justify-end hidden md:flex lg:gap-5">
                <a href="https://github.com/jbcastellanos" target="_blank"><IconGithub class="w-8 inline fill-white bg-black rounded-full border-[3px] border-v2-0 md:w-10"/></a>
                <a href="https://www.linkedin.com/in/juan-diego-benavidez-84b519212/" target="_blank"><IconLinkedin class="w-8 inline border-[3px] border-v2-0 rounded-full md:w-10"/></a>
              </div>
            </div>
        </>
    )
}