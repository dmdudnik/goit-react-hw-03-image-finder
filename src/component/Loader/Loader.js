import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from '../Loader/Loader.module.css';

const loader = () => {
  return (
    <Loader
      className={style.Loader}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default loader;
