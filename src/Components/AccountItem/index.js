import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652259600&x-signature=wYGWS1rH%2FXGzZw2hjQD%2FkOwnY%2BY%3D"
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
