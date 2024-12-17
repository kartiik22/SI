import React from 'react'
import CTAButton from "../HomePage/Button"
import HighlighText from './HighlighText'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'



const Codeblocks = ({
    position,
    heading,
    subheading,
    ctabtn1,
    ctabtn2,
    codeblock,
    backgroundGradient,
    codeColor,
  }) => {  return (
    <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>
    

      {/* Section 1  */}
      <div className="w-[100%] lg:w-[22%] flex flex-col gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
          <div className="flex items-center gap-2 whitespace-nowrap">
          {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
        </div>
{/*Section 2, Animation*/}
<div> 
<div className="ml-3 pl-3 text-center flex flex-col   w-[20%] select-none text-richblack-400 font-inter font-bold ">
        
        </div>

        {/* Codes */}
        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1 `}
        ><TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
    </div>
</div>





    </div>
  )
}

export default Codeblocks;