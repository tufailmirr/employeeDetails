

interface IHeaderProps {
    title : string;
    classes ?: string
}

const Header = ({title, classes} : IHeaderProps) => {

  return (
    <div className={`bg-[#1DA1F2] text-[#FFFFFF] p-4 ${classes}`}>
        {title}
    </div>
  )
}

export default Header