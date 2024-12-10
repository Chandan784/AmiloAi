
// NAVIGATION LINK CONFIGURATION

import { FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TWITTER_LINK } from "./constants";

export const NAVIGATION_LINK_LIST = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "",
    },
    {
        title: "Careers",
        url: "",
    },
    {
        title: "Contact",
        url: "",
    },
    {
        title: "Service",
        url: "",
    },

]

export const FOOTER_NAVIGATION_LINK_LIST = [
    {
        title: "USEFUL LINKS",
        footerLinks: [
            {
                title: "Our Services",
                url: "/our-services",
            },
            {
                title: "Payment Methods",
                url: "/payment",
            },
            {
                title: "Services Guide",
                url: "/services",
            },
            {
                title: "FAQs",
                url: "/faqs",
            },
        ]
    },
    {
        title: "OUR SERVICES",
        footerLinks: [
            {
                title: "Cloud Services",
                url: "/our-services",
            },
            {
                title: "Tech Support",
                url: "/payment",
            },
            {
                title: "Data Security",
                url: "/services",
            },
            {
                title: "Software Dev",
                url: "/faqs",
            },
        ]
    },
    {
        title: "ABOUT",
        footerLinks: [
            {
                title: "About Us",
                url: "/our-services",
            },
            {
                title: "Send a Message",
                url: "/payment",
            },
        ]
    },
    {
        title: "OUR ADDRESS",
        address: "12345 Porto Blvd. Suite 1500 Los Angeles, California 90000",
    },
    {
        title: "OUR CONTACTS",
        address: "SUPPORT",
        sales: "SALES",
        number: "800-123-4567",
        salesNumber: "800-123-4568",
    },

];

export const SOCIL_MEDIA_LIST = [
    {
        icon: "facebook",
        url: FACEBOOK_LINK,
    },
    {
        icon: "instagram",
        url: INSTAGRAM_LINK,
    },
    {
        icon: "twitter",
        url: TWITTER_LINK,
    },
    {
        icon: "linkedin",
        url: LINKEDIN_LINK,
    },
];
