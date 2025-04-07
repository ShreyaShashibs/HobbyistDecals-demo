import BrowsePanelComponent from "@/components/global/browse-panel";
import AdvertisementBannersComponent from "./_components/advertisement-banners";
import BestDealsComponent from "./_components/best-deals";
import UserBenefitsComponent from "@/components/global/user-benefits";
import DecalListCarousalComponent from "@/components/global/decals-list-carousal";
import { categoriesList, topPicksList } from "@/lib/constants";
import BlogsComponent from "./_components/blogs";
import ProductCarousel from "./_components/product-carousel";
import FeaturedDecals from "./_components/featuredDecals";
import Banner from "./_components/banner";


export default function Home() {
  return (
    
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-3 bg-primary gap-3">
      <BrowsePanelComponent />
      <AdvertisementBannersComponent />
      <UserBenefitsComponent />
      <DecalListCarousalComponent
        title="explore our wide range of high-quality decal categories"
        list={categoriesList}
      />

      <BestDealsComponent />
      <ProductCarousel />
      <DecalListCarousalComponent
        title="Discover Our Latest Hobbyist Decals – New Arrivals with Top-Quality Designs"
        list={topPicksList}
      />
      <Banner/>
      <FeaturedDecals/>
      <BlogsComponent />
    </div>
    
  );
};