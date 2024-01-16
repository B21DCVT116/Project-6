import "./menu.scss"
import { MdWork } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { IoClipboard } from "react-icons/io5";
import { Button, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";

  const items = [
    {
      key: "dashboard/job",
      icon: <MdWork />,
      label: <Link to={"dashboard/job"}>Job</Link>,
    },
    {
      key: "dashboard/cv",
      icon: <IoClipboard />,
      label: <Link to={"dashboard/cv"}>CV</Link>,
    },
    {
      key: "dashboard/company",
      icon: <FaBuildingUser />,
      label: <Link to={"dashboard/company"}>About me</Link>,
    },
  ];

const MenuSider = () => {
    const location = useLocation();
    const [collapsed,setCollapse] = useState(false)
    const onclick = ()=>{
      setCollapse(!collapsed);
    }
    return (
      <div className={'menu ' + (collapsed ? "menu__fold" : "")}>
          <Button
          type="primary"
          onClick={onclick}
          style={{
              marginBottom: 16,
          }}
          >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
              defaultSelectedKeys={[location.pathname]}
              mode="inline"
              theme="light"
              inlineCollapsed={collapsed}
              items={items}
          />
      </div>
    );
};
  
  export default MenuSider;
  