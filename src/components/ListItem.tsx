import { formattedDate } from "../utils/DateHelpers";

interface IListItem {
    name: string;
    role : string;
    fromDate : Date;
    toDate ?: Date | null;
    onClick ?: () => void
}

const ListItem = ({name, role,fromDate, toDate, onClick }: IListItem) => {
  return ( 
    <div onClick={onClick} className="p-4 font-roboto border-[#354d52] border-b-[0.5px] w-full gap-2 grid list-group-item bg-[#FFFFFF]">
        <h2 className="text-base  leading-6 font-roboto font-medium text-[#323238]" >{name}</h2>
        <h4 className="text-sm font-normal text-[#949C9E]">{role}</h4>
        <h6 className="text-xs font-normal text-[#949C9E] leading-5">{formattedDate(fromDate)} { toDate && `-  ${formattedDate(toDate)}`}</h6> 
    </div>
  )
}

export default ListItem