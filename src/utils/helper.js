import CardImgOne from '../assets/images/png/project-card-img-1.png'
import CardImgTwo from '../assets/images/png/project-card-img-2.png'
import CardImgThree from '../assets/images/png/project-card-img-3.png'
import CardImgFour from '../assets/images/png/project-card-img-4.png'
import { ServicesCardImgFive, ServicesCardImgFour, ServicesCardImgOne, ServicesCardImgThree, ServicesCardImgTwo } from './icons';

export const HEADER_LIST = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "Services",
        link: "#services",
    },
    {
        title: "Projects",
        link: "#projects",
    },
    {
        title: "About",
        link: "#about",
    },
];
export const PROJECT_CARDS_LIST = [
    {
        image: CardImgOne,
        title: "Nubbies",
        countDown: "15 : 54 : 12",
        nft: "NFT",
    },
    {
        image: CardImgTwo,
        title: "Nekozuma",
        countDown: "15 : 54 : 12",
        nft: "NFT",
    },
    {
        image: CardImgThree,
        title: "Galactium",
        countDown: "15 : 54 : 12",
        nft: "NFT",
    },
    {
        image: CardImgFour,
        title: "Frenz Forever ",
        countDown: "15 : 54 : 12",
        nft: "NFT",
    },
];
export const SERVICES_CARDS_LIST = [
    {
        image: <ServicesCardImgOne/>,
        title: "Smart Contract",
        description: "Tailored smart contracts to fit your needs, no matter the size. No idea is too big, too small, or too degen...",
    },
    {
        image: <ServicesCardImgTwo/>,
        title: "Web3 Services",
        content: [
            "Metmask integration",
            "NFT's",
            "Dapps",
            "Tokenomics",
            "Metaverse AR/VR",
            "SDK Gaming Integration",
        ],
    },
    {
        image: <ServicesCardImgThree/>,
        title: "Smart Contract ",
        description: "We have worked with some of the spaces most reputable figures to drive audiences.",
    },
    {
        image: <ServicesCardImgFour/>,
        title: "Consultation",
        description: "Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action.",
    },
    {
        image: <ServicesCardImgFive/>,
        title: "NFT Services",
        description: "NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day.",
    },
];
