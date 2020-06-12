import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { ISection,sections } from '../../models/section';


class Directory extends React.Component<any,any> {
    constructor(props:any){
        super(props);

        this.state = {
            sections: [] = sections
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map((section:ISection)=>(
                    <MenuItem key={section.id} section={section}></MenuItem>
                ))
                }
            </div>
        )
    }
}


export default Directory;
// export const Directory = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }
