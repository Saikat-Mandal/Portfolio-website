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
import { useState } from "react";

// Content translations
const content = {
  en: {
    name: "Saikat Mandal",
    intro: "I'm a Software Engineer crafting powerful web & mobile apps with code, creativity, and coffee.",
    findMe: "Find me on",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    emailMe: "send me an email",
    saying: "saying hi",
    professionalWorkTitle: "Professional Work",
    postnordTitle: "Postnord (TCS)",
    postnordLocation: "On site, Pune India · Jul 2024 - Present",
    postnordPosition: "Software Engineer",
    qvikTitle: "Qvik.io",
    qvikLocation: "Remote, Noida India · Feb 2023 – May 2023",
    qvikPosition: "Software developer intern",
    codeWorkTitle: "Code Work",
    askItTitle: "Ask it",
    askItDesc: "A Q/A platform for engineers to share doubts and answers",
    fileupTitle: "Fileup",
    fileupDesc: "A file storage platform similar to Gdrive / icloud",
    gluTitle: "Glu",
    gluDesc: "A hostel booking app for The hosteller",
    yourBlogsTitle: "Your Blogs",
    yourBlogsDesc: "A blogging platform for everyone",
    madeWith: "Made with <3 Arigatou!"
  },
  jp: {
    name: "サイカット・マンダル",
    intro: "コード、創造性、そしてコーヒーで強力なウェブ＆モバイルアプリを作るソフトウェアエンジニアです。",
    findMe: "私を見つける",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    emailMe: "メールを送る",
    saying: "こんにちは！",
    professionalWorkTitle: "プロフェッショナルワーク",
    postnordTitle: "Postnord (TCS)",
    postnordLocation: "オンサイト、インド・プネ · 2024年7月 - 現在",
    postnordPosition: "ソフトウェアエンジニア",
    qvikTitle: "Qvik.io",
    qvikLocation: "リモート、インド・ノイダ · 2023年2月 – 2023年5月",
    qvikPosition: "ソフトウェア開発インターン",
    codeWorkTitle: "コード作品",
    askItTitle: "Ask it",
    askItDesc: "エンジニアが疑問と回答を共有するためのQ/Aプラットフォーム",
    fileupTitle: "Fileup",
    fileupDesc: "GdriveやiCloudに似たファイルストレージプラットフォーム",
    gluTitle: "Glu",
    gluDesc: "The hostellerのためのホステル予約アプリ",
    yourBlogsTitle: "Your Blogs",
    yourBlogsDesc: "すべての人のためのブログプラットフォーム",
    madeWith: "愛を込めて作りました <3 ありがとう！"
  }
};

export default function Home() {
  // State to track current language
  const [language, setLanguage] = useState<"en" | "jp">("en");
  const [showAlert, setShowAlert] = useState<boolean>(false)

  // Toggle between languages
  const changeLanguage = () => {
    const newLanguage = language === "en" ? "jp" : "en";
    setLanguage(newLanguage);

    // Show alert only after changing language
    // if (!showAlert) {
    //   alert("Language changed");
    // }

    // setShowAlert(prev => !prev);
  };


  // Get current content based on language
  const t = content[language];


  const sendMail = () => {
    window.location.href = "mailto:works.saikat@gmail.com";
  }

  return (
    <div className="px-6 md:px-20 code-font" >
      <DotRing />
      <div className="flex justify-between py-6">
        <h1 className="text-xl font-bold">{t.name}</h1>
        <div>
          <div >
            <input onChange={changeLanguage} id="check" type="checkbox" checked={language === "jp"} readOnly />
            <label className="switch" htmlFor="check">
              <svg viewBox="0 0 212.4992 84.4688" overflow="visible">
                <path
                  pathLength="360"
                  fill="none"
                  stroke="currentColor"
                  d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className="md:flex items-center mt-10 h-[80vh]">
        <div>
          <p className="text-4xl md:text-4xl font-bold">{t.intro}</p>
          <p className="md:text-2xl my-5">{t.findMe} <Link target="_blank" href="https://x.com/saikat_07_" className="underline">{t.twitter}</Link> or on <Link target="_blank" href="https://www.linkedin.com/in/saikat-mandal-310ab61b0/" className="underline">{t.linkedin}</Link>,
            or just <span onClick={sendMail} className="underline">{t.emailMe}</span> {t.saying}</p>
        </div>
        <Image
          src={mainImage}
          width={800}
          height={800}
          alt="Picture of the author"
        />
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

      <div className="">
        <h1 className="text-2xl font-bold my-20 text-center md:text-4xl">{t.codeWorkTitle}</h1>

        <div className="flex flex-wrap gap-4 max-w-5xl w-full justify-between items-center mx-auto mb-10">
          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{t.askItTitle}</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Snipcode.io"> <IoLinkSharp /></Link>
            </div>
            <p className="font-semibold my-2">{t.askItDesc}</p>
            <p>• Reactjs, Nodejs, mongoDb</p>
          </ProjectCard>

          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{t.fileupTitle}</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Dropbox-2.0"> <IoLinkSharp /></Link>
            </div>
            <p className="font-semibold my-2">{t.fileupDesc}</p>
            <p>• Reactjs, firebase auth, firebase storage</p>
          </ProjectCard>
        </div>


        <div className="flex flex-wrap gap-4 max-w-5xl w-full justify-between mx-auto mb-10">
          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{t.gluTitle}</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Hostel-backend"> <IoLinkSharp /></Link>
            </div>
            <p className="font-semibold my-2">{t.gluDesc}</p>
            <p>• React native, expo, spring boot , postgres</p>
          </ProjectCard>

          <ProjectCard>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{t.yourBlogsTitle}</p>
              <Link target="_blank" href="https://github.com/Saikat-Mandal/Blog-website"> <IoLinkSharp /></Link>
            </div>
            <p className="font-semibold my-2">{t.yourBlogsDesc}</p>
            <p>• ejs, nodejs, mongoDb</p>
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
        <p>{t.madeWith}</p>
      </footer>
    </div>
  );
}