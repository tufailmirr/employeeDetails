import { ReactNode } from "react";
import { useParams } from "react-router-dom";

interface IHeaderProps {
    title : string;
    rightButton ?: ReactNode;
    classes ?: string
}

const Header = ({title, rightButton, classes} : IHeaderProps) => {

  return (
    <div className={`flex justify-between items-center p-4 ${classes}`}>
        <div> {title}</div>
        {rightButton}
    </div>
  )
}

export default Header