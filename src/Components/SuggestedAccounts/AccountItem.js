import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);
function AccountItem({ name }) {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2247eff386224fe3670b58cb436067b8~c5_100x100.jpeg?x-expires=1661097600&x-signature=Pwakg5jGwJaEgO9hR3tKamEhmrU%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Huỳnh Quế Trinh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quế Trinh</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
