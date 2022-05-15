import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3acf5d722996ccc1ce3ce070d6d1d442~c5_100x100.jpeg?x-expires=1652367600&x-signature=81rwmrYyo6nrHE54RcDzwSxObrU%3D"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Cristian NeyuQ</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>neyuq.isme</span>
            </div>
        </div>
    );
}

export default AccountItem;
