import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A  𝗙𝘂𝗹𝗹-𝘀𝘁𝗮𝗰𝗸 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝘄𝗶𝘁𝗵 𝟮 𝘆𝗲𝗮𝗿𝘀 of working experience on a
        𝘀𝘁𝗮𝗿𝘁𝘂𝗽, I have gained a strong understanding of various technologies
        including 𝗥𝗲𝗮𝗰𝘁, 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁, 𝗥𝗲𝘀𝘁 𝗔𝗣𝗜, 𝗔𝗪𝗦 𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀, 𝗚𝗶𝘁𝗛𝘂𝗯,
        𝗖𝗦𝗦, 𝗮𝗻𝗱 𝗛𝗧𝗠𝗟, 𝗡𝗼𝗱𝗲.𝗷𝘀 . My primary role is to develop new features and
        maintain the existing ones, while also conducting code reviews and
        optimisation to ensure that the code is running efficiently..
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
