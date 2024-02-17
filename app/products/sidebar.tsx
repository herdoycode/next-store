import { Box } from "@radix-ui/themes";
import CategoryList from "./category-list";
import PriceSlider from "./price-slider";

const Sidebar = async () => {
  return (
    <Box className="hidden space-y-4 md:block" p="3">
      <CategoryList />
      <PriceSlider />
    </Box>
  );
};

export default Sidebar;
