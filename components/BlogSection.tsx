
import React from 'react';
import { 
    BLOG_POSTS_DATA, BLOG_TITLE_VERTICAL, BLOG_TITLE_HORIZONTAL_PART1,
    BLOG_TITLE_HORIZONTAL_PART2, BLOG_SUBTITLE, READ_MORE_TEXT,
    ALT_TEXT_BLOG_POST_IMAGE_BASE
} from '../constants';
import { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost, animationDelay: string }> = ({ post, animationDelay }) => {
  return (
    <div className="bg-[#101929] rounded-lg overflow-hidden shadow-lg group border border-transparent hover:border-[#C6A477] transition-all duration-300 animate-fadeInUp" style={{animationDelay}}>
      <div className="relative h-56 overflow-hidden">
        <img src={post.image} alt={`${ALT_TEXT_BLOG_POST_IMAGE_BASE}${post.title}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-[#C6A477] text-[#0B121F] px-3 py-1 rounded text-sm font-semibold">
          {post.date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-white mb-3 group-hover:text-[#C6A477] transition-colors duration-300 min-h-[56px]">
          {post.title}
        </h3>
        {post.excerpt && <p className="text-gray-400 text-sm mb-4 min-h-[60px]">{post.excerpt}</p>}
        <a href="#" className="font-semibold text-[#C6A477] hover:underline">{READ_MORE_TEXT} &rarr;</a>
      </div>
    </div>
  );
};

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-[#0B121F]">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
            <div className="hidden md:block [writing-mode:vertical-rl] transform rotate-180 mr-4 md:mr-8 animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
                 <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#C6A477] whitespace-nowrap tracking-wider">{BLOG_TITLE_VERTICAL}</h2>
            </div>
            <div className="flex-grow text-center md:text-left animate-fadeInRight" style={{animationDelay: '0.2s'}}>
                <h2 className="block md:hidden text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">{BLOG_TITLE_HORIZONTAL_PART1} <span className="text-[#C6A477]">{BLOG_TITLE_HORIZONTAL_PART2}</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
                    {BLOG_SUBTITLE}
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post, index) => (
            <BlogPostCard key={post.id} post={post} animationDelay={`${0.4 + index * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};
