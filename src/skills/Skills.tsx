import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={'JavaScript'}
                           description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'}/>
                    <Skill title={'Redux'}
                           description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'}/>
                    <Skill title={'Storybook'}
                           description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'}/>
                    <Skill title={'Unit tests'}
                           description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;