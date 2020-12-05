
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const MenuComponent = () => {
    const [activeItem, setActiveItem] = useState('home')
    const history = useHistory()
    const handleItemClick = (e :React.MouseEvent<HTMLAnchorElement, MouseEvent>,name : string) => 
    {
     setActiveItem( name )
     history.push(`/policy/${name}`)
    }
    return (
        
        <Menu pointing secondary vertical>
            <h2>Chính sách</h2>
        <Menu.Item
          name='Giao hàng'
          active={activeItem === 'giaohang'}
          onClick={(e) => handleItemClick(e,'giaohang')}
        />
        <Menu.Item
          name='Bảo hành'
          active={activeItem === 'baohanh'}
          onClick={(e) => handleItemClick(e,'baohanh')}
        />
        <Menu.Item
          name='Thanh toán'
          active={activeItem === 'thanhtoan'}
          onClick={(e) => handleItemClick(e,'thanhtoan')}
        />
        <Menu.Item
          name='Góp ý , báo lỗi'
          active={activeItem === 'gopy'}
          onClick={(e) => handleItemClick(e,'gopy')}
        />
        <Menu.Item
          name='Mua hàng trả góp'
          active={activeItem === 'tragop'}
          onClick={(e) => handleItemClick(e,'tragop')}
        />
        <Menu.Item
          name='Chính sách đổi trả'
          active={activeItem === 'doitra'}
          onClick={(e) => handleItemClick(e,'doitra')}
        />
        <Menu.Item
          name='Quy chế hoạt động website TMDT'
          active={activeItem === 'quyche'}
          onClick={(e) => handleItemClick(e,'quyche')}
        />
        <Menu.Item
          name='Dành cho doanh nghiệp'
          active={activeItem === 'doanhnghiep'}
          onClick={(e) => handleItemClick(e,'doanhnghiep')}
        />
        <Menu.Item
          name='Hướng dẫn mua hàng'
          active={activeItem === 'huongdanmuahang'}
          onClick={(e) => handleItemClick(e,'huongdanmuahang')}
        />
      </Menu>
    )
}

export default MenuComponent
