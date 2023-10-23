import { useSelector, useDispatch } from 'react-redux';
import { toggleSoften, toggleSustain } from '../slices/soundEffectsSlice';

function soften() {
    const dispatch = useDispatch();
    dispatch(toggleSoften());
    console.log('here');
}

export default soften;
