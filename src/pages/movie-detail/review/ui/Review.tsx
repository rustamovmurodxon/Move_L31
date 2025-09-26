import { useMovie } from '@/entities/movie';
import React, { memo, type FC } from 'react'
import { useOutletContext } from 'react-router-dom';

// interface Props {
//   id: string;
// }

interface ContextType {
  id: string;
}
interface IReview {
  id: string;
  author: string;
  content: string;
  created_at: string;
}

export const Review = memo((props) => {
  
  const { id } = useOutletContext<ContextType>();

  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  const { data: reviews } = getMovieInfo(id, "reviews");
  if (!id) return null;

  return (
    <div>

{reviews?.results?.length > 0 && (
          <section className="container py-6 space-y-4">
            <h2 className="text-2xl font-semibold text-[#cdc6c6]">Reviews</h2>
            {reviews.results.map((review: IReview) => (
              <div
                key={review.id}
                className="p-4   rounded-lg shadow-sm bg-[#d4d4d492] "
              >
                <p className="text-sm text-gray-100">
                  By <span className="font-medium">{review.author}</span>
                </p>
                <p className="mt-2 text-gray-100 dark:text-gray-200 line-clamp-2">
                  {review.content}
                </p>
              </div>
            ))}
          </section>
        )}
    </div>
  )
})
