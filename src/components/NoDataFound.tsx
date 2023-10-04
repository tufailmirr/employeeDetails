
// @ts-ignore
import noDataIMG from '../assets/nodata.png'

const NoDataFound = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <img src={noDataIMG} alt="nodata" className='object-contain' />
    </div>
  )
}

export default NoDataFound