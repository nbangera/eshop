import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { ISection } from '../../models/section';
import { useSelector } from 'react-redux';
import { selectSections } from '../../redux/directory/directory.selector';


const Directory = () =>{

    const sections = useSelector(selectSections);
    
        return(
            <div className="directory-menu">
                {sections.map((section:ISection)=>(
                    <MenuItem key={section.id} section={section}></MenuItem>
                ))
                }
            </div>
        )    
}


export default Directory;

