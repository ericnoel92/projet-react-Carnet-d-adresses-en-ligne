import logo_footer from '../img/logo_footer.png';
import '../css/pages/footer.css';

function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={logo_footer} alt="logo" />
      <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
  
export default Footer;
  