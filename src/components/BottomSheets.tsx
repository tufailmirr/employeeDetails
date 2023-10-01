
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import ListItem from './ListItem';
import "react-spring-bottom-sheet/dist/style.css";

export default function Example({onClick } : any) {
  return (
    <BottomSheet open={false} >
        {
            [1,2,3,5].map(() => {
                return <div>
                    Profile
                </div>
            })
        }
    </BottomSheet>
  )
}