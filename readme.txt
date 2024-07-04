1. modal-project.html удалить клас modal__dialog--sm
2. Додати файл стилів modal-swiper.scss
3. Рекомендовані розміри зображень
   - на слайдер, що на сторінці  433x320 (0,74), ширина до висоти 4х3
   - у модальному вікні 1200x700 (0,58)

4. .pr-card {
 height: 320px;
 width: 100%;
 max-width: 433px;

 @include widescreen {
    height: 296px;
 }
}
5. Додати стиль .swiper.mySwiper {
     max-width: 1440px;

     }

