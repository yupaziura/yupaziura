// basic
import {React, useState} from 'react';
import {main, mainUA} from '../../db/db';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener';



// components
import ThemeSwitcher from '../theme-switcher/switcher';
import LangSwitcher from '../language-switcher/lang-switcher';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// styles
import './nav.scss';

const Nav = (props) => {
    
    const obj = props.language === 0? main : mainUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    const matches = useMediaQuery('(max-width:992px)');
    
    const [sideBar, setSideBar] = useState(false);

    const close = () => {
        setSideBar(false);
    }




    return (
        <>
            <nav className={`nav nav${activeTheme}`}>

                {matches? 
                    <>
                        <button onClick={()=> setSideBar(true)} className='nav__menu'>
                            <MenuIcon/>
                        </button>
                        
                        <LangSwitcher language={props.language} setLanguage={props.setLanguage}/>
                        <ThemeSwitcher language={props.language} setTheme={props.setTheme} theme={props.theme}/>

                        {
                            sideBar? 
                            <ClickAwayListener onClickAway={close}>
                                <div className={`bar bar${activeTheme}`}>
                                   <button onClick={()=> close()} className='bar__close'>
                                        <CloseIcon/> 
                                   </button>
                                   <ul onClick={()=> close()}>
                                   <div className="nav__linkblock">
                                        <a className="nav__link" href="#about_me">{obj.nav[0]}</a> 
                                    </div>
                                    <div className="nav__linkblock">
                                        <a className="nav__link" href="#studies">{obj.nav[1]}</a> 
                                    </div>                                    <div className="nav__linkblock">
                                        <a className="nav__link" href="#skills">{obj.nav[2]}</a>
                                    </div>
                                    <div className="nav__linkblock">
                                        <a className="nav__link" href="#experience">{obj.nav[3]}</a>
                                    </div>
                                    <div className="nav__linkblock">
                                        <a className="nav__link" href="#projects">{obj.nav[4]}</a>
                                    </div>
                                    <div className="nav__linkblock">
                                        <a className="nav__link" href="#footer">{obj.nav[5]}</a>
                                    </div>
                                   </ul>
                                   
                                   

                                </div>
                            </ClickAwayListener>
                            :
                            null
                        }
                    </>

                    :
                    <>
                        <div className="nav__linkblock">
                            <a className="nav__link" href="#about_me">{obj.nav[0]}</a> 
                        </div>
                        <div className="nav__linkblock">
                            <a className="nav__link" href="#studies">{obj.nav[1]}</a> 
                        </div>                                    <div className="nav__linkblock">
                            <a className="nav__link" href="#skills">{obj.nav[2]}</a>
                        </div>
                        <div className="nav__linkblock">
                            <a className="nav__link" href="#experience">{obj.nav[3]}</a>
                        </div>
                        <div className="nav__linkblock">
                            <a className="nav__link" href="#projects">{obj.nav[4]}</a>
                        </div>
                        <div className="nav__linkblock">
                            <a className="nav__link" href="#footer">{obj.nav[5]}</a>
                        </div>

                        <button onClick={()=>props.setLanguage(1)} className={`nav__linkblock nav__linkblock_language ${props.language === 1? 'nav__linkblock_language_active' : ''}`}>
                        🇺🇦
                        </button>
                        <button onClick={()=>props.setLanguage(0)} className={`nav__linkblock nav__linkblock_language ${props.language === 0? 'nav__linkblock_language_active' : ''}`}>
                        🇬🇧
                        </button>
                        <ThemeSwitcher language={props.language} setTheme={props.setTheme} theme={props.theme}/>

                    </>
                }
            </nav>
        </>
    )
}

export default Nav;