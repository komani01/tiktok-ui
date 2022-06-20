import Header from '~/Layouts/Components/Header/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import SideBar from '~/Layouts/Components/SideBar';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
