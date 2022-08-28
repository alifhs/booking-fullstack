import { Feature } from '../../components/featured/Feature';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import { Header } from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';
import { PropertyList } from '../../components/propertyList/propertyList';
import './home.css';
import { MailList } from '../../components/mailList/MailList';
import { Footer } from '../../components/footer/Footer';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Feature />
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList />
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}
