import { Sidebar } from 'flowbite-react'
import SidebarItem from 'flowbite-react/lib/esm/components/Sidebar/SidebarItem'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaUserFriends, FaPenSquare, FaServer, FaDoorOpen } from 'react-icons/fa'

const SideBar = () => {
  return (
    <>
      <div
        className="w-fit hidden md:block"
        style={{ margin: '25% 0' }}
      >
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10 py-2">
          <Link to="/profile">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg object-cover"
              src="/images/user.png"
              alt="avatar"
            />
          </Link>
          <Link to="/profile">
            <h5
              style={{ color: '#5f9dcf' }}
              className="mb-1 text-xl font-medium text-gray-900 dark:text-white"
            >
              Damla Akcin
            </h5>
          </Link>
        </div>
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <SidebarItem
                to="/"
                icon={FaHome}
              >
                Ana Sayfa
              </SidebarItem>
              <SidebarItem icon={FaUserFriends}>Kişisel Bilgiler</SidebarItem>
              <SidebarItem icon={FaPenSquare}>Anket Oluştur</SidebarItem>
              <SidebarItem icon={FaServer}>Anketleri Görüntüle</SidebarItem>
              <SidebarItem icon={FaDoorOpen}>Çıkış Yap</SidebarItem>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  )
}

export default SideBar
