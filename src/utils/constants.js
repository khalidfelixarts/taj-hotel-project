// import TempImg from "../../public/images/room.JPG";

import CAROUSEL1 from "@/assets/carousel/carousel1.jpg";
import CAROUSEL2 from "@/assets/carousel/carousel2.jpg";
import CAROUSEL3 from "@/assets/carousel/carousel3.jpg";
import CAROUSEL4 from "@/assets/carousel/carousel4.jpg";
import CAROUSEL5 from "@/assets/carousel/carousel5.jpg";
import CAROUSEL6 from "@/assets/carousel/carousel6.jpg";

import ROOM1 from "@/assets/room/room1.jpg";
import ROOM2 from "@/assets/room/room2.jpg";
import ROOM3 from "@/assets/room/room3.jpg";

export class Constants {
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
      src: CAROUSEL1,
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
      src: CAROUSEL2,
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
      src: CAROUSEL3,
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
      src: CAROUSEL4,
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
      src: CAROUSEL5,
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
      src: CAROUSEL6,
    },
  ];

  static Rooms = [
    {
      img: ROOM1,
      type: "Standard",
      rating: 4,
      description:
        "Comfort and affordability meet in our Standard Rooms, providing essential amenities for a pleasant stay.",
      price: "500",
      link: "/book/standard",
    },
    {
      img: ROOM2,
      type: "Duplex",
      rating: 5,
      description:
        "Experience the luxury of space and style with our Duplex rooms, offering a sophisticated two-level layout for ultimate relaxation.",
      price: "1000",
      link: "/book/duplex",
    },
    {
      img: ROOM3,
      type: "Suite",
      rating: 5,
      description:
        "Indulge in luxury and refinement with our Suites, offering spacious accommodations and elevated amenities for an unforgettable stay.",
      price: "1500",
      link: "/book/suite",
    },
  ];
}
