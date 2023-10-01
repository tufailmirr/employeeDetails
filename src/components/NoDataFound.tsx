
import noDataIMG from '../assets/nodata.png'

const NoDataFound = ({message} : {message ?: string}) => {
  return (
    <div>
        <img src={noDataIMG} alt="nodata" className='object-contain' />
    </div>
  )
}

export default NoDataFound