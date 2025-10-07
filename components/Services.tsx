import React from "react";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  cost: string;
  image: string;
  button1: string;
}

const services: Service[] = [
  {
    title: "Redefining Wealth Management for UHNWI",
    subtitle: "Private Wealth Systems",
    description:
      "A unique gem in the industry that smooths friction and makes managing complex wealth delightful. A premium experience that is a must-have for any ultra-high net worth individual.",
    cost: "Cost of this type of UI/UX from 450,000 €",
    image:
      "https://reubenteo.com/wp-content/uploads/2014/05/Sunrise-Angkor-Wat.jpg",
    button1: "Explore more",
  },
  {
    title: "Changing the Perception of Digital Banking in Albania",
    subtitle: "KLT Bank App",
    description:
      "We have removed the friction from everyday banking making it easy, without design clutter. Users can now complete tasks digitally without any assistance, enhancing their experience.",
    cost: "Cost of this type of UI/UX from 450,000 €",
    image:
      "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/rmvd1stwo92slbkb5zyw.jpg",
    button1: "Explore more",
  },
  {
    title: "Redefining Wealth Management for UHNWI",
    subtitle: "Private Wealth Systems",
    description:
      "A unique gem in the industry that smooths friction and makes managing complex wealth delightful. A premium experience that is a must-have for any ultra-high net worth individual.",
    cost: "Cost of this type of UI/UX from 450,000 €",
    image:
      "https://reubenteo.com/wp-content/uploads/2014/05/Sunrise-Angkor-Wat.jpg",
    button1: "Explore more",
  },
  {
    title: "Changing the Perception of Digital Banking in Albania",
    subtitle: "KLT Bank App",
    description:
      "We have removed the friction from everyday banking making it easy, without design clutter. Users can now complete tasks digitally without any assistance, enhancing their experience.",
    cost: "Cost of this type of UI/UX from 450,000 €",
    image:
      "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/rmvd1stwo92slbkb5zyw.jpg",
    button1: "Explore more",
  },
];

export const Services: React.FC = () => (
  <section className=" py-20 px-6 md:px-20 text-white">
    <div className="max-w-9xl mx-auto grid md:grid-cols-2 gap-12">
      {services.map((s, i) => (
        <div
          key={i}
          className="relative group glass-p-6 rounded-3xl overflow-hidden h-[450px] cursor-pointer"
        >
          <img
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 opacity-0 group-hover:opacity-100 transition duration-700" />
          <div className="absolute bottom-0 p-8 opacity-0 group-hover:opacity-100 transition duration-700">
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 mb-3">{s.description}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium">
              {s.button1}
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);
