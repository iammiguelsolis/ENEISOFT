import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import styles from './CarruselInvitados.module.css';

import img1 from '../assets/invitado1.jpg';
import img2 from '../assets/invitado2.jpg';
import img3 from '../assets/invitado3.jpg';
import img4 from '../assets/invitado1.jpg';

export function CarruselInvitados() {
  const invitados = [img1, img2, img3, img4, img1, img2, img3, img2, img3, img4, img1, img2, img3];

  return (
    <section className='bg-white'>
      <div className={styles.container}>
        <h1 className='text-7xl font-bold'>INVITADOS</h1>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={true}
          slidesPerView={5}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.swiper_container}
        >
          {invitados.map((img, i) => (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <img src={img} alt={`Invitado ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
