import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find((item) => item.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by : {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
