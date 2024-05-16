import React from 'react'
import { BsGithub, BsLinkedin} from 'react-icons/bs'
import { AiFillFileText } from "react-icons/ai";
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a target='blank' href="https://github.com/EdwardoMelo"><BsGithub /></a>
        </div>
        <div>
            <a target='blank' href="https://www.linkedin.com/in/eduardo-melo-4025bb202/"><BsLinkedin /> </a>
        </div>
        <div>
            <a target='blank' href="https://drive.google.com/file/d/1Yxa5LMbO3GohwDWcdMMUsFQK3xuEiSuM/view?usp=drive_link"><AiFillFileText /></a>
        </div>
    </div>
  )
}

export default SocialMedia