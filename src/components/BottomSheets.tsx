
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import "react-spring-bottom-sheet/dist/style.css";

interface IBottomSheetProps {
    open : Boolean;
    onClick : (data : any) => void;
    onClose : () => void;
    roles : {
        title : string;
        value : string;
    }[]
}


export default function BottomSheetFilter({open, onClick, onClose , roles } : IBottomSheetProps) {
  return (
    <BottomSheet className="grid text-center gap-3" open={open} onDismiss={onClose} >
        {
            roles?.map((role) => {
                return <div className={`p-2 border-[#f2f2f2] border-b-[0.5px]`} onClick={() => onClick(role)}>
                   {role.title}
                </div>
            })
        }
    </BottomSheet>
  )
}