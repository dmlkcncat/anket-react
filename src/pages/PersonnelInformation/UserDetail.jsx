import { Card } from 'flowbite-react'
import React from 'react'

const UserDetail = () => {
  return (
    <>
      <div className=" gap-3">
        <Card style={{ backgroundColor: '#F7FCFF' }}>
          <div className="max-w-xl flex justify-between"></div>
          <div className="flow-root">
            <div className="flex flex-col pb-10 items-center">
              <img
                className="mb-3 h-36 w-36 rounded-full shadow-lg"
                src="/images/user.png"
              />
              <h5
                style={{ color: '#1a768f' }}
                className="py-4 mb-1 text-xl font-medium"
              >
                Kişisel Bilgiler
              </h5>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/images/pen.png"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      style={{ color: '#1a768f' }}
                      className="truncate text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ad Soyad
                    </p>
                    <p className=" py-2 truncate text-sm text-gray-500 dark:text-gray-400">
                      Damla Akcin
                    </p>
                  </div>
                </div>
              </li>
              <hr />
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/images/pen.png"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      style={{ color: '#1a768f' }}
                      className="truncate text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mail Adresi
                    </p>
                    <p className=" py-2 truncate text-sm text-gray-500 dark:text-gray-400">
                      damla.akcin@gmail.com
                    </p>
                  </div>
                </div>
              </li>
              <hr />
              <li className="py-3 sm:py-6">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/images/pen.png"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      style={{ color: '#1a768f' }}
                      className="truncate text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Telefon Numarası
                    </p>
                    <p className=" py-2 truncate text-sm text-gray-500 dark:text-gray-400">
                      546 345 34 34
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  )
}

export default UserDetail
