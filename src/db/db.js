import {ReactComponent as HTML} from '../img/icons/html.svg';
import {ReactComponent as CSS} from '../img/icons/css.svg';
import {ReactComponent as JS} from '../img/icons/js.svg';
import {ReactComponent as React} from '../img/icons/react.svg';
import {ReactComponent as Archicad} from '../img/icons/archicad.svg';
import {ReactComponent as Grass} from '../img/icons/grass.svg';
import {ReactComponent as AI} from '../img/icons/ai.svg';
import {ReactComponent as EN} from '../img/icons/en.svg';
import {ReactComponent as PL} from '../img/icons/pl.svg';

import ArchitectureIcon from '@mui/icons-material/Architecture';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import WebIcon from '@mui/icons-material/Web';


const age = Math.floor((Date.now() - new Date(1998, 7, 26, 0, 0, 0)) / 31556952000);

const main = {
    nav: ['About me', 'Studies and Courses', 'Skills', 'Experience', 'Projects', 'Contact'],
    title: 'Hi!🙋🏻‍♀️  My name is Yuliia Paziura',
    subtitle: 'I am a web-developer',
    theme: ['light themme', 'spring themme', 'dark themme'],
    back: 'Back to main page'
}
const mainUA = {
    nav: ['Про мене', 'Навчання та курси', 'Навички', 'Досвід', 'Проєкти',  'Контакти'],
    title: `Привіт!🙋🏻‍♀️  Мене звати Пазюра Юлія`,
    subtitle: 'Я - веб-розробник',
    theme: ['світла тема', 'весняна тема', 'темна тема'],
    back: 'Назад до головної сторінки'
}

const aboutMe = {
    title: 'About me',
    text: [
        `My name is Yuliia. I am ${age} and I am from Kyiv. I graduated from the Lublin University of Technology (Poland). Having received a diploma of an engineer-architect, I returned to Kyiv. I work as a developer assistant in the Archimatika architectural bureau. `,
        `I started my career as a BIM-assistant. My responsibilities included writing scripts to automate the workflows of architects, getting fast calculations, creating parametric geometry.`,
        `Since 2020, I have moved to the position of assistant developer. I was in charge of creating and maintaining a database of employees. Soon I began to work with this data, transforming it and making various kinds of presentations (Power BI, creating a website).`,
        `Now I am open to offers and new job as a trainee/junior web-developer.`
    ],
}

const aboutMeUA = {
    title: 'Про мене',
    text: [
        `Мене звати Юля. Мені ${age} роки і я з Києва. Я закінчила Люблінську Політехніку (Польща). Отримавши диплом інженера-архітектора, повернулася до Києва. Працюю помічником розробника у архітектурному бюро "Архіматика".`,
        `Розпочала свою кар'єру з позиції BIM-ассистента. До моїх обов'язків входило написання скриптів для автоматизації робочих процесів архітекторів, отримання швидких розрахунків, створення параметричної геометрії.`,
        `З 2020 року я перейшла на позицію помічника розробника. Займалася створенням та підтримкою бази даних співробітників. Незабаром почала працювати з цими даними, обробляючи їх і роблячи різноманітні презентації (звіти в Power BI, створення вебсайту).`,
        `Зараз я відкрита для пропозицій та роботи у якості стажера/молодшого веб-розробника.`
    ],
}

const studies = {
    title: 'Studies and Courses',
    stud: [ 
/*         {
        title:'Gimnasium 315',
        interval: '2004 - 2015',
        text:'Studied at the gymnasium with in-depth study of foreign languages, a mathematical class. Graduated with honors.'
    }, */
     {
        title: 'Lublin University of Technology',
        interval: '2015 - 2019',
        text:'I studied at the faculty of Civil Engineering and Architecture, the department of Architecture. I got the degree of engineer architect.' 
    },
     {
        title:'Udemy courses. Web-development',
        interval: '2021 - 2022',
        text:' I completed courses in web-development (HTML, CSS)'
    },
     {
        title:'Udemy courses. Javascript + React',
        interval: '2021 - 2022',
        text:' I completed courses in Javascript + React'
    }]
}

const studiesUA = {
    title: 'Навчання та Курси',
    stud:[ 
/*         {
        title:'Гімназія 315',
        interval: '2004 - 2015',
        text:'Навчалася в гімназії з поглибленим вивченням іноземних мов.'
    }, */
    {
        title: 'Люблінська Політехніка',
        interval: '2015 - 2019',
        text:'Навчалась на факультеті Будівництва та Архітектури, напрямок Архітектура. Отримала ступінь інженера-архітектора.' 
    },
     {
        title:'Udemy курси. Веб-розробка',
        interval: '2021 - 2022',
        text:' Закінчила курси по веб-розробці (HTML, CSS)'
    },
    {
        title:'Udemy курси. JavaScript + React',
        interval: '2021 - 2022',
        text:'Закінчила курси по JavaScript + React'
    }]
}

const skills = {
    title: 'Skills',
    skills: [
        {
            title: 'HTML',
            rate: 3,
            text: 'Experience in semantic and adaptive layout.',
            Image: HTML,
        },
        {
            title: 'CSS',
            rate: 3,
            text: 'BEM methodology usage.',
            Image: CSS,
        },
        {
            title: 'JavaScript',
            rate: 2,
            text: 'Basic knowledge of vanila JS, OOP principals.',
            Image: JS,
        },
        {
            title: 'React',
            rate: 2,
            text: 'Basic knowledge and practice in React framework.',
            Image: React,
        },
        {
            title: 'Archicad',
            rate: 5,
            text: 'Advanced knowledge and tones of projects.',
            Image: Archicad,
        },
        {
            title: 'Grasshopper + Rhino',
            rate: 4,
            text: 'Advanced knowledge, many working scripts.',
            Image: Grass,
        },
        {
            title: 'Adobe Illustrator',
            rate: 5,
            text: 'Advanced knowledge and practice.',
            Image: AI,
        },
        {
            title: 'Language. English',
            rate: 3,
            text: 'Intermediate (B1)',
            Image: EN,
        },
        {
            title: 'Language. Polish',
            rate: 4,
            text: 'Upper intermediate (B2)',
            Image: PL,
        }
    ]
}

const skillsUA = {
    title: 'Навички',
    skills: [
        {
            title: 'HTML',
            rate: 3,
            text: 'Досвід в семантичній та адаптивній верстці.',
            Image: HTML,
        },
        {
            title: 'CSS',
            rate: 3,
            text: 'Використання методології BEM',
            Image: CSS,
        },
        {
            title: 'JavaScript',
            rate: 2,
            text: 'Базові знання JavaScript та принципів ООП.',
            Image: JS,
        },
        {
            title: 'React',
            rate: 2,
            text: 'Базові знання та практика на фреймворці React.',
            Image: React,
        },
        {
            title: 'Archicad',
            rate: 5,
            text: 'Продвинуті знання та купа проектів :)',
            Image: Archicad,
        },
        {
            title: 'Grasshopper + Rhino',
            rate: 4,
            text: 'Продвинуті знання, робочі скріпти.',
            Image: Grass,
        },
        {
            title: 'Adobe Illustrator',
            rate: 5,
            text: 'Продвинуті знання та практика.',
            Image: AI,
        },
        {
            title: 'Мова. Англійська',
            rate: 3,
            text: 'Середній (B1)',
            Image: EN,
        },
        {
            title: 'Мова. Польська',
            rate: 4,
            text: 'Вище середнього (B2)',
            Image: PL,
        }
    ]
}

const footer = {
    framework: 'This website was created using React framework.',
    libraries: 'Libraries I used in this project:',
    libList: ['Material UI', 'react-card-flip']
}

const footerUA = {
    framework: 'Ця сторінка була створена за допомогою фреймворку React.',
    libraries: 'Бібліотеки, використани в проєкті:',
    libList: ['Material UI', 'react-card-flip'] 
}

const experience = {
    titlle: 'Experience',
    tip: 'Tap on the card below to see details',
    work: [
        {
            title: 'Inventarisation. Practice',
            company: 'Lublin University of Technology',
            interval: '2017 - 2017',
            text: 'Inventarisation of catholic church of st. Ignacy Loyola (main entrance).',
            detail: ['taking measurements of the main entrance doors',
                    'creating a drawing of the front',
                    'creating a section drawing ',
                    'detail drawing (steel edging)'
                ]
        },
        {
            title: 'Inventarisation. Practice',
            company: 'Archimatika',
            interval: '2018 - 2018',
            text: 'Inventarisation of residential building using CloudPoints.',
            detail: ['work with CloudPoints',
                    'modeling parts of the building (-1 floor, 0 floor, 3 floor)',
                    'measurements for elevation and sections',
                    'work in Archicad, use BIM'
                ]
        },
        {
            title: 'BIM-assistant',
            company: 'Archimatika',
            interval: '2019 - 2020',
            text: 'Automation of workflows, creation of parametric geometry using Grasshopper.',
            detail: ['creating scripts for one-time issue',
                    'creating comprehensive solutions',
                    'creating scripts for routine calculations',
                    'work in Grasshopper, Rhino, Archicad, Revit, experience in writing code on Python/C#'
                ]
        },
        {
            title: 'Developer-assistant',
            company: 'Archimatika',
            interval: '2020 - now',
            text: 'Creation of workers database based on Dataverse and supporting. Working with data, their transformation and presentation.',
            detail: ['deployment workers database',
                    'updating data in DB',
                    'creating organizational website using JavaScript/Typescript, React',
                    'work in D365 Human Resources, PowerBI, experience in PortgreSQL, Hasura'
                ]
        },
    ]
}

const experienceUA = {
    titlle: 'Досвід',
    tip: 'Натисніть на карточки нижче, щоб побачити детальну інформацію.',
    work: [
        {
            title: 'Інвентаризація. Практика',
            company: 'Люблінська Політехніка',
            interval: '2017 - 2017',
            text: 'Інвентаризація костелу св. Ігнатія Лойолі (головний вхід).',
            detail: ['обміри дверей головного входу',
                    'створення креслення фронтальної частини',
                    'створення креслення перерізу',
                    'створення креслення деталі (металева окантовка)'
                ]
        },
        {
            title: 'Інвентаризація. Практика',
            company: 'Archimatika',
            interval: '2018 - 2018',
            text: 'Інвентаризація житловоі будівлі з використанням техніки CloudPoints.',
            detail: ['робота з CloudPoints',
                    'моделювання частин будинку (-1 рівень, 0 рівень, 3 рівень)',
                    'обміри фасадів і перерізів',
                    'робота в Archicad, use BIM'
                ]
        },
        {
            title: 'BIM-асистент',
            company: 'Archimatika',
            interval: '2019 - 2020',
            text: 'Автоматизація робочих процесів, створення параметричної геометрії з використанням Grasshopper.',
            detail: ['створення скріптв для вирішення одноразових задач',
                    'створення комплексних рішень',
                    'створення скріптув для рутинних розрахунків',
                    'робота в Grasshopper, Rhino, Archicad, Revit, досвід написання коду на Python/C#'
                ]
        },
        {
            title: 'Помічник розробника',
            company: 'Archimatika',
            interval: '2020 - зараз',
            text: 'Створення бази данних працівників на базі Dataverse. Робота з данними, їх трансформація та презентація.',
            detail: ['розгортання бази данних працівників',
                    'оновлення данних в базі данних',
                    'створення корпоративного сайту використовуючи JavaScript/Typescript, React',
                    'робота в D365 Human Resources, PowerBI, досвід в PortgreSQL, Hasura'
                ]
        },
    ]
}

const projects = {
    title: 'Projects',
    more: 'Details',
    projects: [
        {title: 'Web-development',
        Icon: WebIcon,
        path: '/projects_web'
        },
        // {title: 'Architecture & Modeling',
        // Icon: ArchitectureIcon,
        // path: '/projects_arch'},
        {title: 'Rhinoceros & Grasshopper',
        Icon: BubbleChartIcon,
        path: '/projects_grass'}
    ]
}

const projectsUA = {
    title: 'Проєкти',
    more: 'Детальніше',
    projects: [
        {title: 'Web-розробка',
        Icon: WebIcon,
        path: '/projects_web'},
        // {title: 'Архітектура і моделювання',
        // Icon: ArchitectureIcon,
        // path: '/projects_arch'},
        {title: 'Rhinoceros & Grasshopper',
        Icon: BubbleChartIcon,
        path: '/projects_grass'}
    ]
}

const projectWeb = {
    title: 'Web-development',
    textWeb: 'Go to website',
    textGit: 'Go to Github repo',
    arr: [
        {
            title:'Hvoja',
            descr: `Website for online store Hvoja. I created a design, layout and styles. I used React.js and Bootstrap. As a database I created Airtable tables and used REST API ta get data from them. Also there is a form for users. The Emailjs was used to get users data.`,
            pathImg: require('../img/projects-web/hvoja.png'),
            pathWeb: 'https://hvoja.store',
            pathGit: 'https://github.com/yupaziura/store-woodo',
            link: true,
        },
        {
            title:'Messenger',
            descr: `Messenger. Created on React.js. Custom functional components, hooks usage, REST API usage.`,
            pathImg: require('../img/projects-web/messenger.png'),
            pathWeb: 'https://harmonious-queijadas-eeffe1.netlify.app/',
            pathGit: 'https://github.com/yupaziura/test-messenger',
            link: true,
        },
        {
            title:'Wordpress',
            descr: 'Courses for Wordpress. Creating proper project folder structure. Creating HTML layout and adding styles.',
            pathImg: require('../img/projects-web/wordpress.png'),
            pathWeb: '/word/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-wordpress',
        },
        {
            title:'Puls',
            descr: 'Pulse oximeter web store. Creating HTML layout and adding styles. Preprocessor usage (SASS). Set up gulp. Creating forms and their validation. Adding libraries to project (bootstrap, slick, animate). Animation creation. Creating scripts with Jquery.',
            pathImg: require('../img/projects-web/puls.png'),
            pathWeb: '/puls/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-puls',
        },
        {
            title:'Uber',
            descr: 'Uber website. Creating HTML layout and adding styles. Preprocessor usage (SCSS). Set up gulp. Adaptive interface.',
            pathImg: require('../img/projects-web/uber.png'),
            pathWeb: '/uber/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-uber',
        },
        {
            title:'Portfolio example',
            descr: 'Portfolio layout. Creating HTML layout and adding styles. Preprocessor usage (SCSS). Set up gulp. Adaptive interface. Creating forms and their validation. Creating scripts with Jquery.',
            pathImg: require('../img/projects-web/test-portfolio.png'),
            pathWeb: '/portfolio/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-portfolio',
        },
        // {
        //     title:'',
        //     descr: '',
        //     path: [require('../img/projects-web/cred.png')]
        // },
        // {
        //     title:'',
        //     descr: '',
        //     path: [require('../img/projects-web/coffee-shop/coffee-1.png'),
        //            require('../img/projects-web/coffee-shop/coffee-2.png'),
        //            require('../img/projects-web/coffee-shop/coffee-3.png')
        //         ]
        // },
        // {
        //     title:'',
        //     descr: '',
        //     path: [require('../img/projects-web/marvel/marvel-1.png'),
        //            require('../img/projects-web/marvel/marvel-2.png'),
        //            require('../img/projects-web/marvel/marvel-3.png')
        //         ]
        // }
    ]
}

const projectWebUA = {
    title: 'Web розробка',
    textWeb: 'Перейти до вебсайту',
    textGit: 'Перейти до репозиторія',
    arr: [
        {
            title:'Hvoja',
            descr: `Вебсайт для онлайн магазину Hvoja. Створення дизайну, розмітки та стилів. Використання React.js та Bootstrap. Airtable у якості бази даних та REST API щоб отримати дані. Форма для покупців та Emailjs для формування електронних листів.`,
            pathImg: require('../img/projects-web/hvoja.png'),
            pathWeb: 'https://hvojs.store',
            pathGit: 'https://github.com/yupaziura/store-woodo',
            link: true,
        },
        {
            title:'Месенджер',
            descr: `Створений на React.js. Кастомні функціональні компоненти, використання хуків, використання REST API.`,
            pathImg: require('../img/projects-web/messenger.png'),
            pathWeb: 'https://harmonious-queijadas-eeffe1.netlify.app',
            pathGit: 'https://github.com/yupaziura/test-messenger',
            link: true,
        },
        {
            title:'Wordpress',
            descr: 'Вебсайт курсів Wordpress. Створення правильної структури папок. Створення HTML розмітки та додавання стилів.',
            pathImg: require('../img/projects-web/wordpress.png'),
            pathWeb: '/word/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-wordpress',
        },
        {
            title:'Puls',
            descr: 'Онлайн магазин пульсоксиметрів. Створення HTML розмітки та додавання стилів. Використання препроцесора (SASS). Налаштування gulp. Створення форм та їх валідація. Додавання бібліотек до проєкту (bootstrap, slick, animate). Створення анімації. Створення скрітпів за допомогою Jquery.',
            pathImg: require('../img/projects-web/puls.png'),
            pathWeb: '/puls/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-puls',
        },
        {
            title:'Uber',
            descr: 'Вебсайт Uber. Створення HTML розмітки та додавання стилів. Використання препроцесора (SCSS). Налаштування gulp. Створення адаптивного інтерфейсу.',
            pathImg: require('../img/projects-web/uber.png'),
            pathWeb: '/uber/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-uber',
        },
        {
            title:'Portfolio example',
            descr: 'Макет портфоліо. Створення HTML розмітки та додавання стилів. Використання препроцесора (SCSS). Налаштування gulp.  Створення адаптивного інтерфейсу. Створення форм та їх валідація. Створення скрітпів за допомогою Jquery.',
            pathImg: require('../img/projects-web/test-portfolio.png'),
            pathWeb: '/portfolio/index.html',
            pathGit: 'https://github.com/yupaziura/html-lessons-website-portfolio',
        },
        // {
        //     title:'',
        //     descr: '',
        //     path: [require('../img/projects-web/cred.png')]
        // },
        // {
        //     title:'',
        //     descr: '',
        //     path: [require('../img/projects-web/coffee-shop/coffee-1.png'),
        //            require('../img/projects-web/coffee-shop/coffee-2.png'),
        //            require('../img/projects-web/coffee-shop/coffee-3.png')
        //         ]
        // },
        // {
        //     title:'',
        //     descr: '',
        //     path: [require('../img/projects-web/marvel/marvel-1.png'),
        //            require('../img/projects-web/marvel/marvel-2.png'),
        //            require('../img/projects-web/marvel/marvel-3.png')
        //         ]
        // }
    ]
}





export {projectWebUA, projectWeb, projects, projectsUA, experience, experienceUA, main, mainUA, aboutMe, aboutMeUA, studies, studiesUA, skills, skillsUA, footer, footerUA};