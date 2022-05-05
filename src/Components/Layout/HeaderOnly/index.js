import Header from '~/Components/Layout/Components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
