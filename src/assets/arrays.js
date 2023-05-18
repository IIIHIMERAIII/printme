// services img

import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';
import s4 from '../images/s4.jpg';
import s5 from '../images/s5.jpg';

// recentProjects img

import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import p4 from '../images/p4.jpg';
import p5 from '../images/p5.jpg';
import p6 from '../images/p6.jpg';


// nav items array

export const navItems = [
  { redirect: '/', title: 'Головна' },
  { redirect: '/products', title: 'Продукція' },
  { redirect: '/galleries', title: 'Фотогалерея' },
  { redirect: '/about', title: 'Контакти' },
  
];

// services items array

export const servicesItems = [
    {id: 'Офрмлення композитом', img: s2, title: 'Зовнішня реклама', descr: `Вентильовані композитні фасади є найперспективнішими. Це порівняно недорогий спосіб облицювання, застосування цієї технології надає будівлі сучасного акуратного вигляду. Композитні панелі довговічні, міцні та мають широкий спектр колірних рішень.` },
    {id: 'Брендування авто', img: s3, title: 'Брендування авто', descr:`Реклама на транспорті - ефективний спосіб зробити Ваш бренд і компанію впізнаваними, адже 30% людей стверджують, що при купівлі віддають перевагу тим товарам, рекламу яких вони бачили раніше. Брендування автотранспорту виконується за допомогою нанесення вінілових плівок на авто із застосуванням широкоформатного друку або шляхом використання магнітних наклейок.`},
    {id: 'Виставкові стенди', img: s4, title: 'Виставкові стенди', descr:`Метою будь-якого виставкового стенду є привернення уваги якомога більшої кількості потенційних клієнтів та партнерів. Вирішальне значення мають форма, розташування та зовнішній вигляд. Стенди системи «Pop-Up» зручні в експлуатації та надійні. В основі конструкції – металевий каркас парасолькового типу, який легко зберігати, транспортувати та монтувати. Гнучкі пластикові панелі кріпляться на каркас за допомогою магнітів. Час монтажу: 15-20 хвилин. У комплект може входити об'ємний кейс для транспортування, який за хвилину трансформується на презентаційну тумбу. Обтікаюча форма створює умови для зустрічі з відвідувачами, в той час, коли фронтальна частина є рекламним носієм. Перевага стендів системи «Fold-Up», що швидко монтуються, не тільки у швидкості складання та мобільності, а й у простоті заміни інформативних блоків. Час монтажу: 5 хвилин. Стенди системи Roll-Up призначені для частого застосування за різних умов проведення виставок, але через малу вагу конструкції не розраховані на вітрові навантаження. У комплект входить чохол для транспортування. Час монтажу: 2 хвилини. Стенди на нікельованих трубах є економічним рішенням. Перевага конструкції – можливість легкої заміни графічних зображень. Недолік – складнощі під час транспортування. Час монтажу: 30 хвилин. Успішних Вам виставок та більше клієнтів!`},
    {id: `Інтер'єрна реклама`, img: s5, title: `Інтер'єрна реклама`, descr: `Наша компанія пропонує послуги із комплексного оформлення приміщень Вашого підприємства. Інформаційні стенди та таблички, виготовлені у нас, стануть якісним доповненням Вашого інтер'єру. Професійні дизайнери нашої компанії створять індивідуальний дизайн-проект, а виробничий підрозділ втілить це рішення у життя, використовуючи сучасні матеріали та технології. Ретельно проаналізувавши всі характеристики внутрішнього простору (розмір приміщення, колір стін та загальне освітлення), ми запропонуємо Вам варіант оформлення, що повністю відповідає всім естетичним та функціональним вимогам.`},
    {id: 'Виготовлення печаток та штампів', img: s2, title: `Виготовлення печаток`, descr:`Печатки і штампи давно і міцно увійшли в ужиток нашої життєдіяльності. Вони використовуються і у бізнесі, та у повсякденному побуті. І навіть незважаючи на те, що зараз печатки не є обов'язковими при засвідченні усіляких документів (достатньо підпису власника), проте печатки продовжують виготовлятися масово як первинний ідентифікатор підприємства. Також важлива захисна функція друку. Її присутність на документі у рази ускладнює можливість підробки. Найпоширеніші випадки замовлень на виготовлення печаток та штампів: для новостворених підприємств, при втраті, виготовлення факсиміле.`},
    {id: 'Герби та фірмова символіка', img: s4, title: `Герби та фірмова символіка` , descr:`Найважливішим атрибутом будь-якої компанії чи держустанови є фірмовий знак чи логотип, а у разі держави – герб. Символіка в усі часи використовувалася для швидкої ідентифікації, причому немає необхідності написання довгих назв (якщо це відоме підприємство), а достатньо розмістити на фасаді герб або фірмовий знак цієї компанії. І будь-яка людина, що проходить або проїжджає розуміє відразу, що за компанія знаходиться у даній будівлі. Надання об'ємності таким емблем роблять їх помітнішими на фасадах. У нашому розпорядженні знаходяться сучасні матеріали, які дозволяють реалізувати будь-які візуальні ефекти, щоб підкреслити унікальність Вашої компанії засобів виготовлення Вашої емблеми, герба.` },
    {id: 'Зовнішня реклама', img: s1, title: `Оформлення композитом`, descr: `Основний напрямок діяльності нашої компанії – виготовлення зовнішньої реклами. Наше виробництво оснащене всім необхідним – це комп'ютеризоване фрезерне та лазерне обладнання, зварювальний та складальний цех, бокс для обклеювання автотранспорту, парк друкарського обладнання. Нам під силу проекти будь-якої складності на високому якісному рівні.`},
    {id: 'Сувенірна продукція та поліграфія', img: s3, title: `Сувенірна продукція, поліграфія`, descr: `Наша компанія пропонує якісне виготовлення поліграфічної продукції: рекламної та представницької. Наші дизайнери допоможуть Вам втілити в життя будь-яку, навіть найсміливішу, ідею.Бажаєте зробити комусь приємний сюрприз? Подарунок, що несе інформацію про Ваше підприємство, сприяє запам'ятовуванню компанії чи бренду, оскільки невід'ємно пов'язаний із позитивними емоціями. Брендовані футболки, ручки та брелоки недорогі у виробництві, але обумовлюють хороший маркетинг-ефект, а застосування технології лазерного різання акрилового скла дозволяє створювати ексклюзивну подарункову продукцію, здатну дивувати та радувати.
` },
];

// recent projects array

export const projectsItems = [ 
    { id: 1, img: p1, title: 'Title' },
    { id: 2,img: p2, title: 'Title' },
    { id: 3,img: p3, title: 'Title' },
    { id: 4,img: p4, title: 'Title' },
    { id: 5,img: p5, title: 'Title' },
    { id: 6,img: p6, title: 'Title' },
];

// galleryies array

 export const galleryiesItems = [ 
    { img: p1, title: 'Оформлення фасадів композитом' , id:'1' ,  imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}
     ]
     },
    { img: p2, title: 'Вивіски фасадні, об’ємні літери' , id:'2' ,  imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p3, title: 'Роботи по брендуванню автотранспорта' , id:'3' ,  imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p4, title: 'Символіка' , id:'4' ,  imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p5, title: '3d візуалізація' , id:'5' ,  imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p6, title: 'Комплексне оформлення фасадів' , id:6 ,  imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p1, title: 'Приклади виготовлення виставкових стендів' , id:'7'  , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p2, title: 'Роботи з інтер’єрної реклами' , id:'8'  , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p3, title: 'Роботи з сувенірної продукції та поліграфії' , id:'9'  , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p4, title: 'Світлові короби' , id:'10' , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p5, title: 'Світлодіодні рухомі рядки' , id:'11' , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p6, title: 'Торцеві вивіски' , id:'12' , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p1, title: 'Штендери' , id:'13' , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
    { img: p2, title: 'Несвітлові вивіски' , id:'14' , imgSet: [    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6},
    { original: p1, thumbnail:p1},
    { original: p2, thumbnail:p2},
    { original: p3, thumbnail:p3},
    { original: p4, thumbnail:p4},
    { original: p5, thumbnail:p5},
    { original: p6, thumbnail:p6}]},
];


