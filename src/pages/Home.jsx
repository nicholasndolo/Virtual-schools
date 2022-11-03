import React, { Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
//import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
//import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
//import CreateStudent from "../components/";
//import LessonList from "../components/Lessons/LessonsList";
import CourseList from "../components/Courses/CourseList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import School from "../components/School/School";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <School/>
      <CourseList/>
      <AboutUs />
      <ChooseUs />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer/>
    </Fragment>
  );
};

export default Home;
