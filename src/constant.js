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
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdPermMedia,
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaAppStoreIos, FaGamepad } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { RiCustomSize } from "react-icons/ri";
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
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
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
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Transforming Vision into Reality",
    desc: "We collaborate closely to understand your vision and turn it into innovative digital solutions that exceed expectations, tailored specifically to your business needs.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Businesses with Technology",
    desc: "Our expertise in cutting-edge technologies ensures that every solution we deliver helps your business thrive in today’s competitive landscape.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Driving Efficiency with Innovation",
    desc: "From automating processes to building intelligent solutions, we bring innovation to the forefront, enabling your business to operate smarter and more efficiently.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven Decision Making",
    desc: "We provide insightful analytics and intelligence to help you make informed decisions, uncover opportunities, and stay ahead in your industry.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Commitment to Excellence",
    desc: "We are dedicated to delivering exceptional service and long-term partnerships, supporting your journey from idea to execution and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Mark S.",
    role: "Founder of UrbanTrends",
    desc: "“Partnering with [you company name] was a breath of fresh air. They not only brought our mobile app and website ideas to life but also helped us think through user experience details that made a huge impact. They truly understood our vision and delivered a solution that has taken our online presence to the next level.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Lisa T.",
    role: "Operations Manager at HealthPro Analytics",
    desc: "“The AI solutions from [you company name] have completely transformed our operations. Their team helped us automate data processes, which has freed up our team for higher-level tasks. The insights and predictive analytics they’ve provided have given us a competitive edge we didn’t think was possible.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "John P.",
    role: "Customer Service Lead at QuickResponse",
    desc: "“The chatbot that [you company name] developed for us has been a game-changer. It’s seamless, efficient, and our customers are happier than ever with the faster response times. We’re saving so much time on routine inquiries, and it’s made a noticeable difference in customer satisfaction.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Samantha K.",
    role: "CEO at Retail Innovations",
    desc: "“Working with [you company name] on our data analytics strategy was one of our best investments. Their team transformed our raw data into meaningful insights that have guided our recent business decisions. We’ve already seen measurable results, and we’re excited to keep building on this foundation.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Alex R.",
    role: "Product Manager at PlaySphere",
    desc: "“The gaming app [you company name] created exceeded all our expectations. From design to development, every aspect was handled with incredible attention to detail. Our players are hooked, and we couldn’t have achieved this level of engagement without their expertise!”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Monica B.",
    role: "CTO at FinSecure",
    desc: "“We were initially overwhelmed by the complexity of blockchain, but [you company name] made it easy to understand and implement. Their team developed a secure blockchain solution tailored to our needs, and it’s given us and our clients peace of mind in every transaction.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Daniel L.",
    role: "Head of Product at InsightIQ",
    desc: "“Thanks to [you company name], we’ve integrated machine learning into our products, giving us a new level of insight into customer behavior. Their team’s knowledge and hands-on approach made the entire process smooth and rewarding. It’s changed the way we operate.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Claire J.",
    role: "IT Director at GlobalTech Solutions",
    desc: "“The cloud migration and management services we received from [you company name] have been invaluable. They took us from a traditional setup to a flexible cloud environment, allowing us to scale easily. It’s been a huge boost for our team’s productivity.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Evan W.",
    role: "Operations Director at Streamline Logistics",
    desc: "“Implementing RPA with [you company name] has transformed our day-to-day operations. Tasks that used to be time-consuming are now handled quickly and accurately, giving our team more freedom to focus on strategic initiatives. The impact on efficiency is undeniable.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
    description:
      "A beauty and wellness app offering personalized skincare and grooming solutions.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation at Heart",
    description:
      "At [you company name], innovation is at the core of everything we do. We continuously embrace emerging technologies and industry trends to craft future-ready solutions that redefine possibilities.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We adopt a personalized approach, customizing each project to align seamlessly with your specific requirements. We collaborate closely with our clients, fostering long-term partnerships built on trust, transparency, and shared success.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Quality and reliability form the foundation of our work. We take pride in crafting world-class digital solutions that are robust, scalable, and secure. Every project undergoes thorough quality assurance.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Innovation with Purpose",
    description:
      "We believe that technology is only as valuable as the purpose it serves. Our mission is to harness the power of technology to create meaningful impacts—streamlining operations, elevating customer experiences, and driving business growth.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End to End Solutions",
    description:
      "We provide a comprehensive range of services, ensuring end-to-end support from initial concept to deployment and beyond. Our aim is to be your trusted partner throughout your digital journey.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
