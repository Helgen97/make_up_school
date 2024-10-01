import HomeIcon from "../components/Icons/HomeIcon";
import InfoIcon from "../components/Icons/InfoIcon";
import SchoolIcon from "../components/Icons/SchoolIcon";
import GroupIcon from "../components/Icons/GroupIcon";
import PhotoIcon from "../components/Icons/PhotoIcon";
import SettingsIcon from "../components/Icons/SettingsIcon";

export const SIDEBAR_LINKS = [
  {
    icon: HomeIcon,
    linkText: "Головна",
    href: "/",
  },
  {
    icon: InfoIcon,
    linkText: "Інформація на сторінці",
    href: "/main",
  },
  {
    icon: InfoIcon,
    linkText: "Інформація про школу",
    href: "/school",
  },
  {
    icon: SchoolIcon,
    linkText: "Курси",
    href: "/courses",
  },
  {
    icon: GroupIcon,
    linkText: "Викладачі",
    href: "/teachers",
  },
  {
    icon: PhotoIcon,
    linkText: "Альбоми",
    href: "/albums",
  },
  // {
  //   icon: SettingsIcon,
  //   linkText: "Налаштування",
  //   href: "/settings",
  // },
];

export const API_LINKS = {
  mainDescription: "api/main/1",
  schoolDescription: "api/school/1",
  courses: "api/courses",
  teachers: "api/teachers",
  albums: "api/albums",
}

export const API_URL = import.meta.env.VITE_API_URL;