import { ComponentProps } from "react";
import { variants, type ButtonVariants } from './button-varient';
 

export type ButtonProps = ComponentProps<'button'> & ButtonVariants & {  
 
    size?: "small" | "medium" | "large";
} 
const Button = ({variant = 'primary',size = 'medium' ,...props} : ButtonProps) => {
 


  return <button {...props}  className={variants({variant , size})} />;
};

export default Button;

  