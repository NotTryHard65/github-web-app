import '../../assets/styles/header.css'

function BuildPrimaryHeader() {
  return(
    <div className='primary-header'>
      <div className="logo">
        <img src="" alt="Логотип компании"/>
      </div>  
    
      <nav className="navigation-primary" aria-label="Основная навигация">
        <a href="/catalog">Каталог</a>
        <a href="/promotions">Акции и цены</a>
        <a href="/contacts">Контакты</a>

        <button class="avatar-btn">
          <img src="./public/avatar-logo.png" alt="avatar icon"/>
        </button>
      </nav>
    </div>
  )
}

function BuildSecondaryHeader() {
  return(
      <div className="subheader">
        <nav className="navigation-secondary" aria-label="Дополнительная навигация">
          <a href="/news" target="_blank">Новости</a>
          <a href="/rules" target="_blank">Правила</a>
          <a href="/support" target="_blank">Поддержка</a>
          <a href="/questions" target="_blank">Вопросы</a>
          <button>Download App</button>
        </nav>
      </div>
  )
}

export default function BuildHeader () {

    return (
      <>
        <BuildPrimaryHeader />
        <BuildSecondaryHeader />
      </>
    )
}