import {
  FaHammer,
  FaAppleAlt,
  FaLuggageCart,
  FaCanadianMapleLeaf,
  FaHistory,
} from 'react-icons/fa';

type NavbarMenu = {
  icon?: any;
  label: string;
  link: string | number;
};

export const searchOpts: NavbarMenu[] = [
  { label: `All`, link: `` },
  { label: `Green Building`, link: `` },
  { label: `Sutainable Agriculture`, link: `` },
  { label: `Work Trade/Volunteer`, link: `` },
  { label: `Environmental Conservation`, link: `` },
  { label: `Eco Lodging`, link: `` },
  { label: `Eco Tourism`, link: `` },
  { label: `Retailer`, link: `` },
  { label: `Food & Beverage`, link: `` },
  { label: `Other`, link: `` },
];

export const buildings = [
  {
    id: 6,
    text: `Environmental Conservation`,
    Icon: FaHammer,
    className: `icon-enviroment`,
  },
  { id: 1, text: `Eco Lodging`, Icon: FaAppleAlt, className: `icon-lodging` },
  { id: 2, text: `Eco Tourism`, Icon: FaHammer, className: `icon-tourism` },
  {
    id: 3,
    text: `Retailer`,
    Icon: FaCanadianMapleLeaf,
    className: `icon-retailer`,
  },
  { id: 4, text: `Food & Bevarage`, Icon: FaHammer, className: `icon-food` },
  { id: 5, text: `Other`, Icon: FaLuggageCart, className: `icon-others` },
];

export const city = [
  { id: 1, text: `San Diego, SU`, Icon: FaHistory },
  { id: 2, text: `US, MS AE`, Icon: FaHistory },
  { id: 3, text: `Canada, MS AE`, Icon: FaHistory },
  { id: 4, text: `US, MS AE`, Icon: FaHistory },
  { id: 5, text: `Malaysia, MS AE`, Icon: FaHistory },
  { id: 6, text: `US, MS AE`, Icon: FaHistory },
];

export const navLinks = [
  { id: 1, link: `Green Building`, Icon: FaHammer, className: `icon-building` },
  {
    id: 2,
    link: `Sustainable Agriculture`,
    Icon: FaAppleAlt,
    className: `icon-agriculture`,
  },
  {
    id: 3,
    link: `Work Trade / Volunteer`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
];

export const mobNavLinks = [
  { id: 1, link: `Green Building`, Icon: FaHammer, className: `icon-building` },
  {
    id: 2,
    link: `Sustainable Agriculture`,
    Icon: FaAppleAlt,
    className: `icon-agriculture`,
  },
  {
    id: 3,
    link: `Work Trade / Volunteer`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 4,
    link: `Environmental Conservation`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 5,
    link: `Eco Lodging`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 6,
    link: `Eco Tourism`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 7,
    link: `Retailer`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 8,
    link: `Food & Beverage`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 9,
    link: `Other`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 10,
    link: `About`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
  {
    id: 11,
    link: `Contact`,
    Icon: FaLuggageCart,
    className: `icon-work`,
  },
];
