import React, { useState } from 'react';
import '../../assets/styles/content-reviews.css'
import '../../assets/styles/base.css'
import '../../assets/styles/content-cars-ransom.css'
import '../../assets/styles/services-provides.css'

function Rating({user_nickname}) {
  return (<p>{user_nickname} {'⭐'.repeat(5)}</p>);
}

function BuildContentRewies({nickname}) {
  return(
    <div className="reviews-primary">
      <div className="reviews-secondary">
        <div className="user-avatar">
          <img src="./public/my_avatar.jpg" alt="Аватар пользователя"/>
        </div>
        <div className="user-nickname">
          <Rating user_nickname={nickname}/>
        </div>
      </div>
      <div className="user-text-review">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quas praesentium alias rem eaque. Pariatur consequuntur iusto, 
          praesentium voluptatem, et facere repudiandae ea quasi cum blanditiis accusantium! 
          Odio minus magni itaque..
        </p>
      </div>
    </div>
  ) 
}

function BuildContentCarsRansom({path, title, type, km, cm3, manufacture_year, price}) {
  return(
    <div className="card">
      <img src={path} alt="Изображение машины"/>
      <div className="card-title">
        <p>{title}</p>
      </div>

      <div className="description">
        <span>{manufacture_year}г.</span>
        <p>{type} | {km} км | {cm3}c</p>
      </div>
      <div className="price-content">
        <p>{price}₽</p>
        <div class="buy-btn">
          <button>Купить</button>
        </div>
      </div>
    </div>
    
  )
}


function BuildContainerMenu() {
    const [currentPage, setCurrentPage] = useState('reviews');

    const contents = {
        'reviews': (
          <div class="flex-container">
            <BuildContentRewies nickname="Даниил"></BuildContentRewies>
            <BuildContentRewies nickname="Александр"></BuildContentRewies>
            <BuildContentRewies nickname="Анастасия"></BuildContentRewies>
          </div>
        ),
        'cars_for_ransom': (
          <div>
            <div className="cars-grid">
              <BuildContentCarsRansom 
                path="./public/car-images/toyota_yaris2021.jpg"
                title = "Toyota Yaris"
                type = "Хэтчбэк"
                km = {39000}
                cm3 = {1000}
                manufacture_year = {2021}
                price = "903 000"
              />
              <BuildContentCarsRansom 
                path="./public/car-images/mazda-roadster2021.jpg"
                title = "Mazda Roadster"
                type = "Хэтчбэк"
                km = {50000}
                cm3 = {1000}
                manufacture_year = {2021}
                price = "2 000 000"

              />
              <BuildContentCarsRansom 
                path="./public/car-images/Mercedes-benz-e_class2021.jpg"
                title = "Mercedes Benz E class"
                type = "Хэтчбэк"
                km = {20000}
                cm3 = {1000}
                manufacture_year = {2021}
                price = "3 000 000"

              />
              <BuildContentCarsRansom 
                path="./public/car-images/subary-levorg2020.jpg"
                title = "Subary Levorg"
                type = "Хэтчбэк"
                km = {60000}
                cm3 = {1000}
                manufacture_year = {2020}
                price = "1 700 000"
              />
            </div>
            <div className="btn-move">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        ),
        'about_us': (
          <div>
            <div>
              <h2>CARVITY</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </div>
        ),
        'services_provided': (
          <div class="services-container">
            <ol>
              <li>Мойка автомобиля</li>
              <li>Техническое обслуживание</li>
              <li>Возможность купить машину в кредит</li>
              <li>Круглосуточная поддержка</li>
              <li>Доставка авто - к вашему местоположению</li>
              <li>Дополнительное оборудование для автомобиля</li>
            </ol>
          </div>
        )
    };

    return(
      <div className="menu-container">
        <h1>Используй, радуйся, экономь</h1>
          <div className="categories">
            <p>Категории</p>
              <div className="button-fields">
                <button onClick={() => setCurrentPage('reviews')}>Отзывы</button>
                <button onClick={() => setCurrentPage('cars_for_ransom')}>Машины под выкуп</button>
                <button onClick={() => setCurrentPage('about_us')}>О компании</button>
                <button onClick={() => setCurrentPage('services_provided')}>Предоставляемые услуги</button>
              </div>

              <div className="content-area">
                {contents[currentPage]}
              </div>
          </div>
        </div>
    )   
}

export default BuildContainerMenu;