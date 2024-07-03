import React from 'react'
import {db} from 'utils/firebase'
import {DocumentData, collection, getDocs} from 'firebase/firestore'
import BlogCard from '@/app/blog/_components/BlogCard';
import { BentoGrid, BentoGridItem } from '@/components/ui/bentoGrid';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { homeBlogPosts } from '@/data/blogPosts';
// async function getPosts() {
//   return getDocs(collection(db, 'blogPosts'))
//     .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
//     .catch(error => {
//       console.error("Error fetching posts:", error);
//       return []; 
//     });

// }


export default async function LandingBlog() {

  // const posts = await getPosts  
  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-center text-5xl font-ma font-light text-neutral-500 '>BLOG</h1>
      <div className='p-5 grid md:auto-rows grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto my-6'>
        {homeBlogPosts.map((post, i) => <BlogCard postData={post} key={i}/>)}
      </div>
      <Button size={'lg'}><Link href={'/blog'}>View All</Link></Button>
    </div>
)
}
