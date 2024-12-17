import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlighText from '../components/core/HomePage/HighlighText'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import Codeblocks from '../components/core/HomePage/Codeblocks'
import InstructorSection from '../components/core/HomePage/InstructorSection'

export const Home = () => {
  return (
    <div>

    <div className='max-w-maxContent relative mx-auto flex flex-col w-11/12 
    items-center text-white justify-between'>
         
        <Link to={"/signup"}>

            <div className='mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold
             text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
            
                <div className='flex flex-row items-center gap- rounded-full px-10
                 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                
                    <p>Become a Teacher</p>
                    <FaArrowRight/>
                </div>
            </div>
            
            </Link>
    <div className='text-center text-4xl font-semibold mt-4'>
        Smash ICSE board, 
        <HighlighText text ={"Outscore Everyone"}/>
    </div>

    <div className='w-[90%] text-center text-lg font-bold text-richblack-300 mt-4'>
    We help students top the ICSE board with quality teaching at affordable prices. Focused on delivering results, we make learning effective and accessible. Join us for success in your exams!
    </div>

  {/* CTA Buttons */}
  <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

    <div className='mx-3 my-12 shadow-blue-200'>

      <video muted loop autoPlay>
      <source src={Banner} type="video/mp4"/>
      </video>

    </div>


    <div>
      <Codeblocks 
      position={"lg:flex-row"}
      heading={
        <div>Score the <HighlighText text={"Highest Marks"}/> with our education platform</div> 
      }
      subheading={
        "Our ICSE-focused edtech platform offers high-quality video lessons designed to simplify learning and boost your grades."
      }
      ctabtn1={
        {
          btnText: "try yourself",
          linkto:"/signup",
          active:true,
        }
      }
      ctabtn2={
        {
          btnText: "more",
          linkto:"/login",
          active:false,
        }
      }
      codeblock={"Your learning partner for ICSE success—unlock top grades effortlessly!\n Master the ICSE syllabus with expert-curated content, interactive tools, and personalized guidance.\n Simplified learning for complex ICSE concepts—because your grades matter! \n Turn hard work into smart results with our tailored ICSE board preparation programs."}
      codeColor={"text-yellow-25"}
      />
    </div>

    </div>
      
{/*Section2*/}
<div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[100px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlighText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>
          </div>
       </div>

{/*Section 3 , complete last*/}
<div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/*<ReviewSlider />*/}

</div>

    </div>
  )
}
export default Home;