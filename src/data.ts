//Carousel Images
import slide1 from './utils/images/slide1.jpg';
import slide2 from './utils/images/slide2.jpg';
import slide3 from './utils/images/slide3.jpg';
import slide4 from './utils/images/slide4.jpg';
import slide5 from './utils/images/slide5.jpg';
import slide6 from './utils/images/slide6.jpg';
// Row Images
import dress from './utils/images/dresses.jpg';
import electronics from './utils/images/electronics.jpg';
import  electronics2 from './utils/images/electronics2.jpg';
import game from './utils/images/game.jpg';
import headset from './utils/images/headset.jpg';
import healthpersonalcare from './utils/images/healthpersonalcare.jpg';
import jewery from './utils/images/jewery.jpg';
import keyboard from './utils/images/keyboard.jpg';
import toys from './utils/images/toys.jpg';
import kitchen from './utils/images/kitchen.jpg';
import baby from './utils/images/baby.jpg';
import chairs from './utils/images/chairs.jpg';
import computer from './utils/images/computer.jpg';
import watches from './utils/images/watches.jpg';
import mouse from './utils/images/mouse.jpg';







interface Slides {
    id: number,
    url: string
}

export const slides:Slides[] = [
    {id: 1, url: slide1},
    {id: 2, url: slide2},
    {id: 3, url: slide3},
    {id: 4, url: slide4},
    {id: 5, url: slide5},
    {id: 6, url: slide6},
]

const rowdata = [
    {
        _id:1,
        title: 'Electronics',
        imgs: [{url:electronics, id:1}],
        linkTitle: 'See more'
    },
    {
        _id:2,
        title: 'Health & Personal Care',
        imgs: [{url:healthpersonalcare, id:1}],
        linkTitle: 'Shop now' 
    },
    {
        _id:3,
        title: 'Shop by Category',
        imgs: [
            {url: computer, id:1, title: "Computers & Accessories"},
            {url: game, id:1, title: "Video Games"},
            {url: baby, id:1, title: "Baby"},
            {url: toys, id:1, title: "Toys and Games"},
        ],
        linkTitle: 'Shop now' 
    },
]

export const cardTwoImgs =[
    {id:1, imgUrl:computer, title: 'Computer & Accessories'},
    {id:2, imgUrl:game, title: 'Video Games'},
    {id:3, imgUrl:baby, title: 'Baby'},
    {id:4, imgUrl:toys, title: 'Toys & Games'},
];

export const cardTwoImgs2 =[
    {id:1, imgUrl:electronics2, title: 'Electronics'},
    {id:2, imgUrl: watches, title: 'Watches'},
    {id:3, imgUrl:jewery, title: 'Jewery'},
    {id:4, imgUrl: kitchen, title: 'Kitchen'},
];

export const cardTwoImgs3 =[
    {id:1, imgUrl:headset, title: 'Headsets'},
    {id:2, imgUrl: keyboard, title: 'Keyboard'},
    {id:3, imgUrl: mouse, title: 'Computer mice'},
    {id:4, imgUrl: chairs, title: 'Chairs'},
];


export const footer ={
    quickLinkRows : [
        {id:1,
        column:{
            title: "Get to Know Us",
            links: [
                {id:1, title:"Careers"},
                {id:2, title:"Blog"},
                {id:3, title:"About Amazon"},
                {id:4, title:"Investor Relations"},
                {id:5, title:"Amazon Devices"},
                {id:6, title:"Amazon Science"},
            ]
        }},

        {
            id: 2,
            column:{
            title: "Make Money with Us",
            links: [
                {id:1, title:"Sell products on Amazon"},
                {id:2, title:"Sell on Amazon Business"},
                {id:3, title:"Sell apps on Amazon"},
                {id:4, title:"Become an Affiliate"},
                {id:5, title:"Advertise Your Products"},
                {id:6, title:"Self-Publish with Us"},
                {id:7, title:"Host an Amazon Hub"},
                {id:8, title:"See More Make Money with Us"},
            ]}
        },
        
        {
            id: 3,
            column:{
            title: " Amazon Payment Products",
            links: [
                {id:1, title:"Amazon Business Card"},
                {id:2, title:" Shop with Points"},
                {id:3, title:"Reload Your Balance"},
                {id:4, title:" Amazon Currency Converter"}
            ]}
        },

        {
            id: 4,
            column:{
            title: "Let Us Help You",
            links: [
                {id:1, title:"Amazon and COVID-19"},
                {id:2, title:"Your Account"},
                {id:3, title:"Your Orders"},
                {id:4, title:"Shipping Rates & Policies"},
                {id:5, title:"Returns & Replacements"},
                {id:6, title:"Manage Your Content and Devices"},
                {id:7, title:"Amazon Assistant"},
                {id:8, title:"Help"},

            ]}
        }
    ],
    
    amazonServices: [
        {
            id:1,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:2,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:3,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:4,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:5,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        {
            id:6,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        {
            id:7,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:8,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:9,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:10,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:11,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:12,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        {
            id:13,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        {
            id:14,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:15,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:16,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:17,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:18,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:19,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        {
            id:20,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        {
            id:21,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {id:22
        },

        {
            id:23,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },

        {
            id:24,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        {
            id:25,
            title: "Amazon Music",
            link: "Stream millions of songs"
        },
        
    ] 
    
}

export const amazonmenu = [
    {
        id:1,
        title: 'Digital Content & Devices', 
        menuList: [
            {id:1, title: 'Amazon Music'},
            {id:1, title: 'Amazon Music'},
            {id:1, title: 'Amazon Music'},
        ]
    },
    {
        id:2, 
        title: 'Digital Content & Devices', 
        menuList: [
            {id:1, title: 'Amazon Music'},
            {id:2, title: 'Amazon Music'},
            {id:3, title: 'Amazon Music'},
        ]
    },
    {
        id:3, 
        title: 'Digital Content & Devices', 
        menuList: [
            {id:4, title: 'Amazon Music'},
            {id:5, title: 'Amazon Music'},
            {id:6, title: 'Amazon Music'},
        ]
    },
    {
        id:4, 
        title: 'Digital Content & Devices', 
        menuList: [
            {id:7, title: 'Amazon Music'},
            {id:8, title: 'Amazon Music'},
            {id:9, title: 'Amazon Music'},
        ]
    },
   
]