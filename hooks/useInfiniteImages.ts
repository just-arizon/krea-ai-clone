import { useState, useEffect, useCallback } from 'react';

const PAGE_SIZE = 12;

/* fake backend – replace with your real API call */
const fetchImages = async (page: number): Promise<string[]> =>
  Array.from({ length: PAGE_SIZE }, (_, i) => {
    const id = (page - 1) * PAGE_SIZE + i;
    return `https://picsum.photos/500/${500 + (id % 4) * 100}?random=${id}`;
  });

export default function useInfiniteImages() {
  const [images, setImages] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newImages = await fetchImages(page);
    setImages((prev) => [...prev, ...newImages]);
    setPage((p) => p + 1);
    setHasMore(newImages.length === PAGE_SIZE); // stop when backend sends < PAGE_SIZE
    setLoading(false);
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMore(); // initial batch
  }, []);

  return { images, loading, hasMore, loadMore };
}