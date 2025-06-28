"use client"
import { useState, useEffect, useRef } from 'react';

type Post = {
  title: string;
  slug: string;
};

type Props = {
  posts: Post[];
};

export default function SearchBar({ posts }: Props) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<Post[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!query.trim()) {
      setFiltered([]);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      const lower = query.toLowerCase();
      const result = posts.filter((post) =>
        post.title.toLowerCase().includes(lower)
      ).slice(0, 10);
      setFiltered(result);
      setShowDropdown(true);
    }, 200);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [query, posts]);

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 150);
  };
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        onBlur={handleBlur}
        placeholder="Search posts..."
        className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm bg-white dark:bg-gray-900 text-black dark:text-white"
      />
      {showDropdown && filtered.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
          {filtered.map((post) => (
            <li key={post.slug}>
              <a
                href={`/${post.slug}`}
                className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
