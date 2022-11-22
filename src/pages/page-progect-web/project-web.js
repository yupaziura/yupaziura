// basic
import {projectWeb, projectWebUA} from '../../db/db';
import { Link } from 'react-router-dom';

// conponents
import Title from '../../components/title/title';
import TextArea from '../../components/text-area/text-area';

// styles
import './project-web.scss';


const ProjectWeb = (props) => {
    const obj = props.language === 0? projectWeb : projectWebUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    const elem = obj.arr.map((item, i) => {
        return (
            <TextArea theme={props.theme}  key={i}>
                <div className='web__item'>
                    <div className="web__text">
                        <h3>{item.title}</h3>
                    
                        <p>{item.descr}</p>
                        <div className={`web__link web__link${activeTheme}`}>
                            <a href={item.pathGit}>{obj.textGit}</a>
                        </div>
                        <div className={`web__link web__link${activeTheme}`}>
                            {
                                item.link? <a href={item.pathWeb}>{obj.textWeb}</a>
                                :
                                <Link to={{pathname: item.pathWeb}} target="_blank">{obj.textWeb}</Link>
                            }
                        </div>
                    </div>
                    <div className='web__imgBlock'>
                            <img className='web__img' src={item.pathImg} alt='' />
                    </div>
                </div>
            </TextArea>
        )
    })

    return (
        <div className={`web web${activeTheme}`}>
            <div className="container">
                <Title theme={props.theme} text={obj.title}/>
                {elem}
            </div>
        </div>
    )
}

export default ProjectWeb;