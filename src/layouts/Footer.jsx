import React from 'react'
import { Footer as FFooter } from 'flowbite-react'
import { getPath } from '../utils'
import { Link } from 'react-router-dom'
import FooterLink from '../components/FooterLink'

const Footer = () => {
  return (
    <div>
      <FFooter container={true}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex xs:items-center xs:justify-between">
            <FFooter.Brand
              href="/"
              src="/images/logo.svg"
              alt="Logo"
            />
            <FFooter.LinkGroup>
              <FooterLink to={getPath('userDetail')}>Kişisel Bilgiler</FooterLink>
              <FooterLink to={getPath('surveys.create')}>Anket Oluştur</FooterLink>
              <FooterLink>Anketleri Görüntüle</FooterLink>
            </FFooter.LinkGroup>
          </div>
          <FFooter.Divider />
          <div>
            <FFooter.Copyright
              href="https://kobizon.com.tr/"
              by="Kobizon PDM™"
              year={2023}
            />
          </div>
        </div>
      </FFooter>
    </div>
  )
}

export default Footer
