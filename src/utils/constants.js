import M1 from "../../public/assets/carousel/m1.jpg";
import M2 from "../../public/assets/carousel/m2.jpg";
import M3 from "../../public/assets/carousel/m3.jpg";
import M4 from "../../public/assets/carousel/m4.jpg";

import D1 from "../../public/assets/carousel/d1.jpg";
import D2 from "../../public/assets/carousel/d2.jpg";
import D3 from "../../public/assets/carousel/d3.jpg";
import D4 from "../../public/assets/carousel/d4.jpg";

export function createImgUrl(pid) {
  return `https://res.cloudinary.com/de0llaul4/image/upload/v1708862610/${pid}.jpg`;
}

export class Constants {
  static carouselMobile = [{ img: M1 }, { img: M2 }, { img: M3 }, { img: M4 }];
  static carouselDesktop = [{ img: D1 }, { img: D2 }, { img: D3 }, { img: D4 }];

  static carouselData = [
    {
      key: "slide1",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: createImgUrl("Hotel/carousel/vvlppdwmbxmrzq7vfmxv"),
    },
    {
      key: "slide2",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: createImgUrl("Hotel/carousel/te4oh8kavkuipiwhgjjp"),
    },
    {
      key: "slide3",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: createImgUrl("Hotel/carousel/bggeuaprajugof9wzgd6"),
    },
    {
      key: "slide4",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: createImgUrl("Hotel/carousel/cgyb1yz19fnrtc4djxqd"),
    },
    {
      key: "slide5",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: createImgUrl("Hotel/carousel/iz41zm0uirssz1tsujte"),
    },
    {
      key: "slide6",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: createImgUrl("Hotel/carousel/asas5rtce1tehkqqzjck"),
    },
  ];

  static Rooms = [
    {
      img: createImgUrl("Hotel/rooms/cehqo6zlvmxe6yldppq1"),
      type: "Standard",
      rating: 4,
      description:
        "Comfort and affordability meet in our Standard Rooms, providing essential amenities for a pleasant stay.",
      price: "9999",
      link: "/book/standard",
    },
    {
      img: createImgUrl("Hotel/rooms/pymnhderxclteyk54ulc"),
      type: "Duplex",
      rating: 5,
      description:
        "Experience the luxury of space and style with our Duplex rooms, offering a sophisticated two-level layout for ultimate relaxation.",
      price: "19999",
      link: "/book/duplex",
    },
    {
      img: createImgUrl("Hotel/rooms/rzb70d5btfvcxk0zlndn"),
      type: "Suite",
      rating: 5,
      description:
        "Indulge in luxury and refinement with our Suites, offering spacious accommodations and elevated amenities for an unforgettable stay.",
      price: "29999",
      link: "/book/suite",
    },
  ];

  static ParallaxImgURL = [
    createImgUrl("Hotel/parallax/xrbb9ttwthiaqoit2rik"),
    createImgUrl("Hotel/parallax/de2grlpoawmolo6klxse"),
    createImgUrl("Hotel/parallax/zdeurpkvinvp5omnnoka"),
    createImgUrl("Hotel/parallax/stfcvqvaocqefizfal6y"),
    createImgUrl("Hotel/parallax/msytomzjspizcxuxrogl"),
    createImgUrl("Hotel/parallax/w7e9m3h3qmxeu3auppro"),
    createImgUrl("Hotel/parallax/egyppnrlghuo0zt17qm0"),
    createImgUrl("Hotel/parallax/upwnssaaks3drqunjqbv"),
    createImgUrl("Hotel/parallax/ejgbhldp4bi8stogm608"),
    createImgUrl("Hotel/parallax/euxqizxd0k8lyqeswk3g"),
    createImgUrl("Hotel/parallax/izktfiyudwsr2vj38kpe"),
    createImgUrl("Hotel/parallax/i8v5s4b0kbguv4byvxy1"),
  ];
}
