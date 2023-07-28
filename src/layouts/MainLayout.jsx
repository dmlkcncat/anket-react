import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import SideBar from './SideBar'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <div className="flex-shrink-0 float-left">
            <SideBar />
          </div>
          <div className="flex-1 pr-8 pt-12">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>

      {/* <Container>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center gap-2 rounded border-solid border border-gray-400 p-6 w-full">
            <Button
              as={Link}
              to={getPath('surveys.create')}
              className="flex-1"
            >
              Anket Ekle
            </Button>
            <Button
              as={Link}
              to={getPath('surveys')}
              className="flex-1"
              variant="gray"
            >
              Anketler
            </Button>
            <Button
              as={Link}
              to={getPath('answers.create', { surveyId: '6352a1e238a63f3cd5a313df' })}
              className="flex-1"
            >
              Anket Cevapla
            </Button>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </Container> */}
    </>
  )
}
export default MainLayout
