
import Link from 'next/link'

export default function Header({pages})
{

    return (
        <>
        
      <header>
        <div className="container">
          <div className="menu">
            {pages.map((page, index) => (<Link key={index} href={page.pageUrl === 'home' ? '/' : page.pageUrl}>{page.localizeInfos.en_US.title}</Link>))}
          </div>
        </div>
      </header>
        </>
    )
}