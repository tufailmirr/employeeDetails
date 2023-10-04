
import noDataIMG from '../assets/nodata.png'

const NoDataFound = ({message} : {message ?: string}) => {
  return (
    <div className='w-full flex items-center justify-center'>
        <img src={noDataIMG} alt="nodata" className='object-contain' />
    </div>
  )
}

export default NoDataFound