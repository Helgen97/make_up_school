export const MENUITEMS = {
    leftMenu: [
        {
            linkId: "home",
            linkIntlId: "home"
        },
        {
            linkId: "about_us",
            linkIntlId: "about_us"
        },
        {
            linkId: "courses",
            linkIntlId: "courses"
        },
    ],
    rightMenu: [
        {
            linkId: "teachers",
            linkIntlId: "teachers"
        },
        {
            linkId: "portfolio",
            linkIntlId: "portfolio"
        },
        {
            linkId: "contacts",
            linkIntlId: "contacts"
        },
    ]
}

export const BREAKPOINTS = {
    319: {
        slidesPerView: 1,
        centeredSlides: true,
    },
    743: {
        slidesPerView: 2,
        spaceBetween: 32,
    },
    1279: {
        slidesPerView: 3,
        spaceBetween: 32,
    },
};

export const MAIN_SCREEN_IMAGES = {
    hrefLink: "/albums",
    images: [
        "./images/album1.jpg",
        "./images/album2.jpg",
        "./images/album3.jpg",
        "./images/album4.jpg",
        "./images/album5.jpg",
        "./images/album6.jpg",
        "./images/album7.jpg",
    ],
};


export const PAGE_CONTENT = {
    mainSectionDescription: {
        "ukr": "Запрошуємо вас на навчання у школі Олени Булах. На наших курсах ви навчитеся застосовувати трендові техніки б'юті індустрії.",
        "en": "We invite you to study at Olena Bulakh's school. In our courses, you will learn how to apply trending techniques in the beauty industry.",
    },
    schoolDescription: {
        "ukr": ["OLENA BULAKH Make Up School є провідною школою візажу в Україні, заснованій Оленою Булах.",
            "Наша професійна команда молодих, талановитих і амбітних викладачів - наша гордість!",
            "Ми вклали усі свої знання та практичний досвід в створення наших авторських курсів для практикуючих візажистів, а також наш унікальний базовий курс для початківців, якому немає аналогів."],
        "en": ["OLENA BULAKH Make Up School is a leading makeup school in Ukraine, founded by Olena Bulakh.",
            "Our professional team of young, talented, and ambitious instructors is our pride!",
            "We have invested all our knowledge and practical experience into creating our signature courses for practicing makeup artists, as well as our unique basic course for beginners, which has no analogs."]
    },
    courses: [
        {
            id: 1,
            imageUrl: "./images/course-image.jpg",
            "ukr": {
                title: "Make Up Basic",
                courseStart: "Кожні 3 тижні",
                coursePrice: "14900 грн",
                courseLessonsAmount: "20 занять + 1 індивідуальний тренінг",
                courseTeacher: "Олена Булах",
                courseProgramTitle: "Теорія + Практика",
                courseProgramList: [
                    "Професія: візажист. Основи косметології та гігієнічні вимоги до роботи. Beauty Case візажиста. Огляд брендів професійної косметики. Продукти, що входять до категорії Must Have. Рекомендації щодо складання стартового набору візажиста.",
                    "Колористика. Анатомія обличчя, її форми та пропорції. Теорія кольорів. Рівень контрастності та її значення в колористиці. Поєднання кольорів у макіяжі відповідно до останніх тенденцій. Корекція та моделювання форми обличчя. Робота візажиста з проблемними ділянками обличчя (кола під очима, шрами, висипання). Особливості виконання кремової, тіньової та олівцевої техніки.",
                    "Brow: оформлення брів різними текстурами, створення ідеальної форми за допомогою make up.",
                    "Nude make up з використанням кремових текстур, волога повіка, ефект мокрого макіяжу.",
                    "Fashion make up: створення образів для зйомок, показів.",
                    "Creative make up.",
                    "Легкий старт make up artist",
                    "ONLINE тренінг з просування себе, як майстра, в Instagram:✔️просування себе ✔️залучення трафіку",
                    "Іспит: теорія + підготовка образу.",
                ]
            },
            "en": {
                courseTitle: "Make Up Basic",
                courseStart: "Кожні 3 тижні",
                coursePrice: "14900 грн",
                courseLessonsAmount: "20 занять + 1 індивідуальний тренінг",
                courseTeacher: "Олена Булах",
                courseProgramTitle: "Теорія + Практика",
                courseProgramList: [
                    "Професія: візажист. Основи косметології та гігієнічні вимоги до роботи. Beauty Case візажиста. Огляд брендів професійної косметики. Продукти, що входять до категорії Must Have. Рекомендації щодо складання стартового набору візажиста.",
                    "Колористика. Анатомія обличчя, її форми та пропорції. Теорія кольорів. Рівень контрастності та її значення в колористиці. Поєднання кольорів у макіяжі відповідно до останніх тенденцій. Корекція та моделювання форми обличчя. Робота візажиста з проблемними ділянками обличчя (кола під очима, шрами, висипання). Особливості виконання кремової, тіньової та олівцевої техніки.",
                    "Brow: оформлення брів різними текстурами, створення ідеальної форми за допомогою make up.",
                    "Nude make up з використанням кремових текстур, волога повіка, ефект мокрого макіяжу.",
                    "Fashion make up: створення образів для зйомок, показів.",
                    "Creative make up.",
                    "Легкий старт make up artist",
                    "ONLINE тренінг з просування себе, як майстра, в Instagram:✔️просування себе ✔️залучення трафіку",
                    "Іспит: теорія + підготовка образу.",
                ]
            }
        },
        {
            id: 2,
            imageUrl: "./images/course-image.jpg",
            "ukr": {
                title: "Make Up Basic",
                courseStart: "Кожні 3 тижні",
                coursePrice: "14900 грн",
                courseLessonsAmount: "20 занять + 1 індивідуальний тренінг",
                courseTeacher: "Олена Булах",
                courseProgramTitle: "Теорія + Практика",
                courseProgramList: [
                    "Професія: візажист. Основи косметології та гігієнічні вимоги до роботи. Beauty Case візажиста. Огляд брендів професійної косметики. Продукти, що входять до категорії Must Have. Рекомендації щодо складання стартового набору візажиста.",
                    "Колористика. Анатомія обличчя, її форми та пропорції. Теорія кольорів. Рівень контрастності та її значення в колористиці. Поєднання кольорів у макіяжі відповідно до останніх тенденцій. Корекція та моделювання форми обличчя. Робота візажиста з проблемними ділянками обличчя (кола під очима, шрами, висипання). Особливості виконання кремової, тіньової та олівцевої техніки.",
                    "Brow: оформлення брів різними текстурами, створення ідеальної форми за допомогою make up.",
                    "Nude make up з використанням кремових текстур, волога повіка, ефект мокрого макіяжу.",
                    "Fashion make up: створення образів для зйомок, показів.",
                    "Creative make up.",
                    "Легкий старт make up artist",
                    "ONLINE тренінг з просування себе, як майстра, в Instagram:✔️просування себе ✔️залучення трафіку",
                    "Іспит: теорія + підготовка образу.",
                ]
            },
            "en": {
                courseTitle: "Make Up Basic",
                courseStart: "Кожні 3 тижні",
                coursePrice: "14900 грн",
                courseLessonsAmount: "20 занять + 1 індивідуальний тренінг",
                courseTeacher: "Олена Булах",
                courseProgramTitle: "Теорія + Практика",
                courseProgramList: [
                    "Професія: візажист. Основи косметології та гігієнічні вимоги до роботи. Beauty Case візажиста. Огляд брендів професійної косметики. Продукти, що входять до категорії Must Have. Рекомендації щодо складання стартового набору візажиста.",
                    "Колористика. Анатомія обличчя, її форми та пропорції. Теорія кольорів. Рівень контрастності та її значення в колористиці. Поєднання кольорів у макіяжі відповідно до останніх тенденцій. Корекція та моделювання форми обличчя. Робота візажиста з проблемними ділянками обличчя (кола під очима, шрами, висипання). Особливості виконання кремової, тіньової та олівцевої техніки.",
                    "Brow: оформлення брів різними текстурами, створення ідеальної форми за допомогою make up.",
                    "Nude make up з використанням кремових текстур, волога повіка, ефект мокрого макіяжу.",
                    "Fashion make up: створення образів для зйомок, показів.",
                    "Creative make up.",
                    "Легкий старт make up artist",
                    "ONLINE тренінг з просування себе, як майстра, в Instagram:✔️просування себе ✔️залучення трафіку",
                    "Іспит: теорія + підготовка образу.",
                ]
            }
        },
        {
            id: 3,
            imageUrl: "./images/course-image.jpg",
            "ukr": {
                title: "Make Up Basic",
                courseStart: "Кожні 3 тижні",
                coursePrice: "14900 грн",
                courseLessonsAmount: "20 занять + 1 індивідуальний тренінг",
                courseTeacher: "Олена Булах",
                courseProgramTitle: "Теорія + Практика",
                courseProgramList: [
                    "Професія: візажист. Основи косметології та гігієнічні вимоги до роботи. Beauty Case візажиста. Огляд брендів професійної косметики. Продукти, що входять до категорії Must Have. Рекомендації щодо складання стартового набору візажиста.",
                    "Колористика. Анатомія обличчя, її форми та пропорції. Теорія кольорів. Рівень контрастності та її значення в колористиці. Поєднання кольорів у макіяжі відповідно до останніх тенденцій. Корекція та моделювання форми обличчя. Робота візажиста з проблемними ділянками обличчя (кола під очима, шрами, висипання). Особливості виконання кремової, тіньової та олівцевої техніки.",
                    "Brow: оформлення брів різними текстурами, створення ідеальної форми за допомогою make up.",
                    "Nude make up з використанням кремових текстур, волога повіка, ефект мокрого макіяжу.",
                    "Fashion make up: створення образів для зйомок, показів.",
                    "Creative make up.",
                    "Легкий старт make up artist",
                    "ONLINE тренінг з просування себе, як майстра, в Instagram:✔️просування себе ✔️залучення трафіку",
                    "Іспит: теорія + підготовка образу.",
                ]
            },
            "en": {
                courseTitle: "Make Up Basic",
                courseStart: "Кожні 3 тижні",
                coursePrice: "14900 грн",
                courseLessonsAmount: "20 занять + 1 індивідуальний тренінг",
                courseTeacher: "Олена Булах",
                courseProgramTitle: "Теорія + Практика",
                courseProgramList: [
                    "Професія: візажист. Основи косметології та гігієнічні вимоги до роботи. Beauty Case візажиста. Огляд брендів професійної косметики. Продукти, що входять до категорії Must Have. Рекомендації щодо складання стартового набору візажиста.",
                    "Колористика. Анатомія обличчя, її форми та пропорції. Теорія кольорів. Рівень контрастності та її значення в колористиці. Поєднання кольорів у макіяжі відповідно до останніх тенденцій. Корекція та моделювання форми обличчя. Робота візажиста з проблемними ділянками обличчя (кола під очима, шрами, висипання). Особливості виконання кремової, тіньової та олівцевої техніки.",
                    "Brow: оформлення брів різними текстурами, створення ідеальної форми за допомогою make up.",
                    "Nude make up з використанням кремових текстур, волога повіка, ефект мокрого макіяжу.",
                    "Fashion make up: створення образів для зйомок, показів.",
                    "Creative make up.",
                    "Легкий старт make up artist",
                    "ONLINE тренінг з просування себе, як майстра, в Instagram:✔️просування себе ✔️залучення трафіку",
                    "Іспит: теорія + підготовка образу.",
                ]
            }
        },
    ],
    teachers: [
        {
            id: 1,
            imageUrl: "./images/teacher-photo.jpg",
            "ukr": {
                teacherName: "Олена Булах",
                teacherOccupation: "Засновниця школи",
                teacherFacts: ["Засновник та провідний викладач школи.", "Більше 6 років досвіду роботи в бʼюті сфері та 1 рік викладання."],
                teacherAchievements: ["Власниця успішного салону краси", "Має понад тисячу задоволених клієнтів.", "Візажист на Miss Ukraine та Ukraine Fashion Week."]
            },
            "en": {
                teacherName: "Олена Булах",
                teacherOccupation: "Засновниця школи",
                teacherFacts: ["Засновник та провідний викладач школи.", "Більше 6 років досвіду роботи в бʼюті сфері та 1 рік викладання."],
                teacherAchievements: ["Власниця успішного салону краси", "Має понад тисячу задоволених клієнтів.", "Візажист на Miss Ukraine та Ukraine Fashion Week."]
            }
        }
    ],
    albums: [
        {
            id: 1,
            imageUrl: "./images/album1.jpg",
            "ukr": {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            "en": {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            photoUrls: ["./images/album1.jpg", "./images/album2.jpg", "./images/album3.jpg", "./images/album4.jpg", "./images/album5.jpg", "./images/album6.jpg", "./images/album7.jpg", "./images/album8.jpg", "./images/album9.jpg", "./images/album10.jpg",]
        },
        {
            id: 2,
            imageUrl: "./images/album2.jpg",
            ukr: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            en: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            photoUrls: ["./images/album1.jpg", "./images/album2.jpg", "./images/album3.jpg", "./images/album4.jpg", "./images/album5.jpg", "./images/album6.jpg", "./images/album7.jpg", "./images/album8.jpg", "./images/album9.jpg", "./images/album10.jpg",]
        },
        {
            id: 3,
            imageUrl: "./images/album3.jpg",
            ukr: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            en: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            photoUrls: ["./images/album1.jpg", "./images/album2.jpg", "./images/album3.jpg", "./images/album4.jpg", "./images/album5.jpg", "./images/album6.jpg", "./images/album7.jpg", "./images/album8.jpg", "./images/album9.jpg", "./images/album10.jpg",]
        },
        {
            id: 4,
            imageUrl: "./images/album4.jpg",
            ukr: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            en: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            photoUrls: ["./images/album1.jpg", "./images/album2.jpg", "./images/album3.jpg", "./images/album4.jpg", "./images/album5.jpg", "./images/album6.jpg", "./images/album7.jpg", "./images/album8.jpg", "./images/album9.jpg", "./images/album10.jpg",]
        },
        {
            id: 5,
            imageUrl: "./images/album5.jpg",
            ukr: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            en: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            photoUrls: ["./images/album1.jpg", "./images/album2.jpg", "./images/album3.jpg", "./images/album4.jpg", "./images/album5.jpg", "./images/album6.jpg", "./images/album7.jpg", "./images/album8.jpg", "./images/album9.jpg", "./images/album10.jpg",]
        },
        {
            id: 6,
            imageUrl: "./images/album6.jpg",
            ukr: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            en: {
                albumTitle: "Olena Bulakh",
                albumDescription: "Портфоліо робіт",
            },
            photoUrls: ["./images/album1.jpg", "./images/album2.jpg", "./images/album3.jpg", "./images/album4.jpg", "./images/album5.jpg", "./images/album6.jpg", "./images/album7.jpg", "./images/album8.jpg", "./images/album9.jpg", "./images/album10.jpg",]
        },
    ]
}
