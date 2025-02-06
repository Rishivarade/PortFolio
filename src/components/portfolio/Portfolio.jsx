import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Contact from "../contact/Contact";

const items = [
  {
    id: 1,
    img: "/rishai.png",
    title: "RishAI chat-ai (GEMINI api) ",
    desc: "The interface is simple and distraction-free, focusing on the user input/output interaction. This makes it intuitive for both beginners and advanced users.",
    link: "https://github.com/Rishivarade/Chatgpt-OpenAI",
  },
  {
    id: 2,
    img: "/groovemade.png",
    title: "Groovemade Workspace",
    desc: "The Grovemade website showcases a high-end collection of home office accessories, furniture, and organizational tools. Their design emphasizes a blend of functionality and aesthetic appeal, using premium materials like walnut, oak, and maple.",
    link: "https://github.com/Rishivarade/groovemade",
  },
  {
    id: 3,
    img: "/snowe.png",
    title: "Snowe Web Application",
    desc: "The Snowe Home Collection is a lifestyle brand that offers high-quality, minimalist home essentials, including linens, dinnerware, glassware, and furniture. It is designed to provide modern and timeless products for everyday living.",
    link: "https://github.com/Rishivarade/snowe",
  },
  {
    id: 4,
    img: "/movie.png",
    title: "Movie CRUD Project",
    desc: "A Movie CRUD application with a Node.js + Express backend and a React frontend allows users to create, read, update, and delete movies stored in a MongoDB database. The backend provides RESTful APIs, while the frontend offers an interactive UI",
    link: "https://github.com/Rishivarade/Node-js-Diwakar-Sharma/tree/main/MOVIE%20PROJECTS",
  },
  { 
    id: 5,
    img: "/port.png",
    title: "Animated Portfolio Website",
    desc: "Versatile Full Stack Developer skilled in building scalable web applications with modern front-end and back-end technologies. Passionate about creating seamless user experiences and efficient system architectures.",
    link: "https://github.com/Rishivarade/PortFolio",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <>
      <div className="portfolio" ref={ref}>
      <h1 className="head">PROJECTS</h1>
      
        <motion.div className="pList" style={{ x: xTranslate }}>
          <div
            className="empty"
            style={{
              width: window.innerWidth - containerDistance
            }}
          />
          {items.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </motion.div>
        {/* <section />
        <section />
        <section /> */}
        {/* <section /> */}
        {/* <section /> */}
        {/* <div className="pProgress">
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#ddd"
              strokeWidth={20}
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#dd4c62"
              strokeWidth={20}
              style={{ pathLength: scrollYProgress }}
              transform="rotate(-90 80 80)"
            />
          </svg>
         
        </div> */}
      </div>

    </>
  );
};

export default Portfolio;