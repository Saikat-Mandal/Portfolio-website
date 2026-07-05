'use client'

import Image from "next/image";
import mainImage from "@/app/assets/image.jpg"

import { MdOutlineEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { RiDiscordLine } from "react-icons/ri";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { IoLinkSharp } from "react-icons/io5";
import DotRing from "./components/Dotring/Dotring";
import Card from "./components/Card";
import { useRef } from "react";
import { motion } from "motion/react"
import { useDarkMode } from "./context/DarkmodeContext";

import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const content = {
  name: "Saikat Mandal",
  intro: "I'm a Software Engineer crafting powerful web & mobile apps with code, creativity, and coffee.",
  findMe: "Find me on",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  emailMe: "send me an email",
  professionalWorkTitle: "Professional Work",
  postnordTitle: "TCS (Postnord)",
  postnordLocation: "On site, Pune, India · Jul 2024 - Present",
  postnordPosition: "Software Engineer",
  qvikTitle: "Qvik.io",
  qvikLocation: "Remote, Noida, India · Feb 2023 – May 2023",
  qvikPosition: "Software developer intern",
  codeWorkTitle: "Software development projects",
  askItTitle: "Ask it",
  askItDesc: "A Q/A platform for engineers to share doubts and answers",
  fileupTitle: "Fileup",
  fileupDesc: "A file storage platform similar to Google Drive or iCloud",
  gluTitle: "Glu",
  gluDesc: "A hostel booking app for The Hosteller",
  yourBlogsTitle: "Your Blogs",
  yourBlogsDesc: "A blogging platform for everyone",
  madeWith: "Made with love"
};






export default function Home() {

  const { darkModeEnabled, toggleDarkMode } = useDarkMode();

  const MLref = useRef<HTMLDivElement>(null);
  const SoftwareRef = useRef<HTMLDivElement>(null);

  const scrollToML = () => {
    MLref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSoftware = () => {
    SoftwareRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const setDarkMode = () => {
    toggleDarkMode();
  };

  const t = content;

  const softwareProjects = [
    {
      title: "Tiny Url",
      description: "A platform to shorten long URL's",
      link: "https://github.com/Saikat-Mandal/TinyUrl",
      stack: "SpringBoot, Postgres"
    },
    {
      title: "Distributed-Rate-Limiter",
      description: "A highly scalable, enterprise-grade Distributed Request-Throttling Microservice positioned at the network edge (API Gateway layer).",
      link: "https://github.com/Saikat-Mandal/Dropbox-2.0",
      stack: "SpringBoot, Lua, Redis"
    },
    {
      title: "Mouseify",
      description: "An android/Ios app that works as a touchpad for computer wirelessly",
      link: "https://github.com/Saikat-Mandal/Mousepad-websocket",
      stack: "React native Expo, SpringBoot , Socket.io"
    },
    {
      title: t.gluTitle,
      description: t.gluDesc,
      link: "https://github.com/Saikat-Mandal/Hostel-backend",
      stack: "React native, expo, spring boot, postgres"
    },
  ];

  const sendMail = () => {
    window.location.href = "mailto:works.saikat@gmail.com";
  }

  const textColor = darkModeEnabled ? "text-[white]" : "text-[black]"
  const bgColor = darkModeEnabled ? "bg-[#2D2D2D]" : "white"

  // const linkColor = darkModeEnabled && "text-[#CEFF1A]"
  const changeColor = darkModeEnabled && "text-[#E97376]"

  return (
    <div className={`px-6 md:px-20 code-font ${bgColor} ${textColor}`} >
      <div className="hidden lg:block">
        <DotRing />
      </div>

      <div className="flex justify-between py-6">
        <h1 className="text-xl font-bold">{t.name}</h1>

        <div className="flex items-center md:gap-x-12 gap-x-3">
          <p onClick={scrollToML} className={`md:text-xl text-xs font-medium hover:text-amber-300 hover:transition-all duration-300 ${changeColor}`}>Data science / ML</p>
          <p onClick={scrollToSoftware} className={`md:text-xl text-xs font-medium hover:text-blue-400 hover:transition-all duration-300 ${changeColor}`}>Software dev projects</p>
        </div>

        <div className="flex gap-x-3">
          <button className="mr-10 text-xl" onClick={setDarkMode}>
            {darkModeEnabled ? <IoMdSunny /> : <IoMoon />}
          </button>
        </div>
      </div>

      <div className="md:flex items-center mt-10 h-[80vh]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-4xl md:text-4xl font-bold">{t.intro}</p>
          <p className="md:text-2xl my-5">
            {t.findMe} <Link target="_blank" href="https://x.com/saikat_07_" className={`underline ${changeColor}`}>{t.twitter}</Link> or on <Link target="_blank" href="https://www.linkedin.com/in/saikat-mandal-310ab61b0/" className={`underline ${changeColor}`}>{t.linkedin}</Link>,
            or just <span onClick={sendMail} className={`underline ${changeColor}`}>{t.emailMe}</span> to say hello.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={mainImage}
            width={800}
            height={800}
            alt="Picture of the author"
          />
        </motion.div>
      </div>


      {/* work  */}
      <div>
        <h1 className="text-2xl font-bold my-10 text-center md:text-4xl mt-52 ">{t.professionalWorkTitle}</h1>
        <Card>
          <div className="flex items-center justify-between ">
            <p className="md:text-xl font-bold">{t.postnordTitle}</p>
            <p className="text-sm">{t.postnordLocation}</p>
          </div>

          <p className="my-4 font-semibold">{t.postnordPosition}</p>

          <p className="mb-4">• Built RESTful APIs in Java using Spring Boot,
            with Hibernate for PostgreSQL database
            interactions</p>
          <p className="mb-4">•  Designed and maintained automated end-to-end (E2E) tests with Postman,
            alongside integration and unit tests using JUnit</p>

          <p className="mb-4">• Wrote unit and integration test
            cases for React applications using
            React Testing Library and Vitest,
            ensuring frontend reliability.</p>
          <p className="mb-4">• Developed reusable React components
            to enhance UI consistency and
            maintainability.</p>
          <p className="mb-4">•Dockerized and deployed applications,
            streamlining development workflows and
            improving deployment efficiency.</p>

        </Card>

        <Card>
          <div className="flex items-center justify-between gap-x-8 ">
            <p className="md:text-xl font-bold">{t.qvikTitle}</p>
            <p className="text-sm">{t.qvikLocation}</p>
          </div>

          <p className="my-4 font-semibold">{t.qvikPosition}</p>

          <p className="mb-4">• Built RESTful APIs in Java using Spring Boot,
            with Hibernate for PostgreSQL databaseDeveloped an intuitive React.js platform with responsive
            UI using Tailwind CSS, aligned with Figma designs.</p>


          <p className="mb-4">• Implemented JWT-based authentication for secure user authorization.</p>
          <p className="mb-4">• Collaborated within an agile team environment, mentoring new interns
            to enhance team productivity and knowledge sharing.</p>
        </Card>

      </div>

      {/* projects  */}

       {/* software dev */}
      <div ref={SoftwareRef} className="">
        <h1 className="text-2xl font-bold mb-20 mt-40 text-center md:text-4xl">{t.codeWorkTitle}</h1>

        <div className="flex flex-wrap gap-4 max-w-5xl w-full justify-between mx-auto mb-10">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.title}>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{project.title}</p>
                <Link target="_blank" href={project.link}>
                  <IoLinkSharp className="text-blue-400 text-xl hover:scale-150 transition-all duration-300" />
                </Link>
              </div>
              <p className="font-semibold my-2">{project.description}</p>
              <p>• {project.stack}</p>
            </ProjectCard>
          ))}
        </div>
      </div>

      {/* data science and machine learning  */}
      <div ref={MLref} >

        <h1 className="text-2xl font-bold mb-20 mt-40 text-center md:text-4xl">Data science / Machine learning projects</h1>

        <h1 className="text-2xl font-bold mb-10 mt-20 text-center  md:text-2xl">Classification problems</h1>
        <div className="flex flex-wrap gap-4 max-w-5xl w-full justify-between  mx-auto mb-10">
          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Heart disease prediction</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Classification-ML/blob/main/Heart-disease-prediction.ipynb">
                <IoLinkSharp className="text-blue-400 text-xl hover:scale-150 transition-all duration-300" />
              </Link>
            </div>
            <p className=" my-2">Heart Disease Prediction is a classic binary classification problem in machine learning.
              Using datasets like the UCI Heart Disease dataset,
              I built a model to predict the likelihood of heart disease based on medical attributes such as age,
              cholesterol, and blood pressure.
              This project improved my skills in feature engineering and
              highlighted the real-world impact of ML in healthcare.</p>

          </ProjectCard>

          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Iris flower classification</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Classification-ML/blob/main/Project_3_classification.ipynb">
                <IoLinkSharp className="text-blue-400 text-xl hover:scale-150 transition-all duration-300" />
              </Link>
            </div>
            <p className=" my-2">Iris Flower Classification is a well-known multiclass classification problem in machine learning.
              Using the classic Iris dataset, I built a Logistic Regression model from scratch with NumPy and math to classify iris species based on features like petal length,
              petal width, sepal length, and sepal width.
              This project strengthened my understanding of core ML algorithms,
              especially how multiclass classification can be handled using a One-vs-Rest approach,
              and gave me hands-on experience in implementing machine learning logic without any external libraries.

            </p>

          </ProjectCard>

          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Titanic: Machine Learning from Disaster</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Classification-ML/blob/main/Heart-disease-prediction.ipynb">
                <IoLinkSharp className="text-blue-400 text-xl hover:scale-150 transition-all duration-300" />
              </Link>
            </div>
            <p className=" my-2">Titanic: Machine Learning from Disaster is a knowledge competition on Kaggle.
              Many people started practicing in machine learning with this competition, so did I.
              This is a binary classification problem: based on information about Titanic passengers we predict whether they survived or not.
              General description and data are available on Kaggle. Titanic dataset provides interesting opportunities for feature engineering.</p>
          </ProjectCard>
        </div>

        <h1 className="text-2xl font-bold mb-10 mt-20 text-center  md:text-2xl">Custom models</h1>
        <div className="flex flex-wrap gap-4 max-w-5xl w-full justify-between  mx-auto mb-10">
          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Linear regression</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Custom-models-ML/blob/main/Linear_regressioin.ipynb">
                <IoLinkSharp className="text-blue-400 text-xl hover:scale-150 transition-all duration-300" />
              </Link>
            </div>
            <p className=" my-2">I built a Linear Regression model from scratch using only NumPy and Python's built-in math module,
              without relying on machine learning libraries like scikit-learn.
              The model was implemented using the Gradient Descent algorithm to optimize the weights by minimizing the mean squared error.
              I manually handled all the core components, including predictions, loss calculation, gradient computation, and model training.
              This project helped me deeply understand how linear regression works under the hood, including the role of learning rate,
              the effect of iterations, and how convergence happens over time.</p>

          </ProjectCard>

          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Logistic regression</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Custom-models-ML/blob/main/Logistic_Regression.ipynb">
                <IoLinkSharp className="text-blue-400 text-xl hover:scale-150 transition-all duration-300" />
              </Link>
            </div>
            <p className=" my-2">I implemented a Logistic Regression model from scratch using NumPy and the math module in Python,
              without using any machine learning libraries. I manually coded the sigmoid activation function, binary cross-entropy loss,
              and the Gradient Descent algorithm to optimize the model's parameters. The model was trained to classify binary outcomes by learning from labeled data,
              and I added functions to predict probabilities and final class labels. This project gave me a clear understanding of the mathematical foundation behind logistic regression,
              including how it models probabilities and updates weights through backpropagation.</p>
          </ProjectCard>
        </div>

      </div>

      {/* footer  */}
      <footer className="py-10 flex items-center justify-between">
        <div className="flex items-center">
          <span onClick={sendMail}> <MdOutlineEmail className="text-3xl hover:scale-105" /></span>
          <Link target="_blank" href="https://github.com/Saikat-Mandal"><LuGithub className="text-3xl ml-6 hover:scale-105" /></Link>
          <Link target="_blank" href="https://discord.com/channels/_saikat07"><RiDiscordLine className="text-3xl ml-6 hover:scale-105" /></Link>
        </div>
        <p className="text-xs md:text-base">Made with ♡ Arigatou!</p>
      </footer>
    </div>
  );
}