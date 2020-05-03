import * as React from 'react';
import { X, Search, Icon } from 'react-feather';
import { Camera } from 'react-feather';

//import { iconAddGlyph, iconSearch } from '@wfp/icons';

export interface IButtonProps {
  children?: React.ReactNode,
    disabled?:boolean
  buttonText?: string;
  click?:boolean
  onClick?:((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  backgroundColor?:string  
  color?:string
  Icon?:(Icon)
  outline?:boolean
  isIcon?:boolean
  primary?: boolean;
  flag?:number
  action?:any


danger?: boolean;
  
}




export default (props: IButtonProps) => {
  const {flag,backgroundColor,onClick,color,disabled} = props;
 
  if(flag===1)
  {
  return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
       <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={onClick}  type="button">
      
           <div>
            <X/>  
          </div>
            {props.children}
      </button> 
   </div>

  )
       }
       else if (flag===2)
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={onClick}   type="button">
          
               <div>
                <Search/>  
              </div>
                {props.children}
          </button> 
       </div>
    
      )
      
       }
       else if(flag===3)
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }} >
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={onClick}   type="button">
          
               <div>
                <Camera/>  
              </div>
                {props.children}
          </button> 
       </div>
    
      )
       }
       else
       
       {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <button className="fa4" style={{backgroundColor,color}}  disabled={disabled} onClick={onClick}  type="button">
          
                {props.children}
          </button> 
       </div>
    
      )
       }
  }



