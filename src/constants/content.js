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

export const API_LINKS = {
    mainDescription: "api/main/1",
    schoolDescription: "api/school/1",
    courses: "api/courses",
    teachers: "api/teachers",
    albums: "api/albums",
    clients: "api/clients"
}

export const API_URL = import.meta.env.VITE_API_URL;