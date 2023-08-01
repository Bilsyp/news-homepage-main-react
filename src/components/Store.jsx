import Pc from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";
import Box from "./Box";

const Store = () => {
  return (
    <div className='store md:flex justify-between  my-3 w-full'>
      <Box
        num={"01"}
        title={"Reviving Retro PCs"}
        source={Pc}
        paragraph={"What happens when old PCs are given modern upgrades?"}
      />
      <Box
        num={"02"}
        title={"Top 10 Laptops of 2022"}
        source={Laptops}
        paragraph={"Our best picks for various needs and budgets."}
      />
      <Box
        num={"03"}
        title={"The Growth of Gaming"}
        source={Gaming}
        paragraph={"How the pandemic has sparked fresh opportunities."}
      />
    </div>
  );
};

export default Store;
