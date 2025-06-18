import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './ReviewsSection.css';
import { AiFillCaretRight, AiFillStar } from 'react-icons/ai';
import { reviews } from '../../../data/reviews';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button/Button';
import { ReviewCard } from '../../../components/ReviewCard/ReviewCard';

export const ReviewsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { t } = useTranslation();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="review-title">
          <div className="review-title-text-container">
            <span>4.9</span>
            <div className="review-title-text">
              <h2>{t('reviews_section_title')}</h2>
              <div className="stars">
                <AiFillStar size={24} />
                <AiFillStar size={24} />
                <AiFillStar size={24} />
                <AiFillStar size={24} />
                <AiFillStar size={24} />
              </div>
            </div>
          </div>

          <Button
            text={t('reviews_section_button')}
            type="primary"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Asmae+KIRIMOV/@43.2971682,-0.3741877,17z/data=!3m1!5s0xd5648d3b3a46b77:0x4eb3ef90b6f9c2b9!4m8!3m7!1s0xd5649a14ecc3449:0x639aef6cf383aa82!8m2!3d43.2971643!4d-0.3716128!9m1!1b1!16s%2Fg%2F11shfbly5b?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
                '_blank'
              )
            }
            style={{
              borderRadius: '2rem',
              color: 'var(--white)',
              fontWeight: '600',
            }}
          />
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {reviews.map((review, index) => (
              <div className="embla__slide" key={index}>
                {/* REVIEW CARD */}
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          <button className="embla__prev" onClick={scrollPrev}>
            <AiFillCaretRight />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
    </section>
  );
};
