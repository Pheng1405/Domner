import React from 'react';
import Typewriter from '../../../node_modules/typewriter-effect/dist/react';
import { useTranslation } from 'react-i18next';
const Header = () =>{
    
    const {t} = useTranslation("header");

    return (
        <>
            <header className='container-head d-flex d-flex align-items-center justify-content-between'>
                <div className="main-info w-100 h-50 d-flex justify-content-between">
                    <h1>{t("greeting")}</h1>
                    <h2>
                        <Typewriter
                                options={{
                                    strings: [
                                        'Travel With Us',
                                        'តោះទៅដើរលេងជាមួយគ្នា',
                                        'ម្នាក់ឯងក៏បាន',

                                    ],
                                    delay: 90,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                    </h2>
                    <button className='btn-start'>{t("start")}</button>
                </div>   
            </header>

            

            
        </>
    )
}
export default Header