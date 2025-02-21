import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import appdevelopment from "./assets/images/services/appdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import uiuxdevelopment from "./assets/images/services/uiuxdevelopment.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
import { lazy } from "react";
import {
  FaUsers,
  FaCogs,
  FaTrophy,
  FaHandsHelping,
  FaHandshake,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import {
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  appdevelopment,
  datadevelopment,
  blockchaindevelopment,
  uiuxdevelopment,
  clouddevelopment,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  phone: "+91-9000000",
  whatsapp: "+91-900000",
  whatsappbox: "90000000",
  email: "abc@xya.com",
  address: "[your company address]",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    id: 3,
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    id: 4,
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea’s feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    id: 5,
    question: "What kind of AI solutions do you offer?",
    answer:
      "We provide a wide range of AI solutions, including predictive analytics, natural language processing, computer vision, and custom AI model development tailored to your business needs.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

// all services

export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    link: "/services/web-development",
    title: "Web Development",
    desc: `Your website is the cornerstone of your online presence, and we specialize in creating
websites that are not only visually appealing but also highly functional. Whether you need a
simple landing page or a complex web application, we deliver tailor-made solutions designed
to meet your specific business needs.`,
    detailContent:
      "Our Web Development Services Include:\n\n• Custom Website Development: We build websites from scratch, ensuring that they are optimized for speed, security, and user experience.\n• E-commerce Development: We create robust, scalable e-commerce platforms that help you engage customers and drive sales, with seamless payment integration and inventory management.\n• Content Management Systems (CMS): Our CMS solutions empower you to easily manage and update your website’s content, keeping it fresh and relevant.\n• Web Application Development: We develop custom web applications that enhance business functionality and improve user engagement.\n• Ongoing Support & Maintenance: Our job doesn’t end with the launch. We offer continuous maintenance to ensure your website runs smoothly and stays up to date.",
  },
  {
    id: 2,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    link: "/services/app-development",
    title: "App Development",
    desc: `Mobile apps are crucial for businesses aiming to reach and engage their audiences on the go.
At [Your Company Name], we specialize in building mobile apps that offer a seamless, high-
performance experience on both iOS and Android platforms. From concept to deployment,
we ensure that your app is aligned with your business goals and offers an exceptional user
experience.`,
    detailContent:
      "Our App Development Services Include:\n\n• Custom Mobile App Development: We create apps that are fully customized to meet your unique business requirements, with a focus on both design and functionality.\n• Cross-Platform Solutions: Using frameworks like React Native and Flutter, we develop apps that work flawlessly across both iOS and Android, helping you save time and cost.\n• Enterprise Mobile Solutions: We build secure, scalable mobile apps that help enterprises streamline operations, improve employee productivity, and enhance customer experiences.\n• App Design & User Experience: Our team designs apps that are intuitive, engaging, and user-friendly, ensuring a seamless experience for your users.\n• Quality Assurance & Testing: We rigorously test your app to ensure that it’s free of bugs and performs smoothly across different devices.",
  },
  {
    id: 3,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    link: "/services/ai-development",
    title: "Artificial Intelligence Development",
    desc: `Artificial Intelligence (AI) is transforming the way businesses operate, and at [Your
Company Name], we help you harness the power of AI to optimize processes, improve
decision-making, and enhance customer interactions. From predictive analytics to machine
learning and automation, we build AI solutions tailored to your specific business needs.`,
    detailContent:
      "Our AI Development Services Include:\n\n• Machine Learning: We create machine learning models that help you predict trends, automate processes, and make data-driven decisions.\n• Natural Language Processing (NLP): We develop intelligent chatbots and virtual assistants that understand and respond to human language, improving customer service and engagement.\n• Predictive Analytics: Our AI-powered solutions analyze past data to predict future trends, helping you make informed business decisions.\n• Computer Vision: We specialize in developing computer vision solutions that enable machines to analyze and interpret visual data, such as facial recognition and object detection.\n• AI Consultation & Strategy: We guide you through the process of implementing AI in your business, ensuring that the solutions we create are aligned with your goals and objectives.",
  },
  {
    id: 4,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    link: "/services/data-science",
    title: "Data Science Services",
    desc: `Data is one of your most valuable assets, and we help you turn it into actionable insights.
Through advanced analytics, machine learning, and visualization techniques, our data science
services empower you to make smarter business decisions and drive meaningful outcomes.`,
    detailContent:
      "Our Data Science Services Include:\n\n• Data Analysis & Insights: We analyze your data to uncover trends, patterns, and insights that help you make informed, strategic decisions.\n• Predictive Modeling: Our predictive models use historical data to forecast future outcomes, enabling you to anticipate challenges and opportunities.\n• Business Intelligence (BI): We develop BI solutions that give you real-time access to key performance metrics and insights through interactive dashboards and reporting tools.\n• Data Visualization: We transform complex data into easy-to-understand visual formats, making it accessible for stakeholders and decision-makers.\n• Data Cleaning & Integration: We help you cleanse, structure, and integrate your data, ensuring it is accurate and reliable for analysis.",
  },
  {
    id: 5,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    link: "/services/blockchain-development",
    title: "Blockchain Development",
    desc: `Blockchain technology has the potential to revolutionize industries by enhancing
transparency, security, and efficiency. At [Your Company Name], we help businesses
implement blockchain solutions that streamline operations, improve trust, and reduce risks,
whether through smart contracts, cryptocurrencies, or secure data management.`,
    detailContent:
      "Our Blockchain Services Include:\n\n• Smart Contract Development: We design and build automated, self-executing contracts that ensure transparency and reduce the need for intermediaries.\n• Decentralized Applications (dApps): We develop decentralized apps that run on blockchain networks, offering secure, transparent, and tamper-proof functionality.\n• Cryptocurrency Solutions: We provide end-to-end cryptocurrency services, including wallet development, token creation, and exchange platform integration.\n• Private & Public Blockchain Solutions: Whether you need a private blockchain for internal use or a public blockchain for widespread adoption, we create custom solutions to fit your business requirements.\n• Blockchain Integration: We help you integrate blockchain technology with your existing systems, ensuring secure and transparent data management.",
  },
  {
    id: 6,
    img: <FaPaintBrush className="w-6 h-6" />,
    link: "/services/ui-ux-design",
    title: "UI/UX Design",
    desc: `A great user experience is key to the success of any digital product. At [Your Company
Name], we focus on creating user-centric designs that not only look great but also provide
intuitive and seamless experiences. Our UI/UX design services aim to enhance usability and
ensure that your users are engaged and satisfied at every touchpoint.`,
    detailContent:
      "Our UI/UX Design Services Include:\n\n• User Research & Persona Development: We conduct in-depth research to understand your target audience’s needs, behaviors, and pain points, ensuring that the design speaks directly to them.\n• Wireframing & Prototyping: We create wireframes and interactive prototypes to visualize the user experience before development, ensuring alignment with your goals.\n• Responsive Design: Our designs are responsive, ensuring that your website or app provides an optimal experience across devices, whether on desktop, tablet, or mobile.\n• Interaction Design: We focus on creating smooth, intuitive interactions that enhance the user journey, making your digital products easy to use and navigate.\n• Usability Testing: We conduct thorough usability tests to ensure that your product is user-friendly and delivers a positive experience.",
  },
  {
    id: 7,
    img: <IoMdCloudDone className="w-6 h-6" />,
    link: "/services/cloud-computing",
    title: "Cloud Computing & Migration Services",
    desc: `As businesses increasingly move to the cloud, we provide comprehensive cloud computing
services designed to help you take full advantage of cloud technologies. Whether you’re
migrating to the cloud, optimizing your cloud infrastructure, or developing cloud-native
applications, we are here to ensure a smooth and successful transition.`,
    detailContent:
      "Our Cloud Services Include:\n\n• Cloud Migration: We guide you through a seamless migration to the cloud, ensuring minimal downtime and disruption to your operations.\n\n• Cloud Infrastructure Design & Management: We design and manage scalable, secure cloud infrastructure that supports your business goals and improves performance.\n\n• Cloud Application Development: We build cloud-native applications that are designed for scalability, flexibility, and performance, ensuring they meet your business needs.\n\n• DevOps & Continuous Integration (CI)/Continuous Deployment (CD): Our team implements DevOps best practices and CI/CD pipelines to automate your development process and improve efficiency.\n\n• Cloud Security & Compliance: We ensure that your cloud solutions are secure and comply with industry standards, safeguarding your data and maintaining privacy.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <FaUsers className="w-6 h-6" />,
    title: "Experienced Team",
    desc: "Our team consists of professionals with years of experience across various industries. We bring the right skills to every project to ensure your solution is both innovative and effective.",
  },
  {
    img: <FaCogs className="w-6 h-6" />,
    title: "Customized Solutions",
    desc: "We understand that every business is unique. That’s why we develop tailored solutions designed to meet your specific needs and objectives.",
  },
  {
    img: <FaTrophy className="w-6 h-6" />,
    title: "Proven Success",
    desc: "We’ve worked with clients across various industries, delivering successful projects that drive real business results. Our portfolio showcases our ability to execute on time, within budget, and to the highest standards.",
  },
  {
    img: <FaHandsHelping className="w-6 h-6" />,
    title: "Ongoing Support",
    desc: "We’re with you every step of the way – from initial concept to post-launch support. Our team ensures that your solution continues to perform optimally long after it’s deployed.",
  },
  {
    img: <FaHandshake className="w-6 h-6" />,
    title: "Long-Term Partnership",
    desc: "We believe in building lasting relationships. Our focus is on creating ongoing value for our clients, helping them grow and adapt as their needs evolve.",
  },
];

export const missionVisionContent = [
  {
    img: <FaBullseye className="w-6 h-6" />,
    title: "Our Mission",
    desc: "Our mission is to provide businesses with technology-driven solutions that empower them to reach their full potential. We take a personalized approach to each project, ensuring that we understand your specific challenges and objectives. From startups to established enterprises, we tailor our services to help you achieve your goals, whether that’s increasing efficiency, improving customer experience, or gaining a competitive edge. We’re not just focused on delivering technology – we focus on delivering results. By combining industry expertise with a commitment to excellence, we ensure that the solutions we offer provide real value and support your long-term growth.",
  },
  {
    img: <FaEye className="w-6 h-6" />,
    title: "Our Vision",
    desc: "At [Your Company Name], we envision a world where businesses leverage technology to their advantage, staying ahead of the curve in an ever-evolving digital landscape. We aspire to be the go-to partner for companies looking to embrace innovation and transform their operations, whether through custom software solutions, AI-powered tools, or cloud-based services. We are committed to delivering lasting results that help businesses grow, adapt, and succeed. By continually exploring new possibilities and pushing the boundaries of technology, we ensure that our clients always have access to the latest and most effective solutions.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Michael D.",
    role: "CEO at TechSolutions",
    desc: "“Working with [your company name] has been an absolute game-changer for our business. Their expertise in AI and automation helped streamline our workflows, saving us countless hours every week.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Sophia L.",
    role: "Marketing Director at BrandBoost",
    desc: "“The digital strategy crafted by [your company name] propelled our brand to new heights. Their insights and execution were top-notch, leading to significant engagement growth.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "David R.",
    role: "CTO at CloudNet",
    desc: "“The cloud infrastructure set up by [your company name] has been flawless. Their team ensured a smooth transition and provided excellent ongoing support.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Emily W.",
    role: "Founder of EcoStyles",
    desc: "“Their UI/UX design expertise gave our e-commerce store a fresh and modern look. Customers love the new experience, and conversions have improved dramatically.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "James P.",
    role: "Operations Manager at FinTrust",
    desc: "“With the blockchain solutions from [your company name], we’ve enhanced the security and transparency of our financial transactions. The implementation was seamless.”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Olivia H.",
    role: "COO at HealthSync",
    desc: "“Their AI-powered analytics platform has transformed the way we manage patient data. The insights we now have access to are truly invaluable.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Ryan T.",
    role: "Head of Development at InnovateSoft",
    desc: "“From concept to execution, [your company name] delivered an exceptional custom software solution that has scaled effortlessly with our growing business.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Emma K.",
    role: "Product Manager at RetailGenix",
    desc: "“The e-commerce platform they built for us exceeded expectations. Its performance and user experience are outstanding, driving higher customer satisfaction.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "William B.",
    role: "IT Director at SecureNet",
    desc: "“Cybersecurity was a major concern for us, but [your company name] provided robust security solutions that give us confidence in our infrastructure.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation",
    description:
      "We continuously explore new technologies, finding creative solutions to help our clients overcome challenges and seize opportunities.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do. We prioritize their needs and goals, ensuring that every solution we deliver helps them succeed.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Excellence",
    description:
      "Quality is at the core of everything we do. We strive to deliver the best possible results, paying attention to the smallest details.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Collaboration",
    description:
      "We believe in working together. By fostering a collaborative environment, both within our team and with our clients, we ensure the best outcomes.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of honesty and transparency in all our interactions, building trust with our clients and partners.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
