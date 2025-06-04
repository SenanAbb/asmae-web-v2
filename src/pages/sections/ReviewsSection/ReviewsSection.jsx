import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './ReviewsSection.css';
import { AiFillStar } from 'react-icons/ai';
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
            onClick={() => {}}
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
            Prev
          </button>
          <button className="embla__next" onClick={scrollNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
