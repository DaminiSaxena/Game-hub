import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown, BsChevronDown, BsMenuDown } from 'react-icons/bs'
import { usePlatform } from '../../hooks/usePlatform'
import { Platform } from './GameCard'

interface props{
  onSelectPlatform: (platform:Platform) => void;
  selectedPlatform: Platform;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}:props) => {
    const {data, error, isLoading} = usePlatform();
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform ? selectedPlatform?.name:"Platform"} </MenuButton>
        <MenuList >{data.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}</MenuList>
    </Menu>
  )
}

export default PlatformSelector