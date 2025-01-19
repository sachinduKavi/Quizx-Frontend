
import {DotLoader} from 'react-spinners'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store'

export default function Loading() {
  const loading = useSelector((state: RootState) => state.loading)


  if (loading)
  return (
    <div className="fixed inset-0 bg-[#000000AA] z-50 overflow-hidden flex justify-center items-center">
        <DotLoader color='white'/>
    </div>
  );
}
