import Header from 'components/Header';
import Footer from 'components/Footer';
import Contact from './Contact';

function DefaultLayout(props) {
  return (
    <div>
      <Header />
      <div className="container-fluid content-area">
      {props.children}
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
